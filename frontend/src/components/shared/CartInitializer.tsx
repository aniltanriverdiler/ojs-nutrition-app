"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";

export default function CartInitializer() {
  const initializeCart = useCartStore((state) => state.initializeCart);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  useEffect(() => {
    // If user is authenticated, load the cart from the backend
    if (isAuthenticated) {
      initializeCart();
    } else {
      console.log("❌ Kullanıcı giriş yapmamış, sepet yüklenmiyor");
    }
  }, [isAuthenticated, initializeCart]);

  return null; // This component doesn't render anything
}