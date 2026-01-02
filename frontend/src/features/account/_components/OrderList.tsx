"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getOrders, type OrderListItem } from "@/lib/api/order";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export function OrderList() {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Siparişler yüklenirken hata oluştu:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 rounded-lg">
        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
          <Package className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Henüz Siparişiniz Yok
        </h3>
        <p className="text-gray-500 text-center mb-6 max-w-sm">
          Sipariş verdiğinizde burada listelenecektir. Alışverişe başlayarak ilk
          siparişinizi oluşturabilirsiniz.
        </p>
        <Button asChild className="bg-black text-white hover:bg-gray-800">
          <Link href="/products">Alışverişe Başla</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Order Info */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-3 mb-2 md:mb-0">
                <span className="text-sm font-medium text-gray-500">
                  Sipariş No:
                </span>
                <span className="font-bold text-gray-900">
                  #{order.order_number}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Tarih:</span>
                  <span>
                    {format(new Date(order.created_at), "d MMMM yyyy", {
                      locale: tr,
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Tutar:</span>
                  <span className="font-bold text-black">
                    {order.total_price.toLocaleString("tr-TR")} TL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Durum:</span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      order.status === "delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {getStatusLabel(order.status)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full md:w-auto self-start md:self-center shrink-0 border-gray-300 hover:bg-gray-50"
            >
              <Link href={`/account/orders/${order.id}`}>
                Detayları Gör <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper function: Converts status code to user-friendly text
function getStatusLabel(status: string) {
  const statuses: Record<string, string> = {
    pending: "Hazırlanıyor",
    processing: "İşleniyor",
    shipped: "Kargoya Verildi",
    delivered: "Teslim Edildi",
    cancelled: "İptal Edildi",
    payment_pending: "Ödeme Bekleniyor",
  };
  return statuses[status] || status;
}
