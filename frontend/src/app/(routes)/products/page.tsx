import React from "react";
import { mockProductsList } from "@/lib/dummy/products";
import Link from "next/link";
import Image from "next/image";

const ProductListPage = () => {
  const products = mockProductsList.data.results;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center uppercase mb-3">
          Tüm Ürünler
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4 mx-auto max-w-7xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center lg:justify-center"
          >
            <Link
              href={`/products/${product.slug}`}
              className="flex flex-col sm:gap-1 items-center"
            >
              <Image
                src={product.photo_src}
                alt={product.name}
                width={277}
                height={277}
                className="justify-self-center"
              />
              <p className="text-lg font-bold text-center text-gray-800">
                {product.name}
              </p>
              <p className="font-semibold text-center text-gray-400 text-sm">
                {product.short_explanation}
              </p>
              <div className="flex flex-row items-center justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    src="/icons/star-v2.svg"
                    alt="Star"
                    width={20}
                    height={20}
                  />
                ))}
                <p className="text-gray-700 text-sm font-semibold ml-2">
                  ({product.comment_count})
                </p>
              </div>
              <p className="text-xl font-bold text-center text-gray-800">
                {product.price_info.discounted_price ||
                  product.price_info.total_price}{" "}
                TL
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
