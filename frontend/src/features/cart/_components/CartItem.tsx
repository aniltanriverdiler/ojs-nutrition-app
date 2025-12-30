"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore, type CartItem as CartItemType } from "@/store/cartStore";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const isLoading = useCartStore((state) => state.isLoading);

  // Total price calculation
  const totalPrice = item.price * item.quantity;

  // Base URL fix (if path starts with /)
  const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "") || "";
  const imageUrl = item.photoSrc.startsWith("http")
    ? item.photoSrc
    : `${BASE_URL}${item.photoSrc}`;

  const handleIncrement = () => {
    incrementQuantity(item.productId, item.variantId);
  };

  const handleDecrement = () => {
    decrementQuantity(item.productId, item.variantId);
  };

  const handleRemove = () => {
    removeItem(item.productId, item.variantId);
  };

  // Price formatting - no decimal places
  const formatPrice = (price: number) => {
    return Math.round(price).toLocaleString("tr-TR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="flex gap-3 bg-white px-3 pt-3 pb-1 rounded-lg border border-gray-300 shadow-md relative group">
      {/* Product Image */}
      <Link
        href={`/products/${item.slug}`}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-50 border border-gray-100"
      >
        <Image
          src={imageUrl}
          alt={item.name}
          fill
          className="object-contain rounded-lg"
          sizes="85px"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div className="flex justify-between items-start gap-2">
          <div className="flex flex-col">
            <Link
              href={`/products/${item.slug}`}
              className="text-sm font-bold text-gray-900 leading-tight hover:underline line-clamp-1"
            >
              {item.name}
            </Link>
            <span className="text-xs text-blue-600 font-bold mt-0.5">
              {item.aroma}
            </span>
            <span className="text-xs text-gray-500 font-semibold mt-0.5">
              {item.gram >= 1000
                ? `${(item.gram / 1000).toFixed(1)} KG`
                : `${item.gram}g`}
              {item.pieces > 1 && ` x ${item.pieces}`}
            </span>
          </div>

          {/* Only total price - no discount display */}
          <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
            {formatPrice(totalPrice)} TL
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-end gap-2 mb-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-gray-400 hover:text-red-600 hover:bg-transparent transition-colors cursor-pointer"
            onClick={handleRemove}
            disabled={isLoading}
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          <div className="flex items-center border border-gray-200 rounded-md bg-gray-50 h-7">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-none text-gray-600 cursor-pointer"
              onClick={handleDecrement}
              disabled={isLoading}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-xs font-semibold bg-white h-full flex items-center justify-center border-x border-gray-200">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-none text-gray-600 cursor-pointer"
              onClick={handleIncrement}
              disabled={isLoading}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
