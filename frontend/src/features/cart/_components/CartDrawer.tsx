"use client";

import { useEffect } from "react";
import { ShoppingBag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cartStore";
import { CartItem } from "./CartItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const initializeCart = useCartStore((state) => state.initializeCart);
  const isLoading = useCartStore((state) => state.isLoading);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  // Total price calculation
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // When drawer is opened, refresh the cart (single useEffect is enough)
  useEffect(() => {
    if (isOpen && isAuthenticated) {
      initializeCart();
    }
  }, [isOpen, isAuthenticated, initializeCart]);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      router.push("/auth/login");
      onClose();
      return;
    }
    router.push("/checkout");
    onClose();
  };

  // Price formatting - no decimal places
  const formatPrice = (price: number) => {
    return Math.round(price).toLocaleString("tr-TR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0 border-l border-gray-200">
        {/* Cart Header */}
        <SheetHeader className="p-4 border-b border-gray-200 flex flex-row items-center justify-between space-y-0">
          <SheetTitle className="text-base font-bold text-center w-full uppercase tracking-wider">
            SEPETİM
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-3 text-gray-400 hover:text-black"
          ></Button>
        </SheetHeader>

        {/* Cart Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gray-50">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Sepetiniz Boş
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Henüz sepetinize ürün eklemediniz.
            </p>
            <Button
              onClick={onClose}
              className="bg-black hover:bg-gray-800 text-white px-8 py-2 h-auto rounded-none"
              asChild
            >
              <Link href="/products">ALIŞVERİŞE BAŞLA</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-4 py-2 bg-gray-50">
              {isLoading && (
                <div className="text-center text-xs text-gray-400 py-2">
                  Güncelleniyor...
                </div>
              )}
              <div className="flex flex-col gap-3 py-2">
                {items.map((item) => (
                  <CartItem
                    key={`${item.productId}-${item.variantId}`}
                    item={item}
                  />
                ))}
              </div>
            </ScrollArea>

            {/* Cart Footer */}
            <div className="p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-gray-900">TOPLAM</span>
                {/* Only total price - no discount display */}
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(totalPrice)} TL
                </span>
              </div>

              <Button
                className="w-full h-12 bg-black hover:bg-gray-800 text-white text-base font-bold rounded-md flex items-center justify-center gap-2 uppercase tracking-wide"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                DEVAM ET <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
