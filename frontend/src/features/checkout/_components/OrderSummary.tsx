"use client";

import Image from "next/image";
import { Info } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useEffect } from "react";

const OrderSummary = () => {
  // Get cart items from store
  const cartItems = useCartStore((state) => state.items);
  const initializeCart = useCartStore((state) => state.initializeCart);
  const isInitialized = useCartStore((state) => state.isInitialized);

  // Get shipping and payment info
  const selectedShipping = useCheckoutStore((state) => state.selectedShipping);
  const selectedPayment = useCheckoutStore((state) => state.selectedPayment);

  // Initialize cart on mount if not already initialized
  useEffect(() => {
    if (!isInitialized) {
      initializeCart();
    }
  }, [isInitialized, initializeCart]);

  // Calculate subtotal from cart
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Shipping cost (from selected shipping option or default to 0)
  const shippingCost = selectedShipping?.price || 0;

  // Payment fee (39 TL for cash on delivery methods)
  const paymentFee =
    selectedPayment?.type === "bank_transfer" ||
    selectedPayment?.type === "cash_on_delivery"
      ? 39
      : 0;

  const total = subtotal + shippingCost + paymentFee;

  // Tax calculation (approximate 1% KDV)
  const taxAmount = parseFloat((total * 0.01).toFixed(2));

  // Base URL fix for images
  const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "") || "";

  // Format price function
  const formatPrice = (price: number) => {
    return Math.round(price).toLocaleString("tr-TR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="py-12 px-20 mr-20 mx-auto">
      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            Sepetinizde ürün bulunmamaktadır.
          </div>
        ) : (
          cartItems.map((item) => {
            const imageUrl = item.photoSrc.startsWith("http")
              ? item.photoSrc
              : `${BASE_URL}${item.photoSrc}`;

            const unitText =
              item.gram >= 1000
                ? `${(item.gram / 1000).toFixed(1)} KG`
                : `${item.gram}g`;

            const fullUnitText =
              item.pieces > 1 ? `${unitText} x ${item.pieces}` : unitText;

            return (
              <div
                key={`${item.productId}-${item.variantId}`}
                className="flex gap-5"
              >
                <div className="relative shrink-0">
                  <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                    <Image
                      src={imageUrl}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="object-contain rounded-md"
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
                  <p className="text-sm text-blue-600 font-bold mb-1 text-right">
                    {item.aroma}
                  </p>
                  <p className="text-sm text-gray-500 mb-3 text-right">
                    {item.quantity} {fullUnitText}
                  </p>
                  <div className="flex items-center gap-3 justify-end">
                    {item.discountedPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(item.price * item.quantity)} TL
                      </span>
                    )}
                    <span className="text-lg font-semibold">
                      {formatPrice(
                        (item.discountedPrice || item.price) * item.quantity
                      )}{" "}
                      TL
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
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
          <span className="font-semibold">{formatPrice(subtotal)} TL</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Teslimat / Kargo</span>
          {shippingCost === 0 ? (
            <span className="font-semibold text-green-600">Ücretsiz</span>
          ) : (
            <span className="font-semibold">
              {formatPrice(shippingCost)} TL
            </span>
          )}
        </div>

        {paymentFee > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">
              {selectedPayment?.type === "bank_transfer"
                ? "Kapıda Ödeme (Nakit)"
                : "Kapıda Ödeme (Kredi Kartı)"}
            </span>
            <span className="font-semibold">{formatPrice(paymentFee)} TL</span>
          </div>
        )}
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
        <span className="text-2xl font-bold">{formatPrice(total)} TL</span>
      </div>
      <div className="text-right text-sm text-gray-500">
        Vergi {formatPrice(taxAmount)} TL
      </div>
    </div>
  );
};

export default OrderSummary;
