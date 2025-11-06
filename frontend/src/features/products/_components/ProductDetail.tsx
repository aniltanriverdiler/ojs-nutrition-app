"use client";
import React from "react";
import { getProductById } from "@/lib/dummy/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useProductVariants } from "../hooks/use-product-variants";

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  // Fetch the product by ID from mock data
  const product = getProductById(id);

  // If the product is not found, redirect to 404 page
  if (!product) {
    notFound();
  }

  // Use the useProductVariants hook to get the product variants
  const {
    selectedVariant,
    productAromas,
    productSizes,
    isSelectedAroma,
    selectAroma,
    selectSize,
    isSelectedSize,
    isSizeAvailable,
  } = useProductVariants(product.variants || []);

  // Get the selected variant
  const price = selectedVariant?.price?.discounted_price ?? selectedVariant?.price?.total_price;
  const crossed = selectedVariant?.price?.discounted_price ? selectedVariant?.price?.total_price : null;
  const discountPerc = selectedVariant?.price?.discount_percentage;
  const photo = selectedVariant?.photo_src;

  return (
    <div className="container mx-auto my-5 max-w-7xl grid grid-cols-2 gap-10">
      {/* Product Images */}
      <div>
        <Image
          src="/images/5-htp-lg.png"
          alt={product.name}
          width={590}
          height={590}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-[27px] font-bold">{product.name}</h1>
          <p className="text-gray-500 text-lg font-semibold">
            {product.short_explanation}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {/* Rating and Description */}
            <div className="flex flex-row items-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/icons/star-v2.svg"
                  alt="Star"
                  width={24}
                  height={24}
                />
              ))}
              <p className="text-gray-700 text-lg font-semibold ml-2">
                {product.comment_count} Yorum
              </p>
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-row items-center gap-2 mt-5">
            <Button
              variant="outline"
              className="bg-gray-100 text-black rounded-full cursor-pointer"
            >
              {product.tags.includes("VEJETARYEN") ? "VEJETARYEN" : "GLUTENSİZ"}
            </Button>
            <Button
              variant="outline"
              className="bg-gray-100 text-black rounded-full cursor-pointer"
            >
              {product.tags.includes("GLUTENSİZ") ? "GLUTENSİZ" : "VEJETARYEN"}
            </Button>
          </div>
          <hr className="border-gray-300 border mt-5" />
        </div>

        {/* Product Aromas */}
        <div>
          <h3 className="font-bold text-xl mb-3">AROMA:</h3>
          <div className="flex flex-wrap gap-2">
            {productAromas.map((aroma) => {
              const active = isSelectedAroma(aroma);
              return (
                <div key={aroma} className="relative">
                  {active && (
                    <Badge className="rounded-full bg-blue-800 text-white absolute -top-1.5 -right-1.5 px-0.5 py-0.5 flex items-center justify-center w-5 h-5">
                      <Check className="h-3 w-3" />
                    </Badge>
                  )}
                  <Button
                    onClick={() => selectAroma(aroma)}
                    className={`rounded-none bg-gray-100 border-3 border-gray-300 text-black hover:bg-gray-50 cursor-pointer ${
                      active ? "border-blue-800" : ""
                    }`}
                  >
                    {aroma}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Product Sizes */}
          <div>
            <h3 className="font-bold text-xl my-3">BOYUT:</h3>
            <div className="flex flex-wrap gap-2">
              {productSizes.map((size, idx) => {
                const label = size.gram
                  ? `${size.gram}G`
                  : `${size.pieces} ADET`;
                const sub = `${size.total_services} servis`;
                const active = isSelectedSize(size);
                const disabled = isSizeAvailable(size);
                return (
                  <div key={idx} className="relative">
                    {active && (
                      <Badge className="rounded-full bg-blue-800 text-white absolute -top-1.5 -right-1.5 px-0.5 py-0.5 flex items-center justify-center w-5 h-5">
                        <Check className="h-3 w-3" />
                      </Badge>
                    )}
                    <Button
                      onClick={() => selectSize(size)}
                      className={`rounded-none p-9 bg-gray-100 border-3 border-gray-300 text-black hover:bg-gray-50 cursor-pointer ${
                        active ? "border-blue-800" : ""
                      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold">{label}</span>
                        <span className="text-sm text-gray-700">{sub}</span>
                      </div>
                    </Button>
                  </div>
                );
              })}
            </div>

            


          </div>
        </div>
      </div>
    </div>
  );
}
