"use client";
import { useEffect, useState } from "react";
import type { ProductCardProps } from "@/types/home";

const STORAGE_KEY = "recently_viewed_products";
const MAX_ITEMS = 6;

export function useRecentlyViewed(currentProductId?: string) {
  const [recentlyViewed, setRecentlyViewed] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(STORAGE_KEY);
    const items: ProductCardProps[] = stored ? JSON.parse(stored) : [];

    if (currentProductId) {
      const filtered = items.filter(
        (item) => item.href !== `/products/${currentProductId}`
      );
    }

    const limited = items.slice(0, MAX_ITEMS);
    setRecentlyViewed(limited);
  }, [currentProductId]);

  return recentlyViewed;
}
