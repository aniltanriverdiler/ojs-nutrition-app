"use client";

import Image from "next/image";
import { Info } from "lucide-react";

const OrderSummary = () => {
  // TODO: Replace with actual cart data from store
  const cartItems = [
    {
      id: "1",
      name: "GÜNLÜK VİTAMİN PAKETİ",
      quantity: 1,
      unit: "Paket",
      price: 699,
      originalPrice: 947,
      image: "/images/deep-sleep.webp",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = 0; // free
  const paymentFee = 39; // Cash on Delivery (Cash)
  const total = subtotal + shippingCost + paymentFee;

  // Tax calculation (KDV 6.92 TL from the image)
  const taxAmount = 6.92;

  return (
    <div className="py-12 px-20 mr-20 mx-auto">
      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-5">
            <div className="relative shrink-0">
              <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              {/* Quantity Badge */}
              <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold">
                {item.quantity}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-base mb-2 leading-tight text-right">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3 text-right">
                {item.quantity} {item.unit}
              </p>
              <div className="flex items-center gap-3 justify-end">
                {item.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {item.originalPrice} TL
                  </span>
                )}
                <span className="text-lg font-semibold">{item.price} TL</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Summary Details */}
      <div className="space-y-5 text-base">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Ara Toplam</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <span className="font-semibold">{subtotal} TL</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Teslimat / Kargo</span>
          <span className="font-semibold text-green-600">Ücretsiz</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Kapıda Ödeme (Nakit)</span>
          <span className="font-semibold">{paymentFee} TL</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Promo Code Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Promosyon Kodu Kullan</h3>
        {/* TODO: Add promo code input */}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Total */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-2xl font-bold">Toplam</span>
        <span className="text-2xl font-bold">{total} TL</span>
      </div>
      <div className="text-right text-sm text-gray-500">
        Vergi {taxAmount} TL
      </div>
    </div>
  );
};

export default OrderSummary;
