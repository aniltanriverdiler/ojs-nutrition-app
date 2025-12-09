import { create } from "zustand";
import { persist } from "zustand/middleware";
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
  // State
  items: CartItem[];
  isLoading: boolean;
  isInitialized: boolean;

  // Actions
  initializeCart: () => Promise<void>;
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

  // Computed Properties
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Convert backend response to UI format
function mapApiItemToCartItem(apiItem: CartItemApi): CartItem {
  return {
    productId: apiItem.product_id,
    variantId: apiItem.product_variant_id,
    name: apiItem.product, 
    slug: apiItem.product_slug,
    aroma: apiItem.product_variant_detail?.aroma || "", 
    gram: apiItem.product_variant_detail?.size?.gram || 0, 
    pieces: apiItem.product_variant_detail?.size?.pieces || 1, 
    price: apiItem.product_variant_detail?.price?.total_price || 0, 
    discountedPrice: apiItem.product_variant_detail?.price?.discounted_price || null, 
    photoSrc: apiItem.product_variant_detail?.photo_src || "", 
    quantity: apiItem.pieces,
  };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      isInitialized: false,

      // Load cart from backend (will run on page load)
      initializeCart: async () => {
        if (get().isInitialized) return;

        set({ isLoading: true });
        try {
          const apiItems = await getCart();
          const items = apiItems.map(mapApiItemToCartItem);
          set({ items, isInitialized: true });
        } catch (error) {
          console.error("Sepet yüklenemedi.", error);
          set({ items: [] });
        } finally {
          set({ isLoading: false });
        }
      },

      // Add item to cart
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
            return;
          }

          // Refresh cart from backend
          const apiItems = await getCart();
          const items = apiItems.map(mapApiItemToCartItem);
          set({ items });

          toast.success("Ürün sepete eklendi");
        } catch (error) {
          toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
          console.error("Ürün eklenemedi.", error);
        } finally {
          set({ isLoading: false });
        }
      },

      // Remove item from cart
      removeItem: async (productId, variantId) => {
        set({ isLoading: true });
        try {
          const result = await apiRemoveFromCart({
            product_id: productId,
            product_variant_id: variantId,
          });

          if (!result.success) {
            toast.error(result.message || "Ürün silinemedi");
            return;
          }

          // Remove from local state
          set((state) => ({
            items: state.items.filter(
              (item) =>
                !(item.productId === productId && item.variantId === variantId)
            ),
          }));
          
          toast.success("Ürün sepetten çıkarıldı");
        } catch (error) {
          toast.error("Bir hata oluştu.");
        } finally {
          set({ isLoading: false });
        }
      },

      // Update quantity of an item
      updateQuantity: async (productId, variantId, quantity) => {
        if (quantity < 1) {
          await get().removeItem(productId, variantId);
          return;
        }

        set({ isLoading: true });
        try {
          const result = await apiUpdateQuantity(
            productId,
            variantId,
            quantity
          );

          if (!result.success) {
            toast.error(result.message || "Adet güncellenemedi");
            return;
          }

          // Refresh cart from backend
          const apiItems = await getCart();
          const items = apiItems.map(mapApiItemToCartItem);
          set({ items });
          toast.success("Adet güncellendi");
        } catch (error) {
          toast.error("Bir hata oluştu.");
        } finally {
          set({ isLoading: false });
        }
      },

      // Increment quantity of an item
      incrementQuantity: async (productId, variantId) => {
        const item = get().items.find(
          (i) => i.productId === productId && i.variantId === variantId
        );
        if (item) {
          await get().updateQuantity(productId, variantId, item.quantity + 1);
        }
      },

      // Decrement quantity of an item
      decrementQuantity: async (productId, variantId) => {
        const item = get().items.find(
          (i) => i.productId === productId && i.variantId === variantId
        );
        if (item) {
          await get().updateQuantity(productId, variantId, item.quantity - 1);
        }
      },

      // Clear cart
      clearCart: () => {
        set({ items: [] });
      },

      // Total number of items in cart
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // Total price of items in cart
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.discountedPrice || item.price;
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage", // localStorage key
      partialize: (state) => ({ items: state.items }), // Only persist items
    }
  )
);
