import React from "react";
import {
  CATEGORY_NAMES,
  CATEGORY_DESCRIPTIONS,
} from "@/lib/constants/categories";
import { getCategoryBySlug } from "@/lib/dummy/categories";
import { getProductsByCategoryId } from "@/lib/dummy/products";
import Image from "next/image";
import Link from "next/link";

interface CategoryListingProps {
  slug: keyof typeof CATEGORY_NAMES;
}

export default function CategoryListing({ slug }: CategoryListingProps) {
  const title = CATEGORY_NAMES[slug];
  const desc = CATEGORY_DESCRIPTIONS[slug];

  // Find the category id
  const category = getCategoryBySlug(slug);
  const categoryId = category?.id;

  // If the category is not found, return an empty state
  if (!categoryId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 text-lg">{desc}</p>
        </div>
        <div className="text-gray-500">Bu kategori bulunamadı.</div>
      </div>
    );
  }

  // Get the products by category id
  const productDetails = getProductsByCategoryId(categoryId);

  // Normalize the product details for the list card
  const products = productDetails.map((p) => {
    const first = p.variants?.[0];
    return {
      id: p.id,
      name: p.name,
      short_explanation: p.short_explanation,
      price: first?.price?.total_price ?? null,
      average_star: p.average_star ?? 0,
      comment_count: p.comment_count ?? 0,
    };
  });

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-center uppercase mb-3">
            {title}
          </h1>
        </div>

        {products.length === 0 ? (
          <div className="text-gray-500 text-center">
            Bu kategoriye ait ürün bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4 mx-auto max-w-7xl">
            {products.map((p) => {
              return (
                <div
                  key={p.id}
                  className="flex flex-col items-center lg:justify-center"
                >
                  <Link
                    href={`/products/${p.id}`}
                    className="flex flex-col sm:gap-1 items-center"
                  >
                    <Image
                      src={"/images/5-htp-lg.png"}
                      alt={p.name}
                      width={277}
                      height={277}
                      className="justify-self-center object-contain"
                    />

                    <p className="text-lg font-bold text-center text-gray-800">
                      {p.name}
                    </p>

                    <p className="font-semibold text-center text-gray-400 text-sm mx-5 line-clamp-2">
                      {p.short_explanation}
                    </p>

                    <div className="flex flex-row items-center justify-center ">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/icons/star-v2.svg"
                          alt="Star"
                          width={28}
                          height={28}
                        />
                      ))}
                    </div>

                    <p className="text-sm text-center font-semibold text-gray-700">
                      {" "}
                      {p.comment_count} Yorum{" "}
                    </p>

                    <p className="text-center text-xl font-semibold text-gray-800">
                      {" "}
                      {p.price} TL{" "}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
