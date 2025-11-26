"use client";

import { useCallback, useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getAllProducts } from "@/lib/api/products";
import ProductCard from "@/components/shared/ProductCard";

const ProductListPage = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const MEDIA_BASE_URL =
    BASE_URL?.replace(/\/api\/v1$/, "") ||
    "https://fe1111.projects.academy.onlyjs.com";
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const limit = 12;

  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const results = await getAllProducts({ page, limit });
      if (!results.length) {
        setHasMore(false);
      } else {
        // Add by filtering according to the IDs of the incoming products
        setProducts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const uniqueResults = results.filter(
            (p: Product) => !existingIds.has(p.id)
          );
          return [...prev, ...uniqueResults];
        });

        // Prevent possible state synchronization issues by using page + 1 instead of prev + 1
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, page, limit]);

  // This useEffect should only run when the page is first loaded (mount)
  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Dependency array is left empty

  // Scroll to load more products
  useEffect(() => {
    function handleScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
      if (nearBottom) {
        loadProducts();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadProducts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center uppercase pb-7">
          Tüm Ürünler
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4 mx-auto max-w-7xl">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            href={`/products/${product.slug}`}
            imageSrc={`${MEDIA_BASE_URL}${product.photo_src}`}
            name={product.name}
            description={product.short_explanation}
            price={(
              product.price_info.discounted_price ||
              product.price_info.total_price
            ).toLocaleString("tr-TR")}
            previousPrice={
              product.price_info.discounted_price
                ? product.price_info.total_price.toLocaleString("tr-TR")
                : undefined
            }
            commentCount={product.comment_count}
            stars={Math.round(product.average_star)}
            badge={
              product.price_info.discount_percentage
                ? {
                    text: `%${product.price_info.discount_percentage}`,
                    sub: "indirim",
                  }
                : undefined
            }
            imageContainerClassName="w-[260px] h-[260px] sm:w-[277px] sm:h-[277px] md:w-[230px] md:h-[230px] lg:w-[230px] lg:h-[230px] xl:w-[277px] xl:h-[277px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
