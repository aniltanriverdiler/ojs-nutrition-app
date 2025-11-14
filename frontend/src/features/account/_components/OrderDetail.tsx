import { Button } from "@/components/ui/button";
import { getOrderById } from "@/lib/dummy/orders";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OrderDetailProps {
  orderId: string;
}

const OrderDetail = ({ orderId }: OrderDetailProps) => {
  const order = getOrderById(orderId);

  if (!order) {
    return <div>Sipariş bulunamadı.</div>;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-40 mb-10">
      {/* Order Status and Date */}
      <div className="flex flex-col gap-2 w-full lg:w-[500px] xl:w-[500px]">
        <h3 className="text-xl font-bold">{order.statusText}</h3>
        <p className="text-sm font-semibold">
          {order.orderDate} Tarihinde Sipariş Verildi - {order.orderNumber}{" "}
          numaralı sipariş
        </p>

        {/* Order Summary */}
        <div className="flex flex-row gap-8 border-y border-gray-800 pt-10 pb-5 mt-6 mb-5">
          <Image
            src={order.items[0].productImage}
            alt={order.items[0].productName}
            width={180}
            height={180}
            className="object-contain"
          />
          <div className="flex flex-col gap-1">
            <p className="font-bold">
              {order.items[0].productName} x {order.items[0].quantity}
            </p>
            <p className="font-medium"> {order.items[0].price} TL </p>
            <p className="font-medium">
              {order.items[0].variant} x {order.items[0].quantity} Adet
            </p>
          </div>
        </div>
        {/* Tracking Number */}
        <p className="font-medium">
          {" "}
          HepsiJET Takip Numarası: {order.trackingNumber}{" "}
        </p>
      </div>

      {/* Order Address, Payment Method and Amount */}
      <div className="flex flex-col gap-2 w-full lg:w-[500px] xl:w-[300px]">
        {/* Order Address */}
        <div className="border-y border-gray-800 py-3 mt-10 xl:mt-22">
          <p className="font-bold">Adres</p>
          <p className="font-medium"> {order.address.recipient}</p>
          <p className="font-medium mr-20 mb-2">
            {" "}
            {order.address.fullAddress}{" "}
          </p>
        </div>

        {/* Payment Method and Amount */}
        <div className="border-b border-gray-800 py-3">
          <p className="font-bold">Ödeme</p>
          <p className="font-medium">
            {order.payment.method} - {order.payment.amount} TL{" "}
          </p>
          <p className="font-medium mb-2">
            **** {order.payment.maskedCardNumber}{" "}
          </p>
        </div>

        {/* Order Summary */}
        <div className="border-b border-gray-800 py-3">
          <p className="font-bold mb-3">Özet</p>

          <div className="flex flex-col gap-2.5">
            {/* Summary Subtotal */}
            <div className="flex flex-row gap-2 justify-between">
              <p className="font-medium">Ara Toplam</p>
              <p className="font-medium">{order.summary.subtotal} TL </p>
            </div>

            {/* Summary Shipping */}
            <div className="flex flex-row gap-2 justify-between">
              <p className="font-medium">Kargo</p>
              <p className="font-medium">{order.summary.shipping} TL </p>
            </div>

            {/* Summary Tax */}
            <div className="flex flex-row gap-2 justify-between">
              <p className="font-medium">Tahmini Vergi</p>
              <p className="font-medium">{order.summary.tax} TL </p>
            </div>

            {/* Summary Discount */}
            <div className="flex flex-row gap-2 justify-between">
              <p className="font-medium">İndirim</p>
              <p className="font-medium">{order.summary.discount} TL </p>
            </div>

            {/* Summary Total */}
            <div className="flex flex-row gap-2 justify-between mb-2">
              <p className="font-medium">Toplam</p>
              <p className="font-medium">{order.summary.total} TL </p>
            </div>
          </div>
        </div>

        {/* Payment Method and Amount */}
        <div className="flex flex-col gap-2 py-2">
          <p className="text-lg font-bold">Yardıma mı ihtiyacın var?</p>
          <Link href="/faq" className="font-medium">
            Sıkça Sorulan Sorular
          </Link>
          <Link href="/sales-agreement" className="font-medium">
            Satış Sözleşmesi
          </Link>
          <Link href="/products">
            <Button
              variant="outline"
              className="w-full text-lg bg-black hover:bg-black/90 text-white hover:text-white px-7 py-6 cursor-pointer mt-3"
            >
              Yeniden Sipariş Ver
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
