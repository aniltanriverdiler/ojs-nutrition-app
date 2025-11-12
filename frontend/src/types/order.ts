export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  variant?: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  orderDate: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  statusText: string;
  items: OrderItem[];
  address: {
    recipient: string;
    fullAddress: string;
  };
  payment: {
    method: string;
    amount: number;
    maskedCardNumber?: string;
  };
  summary: {
    subtotal: number;
    shipping: number;
    tax: number;
    discount?: number;
    discountText?: string;
    total: number;
  };
  trackingNumber?: string;
}

export interface OrdersResponse {
  status: "success";
  data: Order[];
  count: number;
}
