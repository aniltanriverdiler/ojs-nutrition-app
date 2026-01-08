"use client";
import { useEffect, useState } from "react";
import { getProductsBySlugs } from "@/lib/api/products";
import type { ProductDetail } from "@/types/product";

const STORAGE_KEY = "recently_viewed_products";
const MAX_ITEMS = 6;

export function useRecentlyViewed(currentProductSlug?: string) {
  const [recentlyViewed, setRecentlyViewed] = useState<ProductDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      if (typeof window === "undefined") return;

      try {
        setIsLoading(true);
        const stored = localStorage.getItem(STORAGE_KEY);
        const slugs: string[] = stored ? JSON.parse(stored) : [];

        // Filter out current product slug if provided
        const filteredSlugs = currentProductSlug
          ? slugs.filter((slug) => slug !== currentProductSlug)
          : slugs;

        // Limit to MAX_ITEMS
        const limitedSlugs = filteredSlugs.slice(0, MAX_ITEMS);

        if (limitedSlugs.length === 0) {
          setRecentlyViewed([]);
          return;
        }

        // Fetch products from API
        const products = await getProductsBySlugs(limitedSlugs);
        
        // Sort products based on the order in localStorage
        const sortedProducts = limitedSlugs
          .map((slug) => products.find((p) => p.slug === slug))
          .filter((p): p is ProductDetail => p !== undefined);

        setRecentlyViewed(sortedProducts);
      } catch (error) {
        console.error("Error fetching recently viewed products:", error);
        setRecentlyViewed([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentlyViewed();
  }, [currentProductSlug]);

  return { recentlyViewed, isLoading };
}

// Helper function to add a product to recently viewed
export function addToRecentlyViewed(slug: string) {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const slugs: string[] = stored ? JSON.parse(stored) : [];

    // Remove the slug if it already exists (to move it to the front)
    const filteredSlugs = slugs.filter((s) => s !== slug);

    // Add the new slug at the beginning
    const updatedSlugs = [slug, ...filteredSlugs].slice(0, MAX_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSlugs));
  } catch (error) {
    console.error("Error adding to recently viewed:", error);
  }
}
