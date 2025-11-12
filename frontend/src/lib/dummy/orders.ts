import type { Order } from "@/types/order";

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "427795",
    orderDate: "31 Mart 2023",
    status: "delivered",
    statusText: "Teslim Edildi",
    items: [
      {
        id: "1",
        productId: "1",
        productName: "DEEP SLEEP",
        productImage: "/images/deep-sleep.png",
        variant: "Boyut: 1 KUTU",
        quantity: 1,
        price: 150,
        totalPrice: 150,
      },
    ],
    address: {
      recipient: "Uğur İLTER",
      fullAddress:
        "Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No: 1/2, 34746 Ataşehir/İstanbul",
    },
    payment: {
      method: "Kredi Kartı",
      amount: 150,
      maskedCardNumber: "**** **** **61",
    },
    summary: {
      subtotal: 150,
      shipping: 0,
      tax: 15,
      total: 150,
    },
    trackingNumber: "HJ2192904051",
  },
  {
    id: "2",
    orderNumber: "290405",
    orderDate: "14 Aralık 2022",
    status: "delivered",
    statusText: "Teslim Edildi",
    items: [
      {
        id: "2-1",
        productId: "2",
        productName: "MELATONIN",
        productImage: "/images/melatonin.png",
        variant: "Boyut: 1 KUTU",
        quantity: 2,
        price: 62,
        totalPrice: 124,
      },
      {
        id: "2-2",
        productId: "3",
        productName: "GÜNLÜK VİTAMİN PAKETİ",
        productImage: "/images/vitamin-paketi.png",
        variant: "Boyut: 1 Paket x 2 Adet",
        quantity: 1,
        price: 449,
        totalPrice: 449,
      },
      {
        id: "2-3",
        productId: "4",
        productName: "BROMELAIN",
        productImage: "/images/bromelain.png",
        variant: "Boyut: 1 KUTU x 2 Adet",
        quantity: 1,
        price: 197,
        totalPrice: 197,
      },
    ],
    address: {
      recipient: "Uğur İLTER",
      fullAddress:
        "Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No: 1/2, 34746 Ataşehir/İstanbul",
    },
    payment: {
      method: "Kredi Kartı",
      amount: 770,
      maskedCardNumber: "**** **** **61",
    },
    summary: {
      subtotal: 856,
      shipping: 0,
      tax: 8,
      discount: 86,
      discountText: "Yüzde 10 indirim!",
      total: 770,
    },
    trackingNumber: "HJ2192904051",
  },
];

export function getAllOrders(): Order[] {
  return mockOrders;
}

export function getOrderById(id: string): Order | undefined {
  return mockOrders.find((order) => order.id === id);
}

export function getOrderByOrderNumber(orderNumber: string): Order | undefined {
  return mockOrders.find((order) => order.orderNumber === orderNumber);
}
