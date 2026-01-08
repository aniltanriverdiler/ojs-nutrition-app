"use client";
import ProductCard from "@/components/shared/ProductCard";
import { useRecentlyViewed } from "../hooks/use-recently-viewed";

interface RecentlyViewedProductsProps {
  currentProductSlug: string;
}

const RecentlyViewedProducts = ({
  currentProductSlug,
}: RecentlyViewedProductsProps) => {
  const { recentlyViewed, isLoading } = useRecentlyViewed(currentProductSlug);

  // To fix the API URL for images
  const MEDIA_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/v1$/, "") ||
    "https://fe1111.projects.academy.onlyjs.com";

  if (isLoading) {
    return (
      <section className="container mx-auto max-w-7xl px-4 py-24">
        <h3 className="text-2xl font-bold text-center mb-10">
          SON GÖRÜNTÜLENEN ÜRÜNLER
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 mb-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!recentlyViewed || recentlyViewed.length === 0) return null;

  return (
    <section className="container mx-auto max-w-7xl px-4 py-24">
      <h3 className="text-2xl font-bold text-center mb-10">
        SON GÖRÜNTÜLENEN ÜRÜNLER
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 mb-4">
        {recentlyViewed.map((product) => {
          // Get the first variant for price and image
          const firstVariant = product.variants?.[0];
          if (!firstVariant) return null;

          const imageSrc = firstVariant.photo_src.startsWith("http")
            ? firstVariant.photo_src
            : `${MEDIA_BASE_URL}${firstVariant.photo_src}`;

          const currentPrice = firstVariant.price.discounted_price
            ? firstVariant.price.discounted_price
            : firstVariant.price.total_price;

          const previousPrice =
            firstVariant.price.discounted_price &&
            firstVariant.price.total_price > firstVariant.price.discounted_price
              ? firstVariant.price.total_price
              : undefined;

          // Calculate discount percentage if there's a previous price
          let badge = undefined;
          if (firstVariant.price.discount_percentage) {
            badge = {
              text: `%${Math.round(firstVariant.price.discount_percentage)} İndirim`,
            };
          }

          return (
            <ProductCard
              key={product.slug}
              href={`/products/${product.slug}`}
              imageSrc={imageSrc}
              name={product.name}
              description={product.short_explanation}
              price={currentPrice.toFixed(2)}
              previousPrice={previousPrice?.toFixed(2)}
              commentCount={product.comment_count}
              badge={badge}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentlyViewedProducts;
