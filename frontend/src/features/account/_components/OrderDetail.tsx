import { getOrderById } from "@/lib/dummy/orders";
import Image from "next/image";
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Order Status and Date */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{order.statusText}</h3>
        <p className="text-sm font-semibold">
          {order.orderDate} Tarihinde Sipariş Verildi - {order.orderNumber}{" "}
          numaralı sipariş
        </p>

        {/* Order Summary */}
        <div className="flex flex-row gap-8 border-y border-gray-800 pt-10 pb-5 mt-9 mb-5">
          <Image
            src={order.items[0].productImage}
            alt={order.items[0].productName}
            width={180}
            height={180}
            className="object-contain"
          />
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">
              {order.items[0].productName} x {order.items[0].quantity}
            </p>
            <p> {order.items[0].price} TL </p>
            <p>
              Boyut: {order.items[0].variant} x {order.items[0].quantity} Adet
            </p>
          </div>
        </div>
        {/* Tracking Number */}
        <p> HepsiJET Takip Numarası: {order.trackingNumber} </p>
      </div>
    </div>
  );
};

export default OrderDetail;
