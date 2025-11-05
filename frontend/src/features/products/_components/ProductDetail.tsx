import React from "react";
import { getProductById } from "@/lib/dummy/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

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

// Select the first variant as the default variant
const defaultVariant = product.variants?.[0];

// Price information
const selectedPrice = defaultVariant?.price?.total_price;
const selectedPhoto = defaultVariant?.photo_src;
const hasDiscount = defaultVariant?.price?.discounted_price !== null;

  return (
   <div className="container mx-auto my-5 max-w-7xl grid grid-cols-2 gap-10">
     {/* Product Images */}
     <div>
      <Image src="/images/5-htp-lg.png" alt={product.name} width={590} height={590} />
      </div> 

      {/* Product Details */}
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-[27px] font-bold">{product.name}</h1>
          <p className="text-gray-500 text-lg font-semibold">{product.short_explanation}</p>
        <div className="grid grid-cols-2 gap-3">
           {/* Rating and Description */}
           <div className="flex flex-row items-center mt-1">
           {Array.from({ length: 5 }).map((_, i) => (
            <Image key={i} src="/icons/star-v2.svg" alt="Star" width={24} height={24} />
           ))}
           <p className="text-gray-700 text-lg font-semibold ml-2">{product.comment_count} Yorum</p>
        </div>
        </div>
        {/* Tags */}
        <div className="flex flex-row items-center gap-2 mt-5">
           <Button variant="outline" className="bg-gray-100 text-black rounded-full cursor-pointer">{product.tags.includes("VEJETARYEN") ? "VEJETARYEN" : "GLUTENSİZ"}</Button>
           <Button variant="outline" className="bg-gray-100 text-black rounded-full cursor-pointer">{product.tags.includes("GLUTENSİZ") ? "GLUTENSİZ" : "VEJETARYEN"}</Button>
        </div>
        <hr className="border-gray-300 border my-5" />
          </div> 

      </div>




   </div>
   
  );
}
