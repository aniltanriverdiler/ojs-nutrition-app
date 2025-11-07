import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";
import { getHomeBestSellers } from "@/lib/dummy/products";
import CategoryCards from "./CategoryCards";
import { HOME_CATEGORIES } from "@/lib/constants/homeCategories";

const HomeContent = () => {
  const bestSellers = getHomeBestSellers();

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
          {bestSellers.map((card) => (
            <ProductCard
              key={card.href}
              href={card.href}
              imageSrc={card.imageSrc}
              name={card.name}
              description={card.description}
              price={card.price}
              previousPrice={card.previousPrice}
              commentCount={card.commentCount}
              badge={card.badge}
            />
          ))}
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
