import { Button } from "@/components/ui/button";
import { getAllOrders } from "@/lib/dummy/orders";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrderList = () => {
  const orders = getAllOrders();

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-800 mb-8">
        {" "}
        Siparişlerim({orders.length}){" "}
      </h3>

      <div className="space-y-8">
        {orders.map((order) => (
          <div
            className="flex flex-row gap-10 border-b border-gray-800 pb-8"
            key={order.id}
          >
            {/* Orders Image Section */}
            <Link href={`/products/${order.items[0].productId}`}>
              <Image
                src={order.items[0].productImage}
                alt={order.items[0].productName}
                width={50}
                height={50}
                className="object-contain"
              />
            </Link>

            {/* Orders Information Section */}
            <div className="flex flex-col gap-1">
              <p className="text-green-500 font-semibold text-sm">
                {" "}
                {order.statusText}{" "}
              </p>
              <p className="font-bold text-sm">{order.items[0].productName}</p>
              <p className="font-semibold text-sm ">
                {order.orderDate} Tarihinde Sipariş Verildi
              </p>
              <p className="font-semibold text-sm ">
                {order.orderNumber} numaralı sipariş
              </p>
            </div>

            {/* Orders Button Section */}
            <div className="flex flex-row gap-5 justify-end items-center pr-16 ml-auto">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="text-sm bg-[#2126AB] hover:bg-[#2126AB]/90 text-white hover:text-white px-6 py-5 cursor-pointer"
                >
                  Yeni Sipariş Ver
                </Button>
              </Link>
              <Link href={`/account/orders/${order.id}`}>
                <Button
                  variant="outline"
                  className="text-sm text-black hover:text-black px-6 py-5 cursor-pointer"
                >
                  Detayı Görüntüle
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
