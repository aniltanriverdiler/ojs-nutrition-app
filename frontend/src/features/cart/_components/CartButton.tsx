"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";

export function CartButton() {
  const [isOpen, setIsOpen] = useState(false);

  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative w-20 h-10.5 bg-gray-500 text-white font-semibold cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Sepeti Aç"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {totalItems > 9 ? "9+" : totalItems}
          </Badge>
        )}
        SEPET
      </Button>

      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
