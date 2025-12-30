import { create } from "zustand";
import {
  getCart,
  addToCart as apiAddToCart,
  removeFromCart as apiRemoveFromCart,
  updateCartItemQuantity as apiUpdateQuantity,
  type CartItemApi,
} from "@/lib/api/cart";
import { toast } from "sonner";

// Simplified cart item for use in the UI
export interface CartItem {
  productId: string;
  variantId: string;
  name: string;
  slug: string;
  aroma: string;
  gram: number;
  pieces: number;
  price: number;
  discountedPrice: number | null;
  photoSrc: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  isInitialized: boolean;

  initializeCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
  addItem: (item: {
    productId: string;
    variantId: string;
    quantity?: number;
  }) => Promise<void>;
  removeItem: (productId: string, variantId: string) => Promise<void>;
  updateQuantity: (
    productId: string,
    variantId: string,
    quantity: number
  ) => Promise<void>;
  incrementQuantity: (productId: string, variantId: string) => Promise<void>;
  decrementQuantity: (productId: string, variantId: string) => Promise<void>;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Convert backend response to UI format
function mapApiItemToCartItem(apiItem: CartItemApi): CartItem {
  // Price information is directly in apiItem
  const unitPrice = (apiItem as any).unit_price || 0;

  return {
    productId: apiItem.product_id,
    variantId: apiItem.product_variant_id,
    name: apiItem.product,
    slug: apiItem.product_slug,
    aroma: apiItem.product_variant_detail?.aroma || "",
    gram: apiItem.product_variant_detail?.size?.gram || 0,
    pieces: apiItem.product_variant_detail?.size?.pieces || 1,
    price: unitPrice,
    discountedPrice: null,
    photoSrc: apiItem.product_variant_detail?.photo_src || "",
    quantity: apiItem.pieces,
  };
}

export const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  isLoading: false,
  isInitialized: false,

  // Load cart from backend
  initializeCart: async () => {
    set({ isLoading: true });
    try {
      const apiItems = await getCart();
      const items = apiItems.map(mapApiItemToCartItem);

      set({ items, isInitialized: true, isLoading: false });
    } catch (error) {
      console.error("Sepet yüklenemedi.", error);
      set({ items: [], isLoading: false });
    }
  },

  // New: Silent refresh (without changing loading state)
  refreshCart: async () => {
    try {
      const apiItems = await getCart();
      const items = apiItems.map(mapApiItemToCartItem);
      set({ items });
    } catch (error) {
      console.error("Sepet yenilenemedi.", error);
    }
  },

  addItem: async ({ productId, variantId, quantity = 1 }) => {
    set({ isLoading: true });
    try {
      const result = await apiAddToCart({
        product_id: productId,
        product_variant_id: variantId,
        pieces: quantity,
      });

      if (!result.success) {
        toast.error(result.message || "Ürün eklenemedi");
        set({ isLoading: false });
        return;
      }

      // Use refreshCart (to avoid loading state conflict)
      await get().refreshCart();
      toast.success("Ürün sepete eklendi");
    } catch (error) {
      toast.error("Bir hata oluştu.");
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  removeItem: async (productId, variantId) => {
    // First, find the item to remove (to get the quantity)
    const itemToRemove = get().items.find(
      (item) => item.productId === productId && item.variantId === variantId
    );

    const previousItems = get().items;

    // Immediately remove from UI (Optimistic update)
    set({
      items: previousItems.filter(
        (item) =>
          !(item.productId === productId && item.variantId === variantId)
      ),
    });

    try {
      const result = await apiRemoveFromCart({
        product_id: productId,
        product_variant_id: variantId,
        pieces: itemToRemove ? itemToRemove.quantity : 1, // Send the quantity of the item
      });

      if (!result.success) {
        throw new Error(result.message);
      }
      toast.success("Ürün sepetten çıkarıldı");

      // For safety, refresh the cart
      await get().refreshCart();
    } catch (error) {
      // In case of error, revert the UI
      set({ items: previousItems });
      console.error("Sepetten ürün silinemedi:", error);
      toast.error("Ürün silinemedi.");
    }
  },

  updateQuantity: async (productId, variantId, quantity) => {
    if (quantity < 1) {
      return get().removeItem(productId, variantId);
    }

    const previousItems = get().items;
    set({
      items: previousItems.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      ),
    });

    try {
      const result = await apiUpdateQuantity(productId, variantId, quantity);

      if (!result.success) {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error("Adet güncellenemedi");
      set({ items: previousItems });
    }
  },

  incrementQuantity: async (productId, variantId) => {
    const item = get().items.find(
      (i) => i.productId === productId && i.variantId === variantId
    );
    if (item) {
      await get().updateQuantity(productId, variantId, item.quantity + 1);
    }
  },

  decrementQuantity: async (productId, variantId) => {
    const item = get().items.find(
      (i) => i.productId === productId && i.variantId === variantId
    );
    if (item) {
      await get().updateQuantity(productId, variantId, item.quantity - 1);
    }
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => {
      const price = item.discountedPrice || item.price;
      return total + price * item.quantity;
    }, 0);
  },
}));
