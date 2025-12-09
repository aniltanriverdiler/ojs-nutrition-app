const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// API returned cart item structure
export interface CartItemApi {
  product_id: string;
  product_slug: string;
  product_variant_id: string;
  pieces: number;
  product: string;
  product_variant_detail: {
    id: string;
    size: {
      gram: number;
      pieces: number;
      total_services: number;
    };
    aroma: string;
    price: {
      profit: number | null;
      total_price: number;
      discounted_price: number | null;
      price_per_servings: number | null;
      discount_percentage: number | null;
    };
    photo_src: string;
    is_available: boolean;
  };
}

// Backend response format
export interface CartResponse {
  status: string;
  data: CartItemApi[];
  total_price?: number;
}

// 1. Get cart items
export async function getCart(): Promise<CartItemApi[]> {
  try {
    const res = await fetch("/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 401) {
        // User is not logged in
        console.warn("Kullanıcı giriş yapmamış");
        return [];
      }
      throw new Error("Sepet getirilemedi.");
    }

    const json: CartResponse = await res.json();

    if (!json || !json.data) {
      return [];
    }

    if (!Array.isArray(json.data)) {
      return [];
    }

    return json.data || [];
  } catch (error) {
    console.error("Sepet getirilirken hata:", error);
    return [];
  }
}

// 2. Add item to cart
export async function addToCart(payload: {
  product_id: string;
  product_variant_id: string;
  pieces: number;
}): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Ürün eklenemedi");
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Bir hata oluştu",
    };
  }
}

// 3. Delete item from cart
export async function removeFromCart(payload: {
  product_id: string;
  product_variant_id: string;
}): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Ürün silinemedi");
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Bir hata oluştu",
    };
  }
}

// 4. Update product quantity in cart (remove and re-add if no direct update endpoint).
export async function updateCartItemQuantity(
  productId: string,
  variantId: string,
  newQuantity: number
): Promise<{ success: boolean; message?: string }> {
  try {
    // Remove existing item first
    await removeFromCart({
      product_id: productId,
      product_variant_id: variantId,
    });

    // Re-add with new quantity if greater than 0
    if (newQuantity > 0) {
      return await addToCart({
        product_id: productId,
        product_variant_id: variantId,
        pieces: newQuantity,
      });
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Güncelleme başarısız",
    };
  }
}
