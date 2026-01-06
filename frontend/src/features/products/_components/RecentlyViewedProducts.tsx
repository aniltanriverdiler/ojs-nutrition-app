"use client";
import ProductCard from "@/components/shared/ProductCard";
import { getHomeBestSellers } from "@/lib/dummy/products";

interface RecentlyViewedProductsProps {
  currentProductId: string;
}

const RecentlyViewedProducts = ({
  currentProductId,
}: RecentlyViewedProductsProps) => {
  // Using mock data for now (will be replaced with hook when API is implemented)
  const mockRecentlyViewed = getHomeBestSellers().slice(0, 6);

  // Turned into hook:
  // const recentlyViewed = useRecentlyViewed(currentProductId);

  if (mockRecentlyViewed.length === 0) return null;

  return (
    <section className="container mx-auto max-w-7xl px-4 py-24">
      <h3 className="text-2xl font-bold text-center mb-10">
        SON GÖRÜNTÜLENEN ÜRÜNLER
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 mb-4">
        {mockRecentlyViewed.map((product) => (
          <ProductCard
            key={product.href}
            href={product.href}
            imageSrc={product.imageSrc}
            name={product.name}
            description={product.description}
            price={product.price.toString()}
            previousPrice={product.previousPrice?.toString()}
            commentCount={product.commentCount}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewedProducts;
