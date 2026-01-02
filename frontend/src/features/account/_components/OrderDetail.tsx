"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  CreditCard,
  Package,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getOrderDetail,
  type OrderDetail as OrderDetailType,
} from "@/lib/api/order";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

interface OrderDetailProps {
  orderId: string;
}

export function OrderDetail({ orderId }: OrderDetailProps) {
  const [order, setOrder] = useState<OrderDetailType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrderDetail() {
      try {
        const data = await getOrderDetail(orderId);
        if (!data) {
          setError("Sipariş bulunamadı");
        } else {
          setOrder(data);
        }
      } catch (err) {
        console.error("Sipariş detayı yüklenirken hata:", err);
        setError("Bir hata oluştu");
      } finally {
        setIsLoading(false);
      }
    }

    if (orderId) {
      fetchOrderDetail();
    }
  }, [orderId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12 min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Hata</h3>
        <p className="text-gray-500 mb-6">
          {error || "Sipariş detayları alınamadı."}
        </p>
        <Button asChild variant="outline">
          <Link href="/account/orders">Siparişlere Dön</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header & Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/account/orders"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Sipariş #{order.order_number}
          </h1>
          <p className="text-sm text-gray-500">
            {format(new Date(order.created_at), "d MMMM yyyy HH:mm", {
              locale: tr,
            })}
          </p>
        </div>
        <div className="ml-auto">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Package className="h-4 w-4" /> Sipariş İçeriği
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {order.items.map((item) => (
                <div key={item.id} className="p-4 flex gap-4">
                  <div className="relative h-20 w-20 bg-gray-50 rounded-md border border-gray-100 shrink-0">
                    <Image
                      src={item.photo_src || "/placeholder.png"}
                      alt={item.product_name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 line-clamp-2">
                      {item.product_name}
                    </h4>
                    {item.aroma && (
                      <p className="text-sm text-gray-500 mt-1">
                        Aroma: {item.aroma}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-600">
                        {item.quantity} Adet x{" "}
                        {item.price.toLocaleString("tr-TR")} TL
                      </span>
                      <span className="font-bold text-gray-900">
                        {(item.price * item.quantity).toLocaleString("tr-TR")}{" "}
                        TL
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Summary & Info */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Sipariş Özeti</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Ara Toplam</span>
                <span>
                  {(
                    order.total_price - (order.shipping_fee || 0)
                  ).toLocaleString("tr-TR")}{" "}
                  TL
                </span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Kargo</span>
                <span>
                  {order.shipping_fee && order.shipping_fee > 0
                    ? `${order.shipping_fee.toLocaleString("tr-TR")} TL`
                    : "Ücretsiz"}
                </span>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-lg text-gray-900">
                <span>Toplam</span>
                <span>{order.total_price.toLocaleString("tr-TR")} TL</span>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Teslimat Adresi
            </h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p className="font-medium text-gray-900">{order.address.title}</p>
              <p>{order.address.address}</p>
              <p>
                {order.address.district} / {order.address.city}
              </p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Ödeme Bilgileri
            </h3>
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-900">
                  Ödeme Yöntemi:
                </span>{" "}
                {getPaymentMethodLabel(order.payment_method)}
              </p>
              <p className="mt-1">
                <span className="font-medium text-gray-900">Durum:</span>{" "}
                {order.status === "payment_pending"
                  ? "Ödeme Bekleniyor"
                  : "Ödendi"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Functions
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

function getPaymentMethodLabel(method: string) {
  const methods: Record<string, string> = {
    credit_card: "Kredi Kartı",
    bank_transfer: "Havale/ EFT",
    cash_on_delivery: "Kapıda Ödeme",
  };
  return methods[method] || method;
}
