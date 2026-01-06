// Order List Item Type
export interface OrderListItem {
  id: string;
  order_number: string;
  total_price: number;
  status: string;
  created_at: string;
  item_count: number;
}

// Order Detail Type
export interface OrderDetail {
  id: string;
  order_number: string;
  total_price: number;
  status: string;
  created_at: string;
  address: {
    title: string;
    address: string;
    city: string;
    district: string;
  };
  items: Array<{
    id: string;
    product_name: string;
    quantity: number;
    price: number;
    photo_src: string;
    aroma?: string;
  }>;
  shipping_fee: number;
  payment_method: string;
}

// Shipment Fee Response Type
export interface ShipmentFeeResponse {
  fee: number;
  message?: string;
}

// Payment Settings Type
export interface PaymentSettings {
  credit_card_enabled: boolean;
  bank_transfer_enabled: boolean;
}

// Complete Order Payload Type
// Note: Backend uses "credit_cart" (typo in backend API)
export interface CompleteOrderPayload {
  address_id: string;
  payment_type: "credit_cart" | "bank_transfer" | "cash_on_delivery";
  card_digits: string | number;
  card_expiration_date?: string;
  card_security_code?: string;
  card_type?: string;
}

// 1. Get Orders (GET /orders)
export async function getOrders(): Promise<OrderListItem[]> {
  try {
    const res = await fetch("/api/orders", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Siparişler getirilemedi.");

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("getOrders error:", error);
    return [];
  }
}

// 2. Get Order Detail (GET /orders/:id)
export async function getOrderDetail(
  orderId: string
): Promise<OrderDetail | null> {
  try {
    const res = await fetch(`/api/orders/${orderId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Sipariş detayı getirilemedi");

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error("getOrderDetail error:", error);
    return null;
  }
}

// 3. Get Payment Settings (GET /orders/payment-settings)
export async function getPaymentSettings(): Promise<PaymentSettings | null> {
  try {
    const res = await fetch("/api/orders/payment-settings", {
      method: "GET",
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error("getPaymentSettings error:", error);
    return null;
  }
}

// 4. Calculates the shipment fee for a given address.
export async function calculateShipmentFee(addressId: string): Promise<number> {
  try {
    const res = await fetch("/api/orders/calculate-shipment-fee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address_id: addressId }),
    });

    if (!res.ok) return 0;
    const json = await res.json();
    return json.data?.fee || 0;
  } catch (error) {
    console.error("calculateShipmentFee error:", error);
    return 0;
  }
}

// 5. Complete Order (POST /orders/complete-shopping)
export async function completeOrder(payload: CompleteOrderPayload) {
  try {
    const res = await fetch("/api/orders/complete-shopping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: json.message || "Sipariş oluşturulamadı",
        validationErrors: json.reason,
      };
    }

    return { success: true, data: json.data };
  } catch (error) {
    console.error("completeOrder error:", error);
    return { success: false, message: "Bir hata oluştu." };
  }
}
