import Image from "next/image";
import ProductCard from "../../../components/shared/ProductCard";
import CategoryCards from "./CategoryCards";
import { HOME_CATEGORIES } from "@/lib/constants/homeCategories";
import { getProductsListBestSellers } from "@/lib/api/products";
import { BestSellerProduct } from "@/types/product";

const HomeContent = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const MEDIA_BASE_URL =
    BASE_URL?.replace(/\/api\/v1$/, "") ||
    "https://fe1111.projects.academy.onlyjs.com";
  const bestSellers = await getProductsListBestSellers();

  return (
    <>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 mx-auto py-5 sm:py-6 md:py-6 lg:py-8 px-3 sm:px-4 md:px-4 lg:px-6 xl:px-8 2xl:px-0 max-w-7xl">
        {/* Category Cards Section */}
        {HOME_CATEGORIES.map((category) => (
          <CategoryCards
            key={category.slug}
            slug={category.slug}
            title={category.title}
            image={category.image}
            bgColor={category.bgColor}
            isAllProducts={category.isAllProducts}
          />
        ))}
      </div>

      {/* Best Sellers Section */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-5">ÇOK SATANLAR</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 my-10 mx-auto max-w-7xl">
          {bestSellers.data.map((product: BestSellerProduct) => {
            const hasDiscount = product.price_info.discounted_price !== null;
            const currentPrice = hasDiscount
              ? product.price_info.discounted_price
              : product.price_info.total_price;
            const oldPrice = hasDiscount
              ? product.price_info.total_price
              : undefined;

            return (
              <ProductCard
                key={product.slug || product.name}
                href={`/products/${product.slug || product.name}`}
                imageSrc={
                  product.photo_src
                    ? product.photo_src.startsWith("http")
                      ? product.photo_src
                      : `${MEDIA_BASE_URL}${product.photo_src}`
                    : "/images/5-htp.png"
                }
                name={product.name}
                description={product.short_explanation}
                price={currentPrice?.toLocaleString("tr-TR") || ""}
                previousPrice={
                  oldPrice ? oldPrice.toLocaleString("tr-TR") : undefined
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
              />
            );
          })}
        </div>
      </div>

      {/* Home Content Motivation Banner Section */}
      <div className="my-8">
        <div className="relative overflow-hidden">
          <Image
            src="/images/motivation-banner.png"
            alt="Kampanya Banner"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
