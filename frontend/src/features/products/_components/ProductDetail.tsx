"use client";
import React, { useState } from "react";
import { getHomeBestSellers, getProductById } from "@/lib/dummy/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ShoppingCartIcon } from "lucide-react";
import { useProductVariants } from "../hooks/use-product-variants";
import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAllCategories } from "@/lib/dummy/categories";
import RecentlyViewedProducts from "./RecentlyViewedProducts";
import ProductReviews from "./ProductReviews";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";

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

  // Get category information for breadcrumb
  const allCategories = getAllCategories();
  const mainCategory = allCategories.find(
    (cat) => cat.id === product.main_category_id
  );
  const subCategory = mainCategory?.children?.find(
    (child) => child.id === product.sub_category_id
  );

  // Quantity state management
  const [quantity, setQuantity] = useState<number>(1);

  // Increment quantity
  const increaseQuantity = () => {
    setQuantity((prev: number) => prev + 1);
  };

  // Decrement quantity with minimum value of 1
  const decreaseQuantity = () => {
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));
  };

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

  // Calculate price values from selected variant
  const price =
    selectedVariant?.price?.discounted_price ??
    selectedVariant?.price?.total_price;
  const crossed = selectedVariant?.price?.discounted_price
    ? selectedVariant?.price?.total_price
    : null;

  const bestSellers = getHomeBestSellers();

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 pt-5">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="font-semibold">
                  Anasayfa
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {mainCategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href={`/products/${mainCategory.slug}`}
                      className="font-semibold"
                    >
                      {mainCategory.name}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            {subCategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold">
                    {subCategory.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">
                {product.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-15 px-4 2xl:px-0 2xl:pr-20">
        {/* Product Images */}
        <div className="mt-8">
          <Image
            src="/images/5-htp-lg.png"
            alt={product.name}
            width={590}
            height={590}
            className="w-full object-contain"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-5 mt-5">
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
                {product.tags.includes("VEJETARYEN")
                  ? "VEJETARYEN"
                  : "GLUTENSİZ"}
              </Button>
              <Button
                variant="outline"
                className="bg-gray-100 text-black rounded-full cursor-pointer"
              >
                {product.tags.includes("GLUTENSİZ")
                  ? "GLUTENSİZ"
                  : "VEJETARYEN"}
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
                  // Format size label: convert to kg if >= 1000g
                  let sizeLabel = "";
                  if (size.gram) {
                    if (size.gram >= 1000) {
                      sizeLabel = `${(size.gram / 1000).toFixed(1)} KG`;
                    } else {
                      sizeLabel = `${size.gram}G`;
                    }
                  } else {
                    sizeLabel = `${size.pieces} ADET`;
                  }

                  // Add pieces info if more than 1
                  const label =
                    size.pieces > 1
                      ? `${sizeLabel} X ${size.pieces} ADET`
                      : sizeLabel;
                  const sub = `${size.total_services} servis`;
                  const active = isSelectedSize(size);
                  const disabled = isSizeAvailable(size);

                  // Find the variant for this size to get its discount
                  const currentVariant = product.variants.find(
                    (v) =>
                      v.size.gram === size.gram &&
                      v.size.pieces === size.pieces &&
                      v.size.total_services === size.total_services
                  );
                  const discountPercentage =
                    currentVariant?.price?.discount_percentage;

                  return (
                    <div key={idx} className="relative">
                      {active && (
                        <Badge className="rounded-full bg-blue-800 text-white absolute -top-1.5 -right-1.5 px-0.5 py-0.5 flex items-center justify-center w-5 h-5 z-10">
                          <Check className="h-3 w-3" />
                        </Badge>
                      )}
                      {/* Show discount badge if there's a discount - always visible */}
                      {discountPercentage && (
                        <Badge className="rounded-none absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 whitespace-nowrap z-10">
                          %{discountPercentage} İNDİRİM
                        </Badge>
                      )}
                      <Button
                        onClick={() => selectSize(size)}
                        className={`rounded-none px-4 py-4 min-w-[100px] min-h-[80px] bg-gray-100 border-3 border-gray-300 text-black hover:bg-gray-50 cursor-pointer ${
                          active ? "border-blue-800" : ""
                        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <div className="flex flex-col items-center justify-center gap-1">
                          <span className="text-lg font-bold">{label}</span>
                          <span className="text-sm text-gray-700">{sub}</span>
                        </div>
                      </Button>
                    </div>
                  );
                })}
              </div>

              {/*  Product Price  */}
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-extrabold text-gray-900">
                    {price} TL
                  </div>
                  {crossed && (
                    <div className="text-xl text-red-500 font-bold line-through">
                      {crossed} TL
                    </div>
                  )}
                  {selectedVariant?.size?.total_services && (
                    <div className="text-gray-700 text-lg font-bold mt-2 ml-auto mr-10 text-end">
                      {(price / selectedVariant.size.total_services).toFixed(2)}{" "}
                      TL / Servis
                    </div>
                  )}
                </div>
                <div className="flex items-center mt-3">
                  {crossed && (
                    <div className="bg-green-200 border border-green-600 rounded px-3 py-2">
                      <span className="text-green-800 font-semibold">
                        Kazancınız: {crossed - price} TL
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/*  Product Add to Cart Button  */}
              <div className="flex flex-row items-center gap-3 mt-5">
                {/* Quantity Button Group */}
                <div className="flex flex-row items-center border border-gray-300 rounded-md overflow-hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    className="rounded-none border-0 border-r border-gray-300 h-12 w-12 cursor-pointer bg-gray-100 hover:bg-gray-50"
                  >
                    <MinusIcon strokeWidth={4} className="w-4 h-4" />
                  </Button>

                  <div className="px-4 py-2 min-w-[60px] text-center font-semibold text-lg border-x border-gray-300 h-12 flex items-center justify-center bg-white">
                    {quantity}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                    className="rounded-none border-0 border-l border-gray-300 h-12 w-12 cursor-pointer bg-gray-100 hover:bg-gray-50"
                  >
                    <PlusIcon strokeWidth={4} className="w-4 h-4" />
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <div className="flex-1">
                  <Button className="w-full h-12 text-lg bg-black text-white hover:bg-gray-800 cursor-pointer rounded-md flex items-center justify-center gap-2">
                    <ShoppingCartIcon strokeWidth={3} className="w-6 h-6" />
                    SEPETE EKLE
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Guarantee , Cargo, Customers */}
            <div className="flex flex-row items-center gap-2 mt-8 mb-5">
              <Image
                src="/images/cargo.png"
                alt="Cargo"
                width={162}
                height={56}
              />
              <Image
                src="/images/customers.png"
                alt="Customers"
                width={162}
                height={56}
              />
              <Image
                src="/images/guarantee.png"
                alt="Guarantee"
                width={162}
                height={56}
              />
            </div>

            {/* Product Expiration Date */}
            <div>
              <p className="font-semibold text-xs mb-3">
                Son Kullanma Tarihi: {product.expiration_date}
              </p>
            </div>

            {/* Product Description */}
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold [&>svg]:size-5 [&>svg]:text-black [&>svg]:font-bold cursor-pointer">
                    ÖZELLİKLER
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 font-semibold text-balance">
                    {product.explanation.features}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold [&>svg]:size-5 [&>svg]:text-black [&>svg]:font-bold cursor-pointer">
                    BESİN İÇERİĞİ
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 font-semibold text-balance">
                    {product.explanation.nutritional_content.ingredients.map(
                      (ingredient, index) => (
                        <div key={`${ingredient.aroma || "genel"}-${index}`}>
                          <p>
                            {ingredient.aroma ? `${ingredient.aroma} - ` : ""}
                            {ingredient.value}
                          </p>
                        </div>
                      )
                    )}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-bold [&>svg]:size-5 [&>svg]:text-black [&>svg]:font-bold cursor-pointer">
                    KULLANIM ŞEKLİ
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 font-semibold text-balance">
                    {product.explanation.usage}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed Products */}
      <RecentlyViewedProducts currentProductId={id} />

      {/* Product Reviews */}
      <ProductReviews productId={product.id} />

      {/* Best Sellers Section */}
      <section className="mt-5">
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
      </section>

      {/* All Products Button */}
      <div className="flex justify-center mb-5">
        <Link
          href={`/products`}
          className="text-lg font-bold text-center text-gray-800"
        >
          <Button className="bg-blue-900 hover:bg-blue-800 text-white text-lg w-[282px] h-[50px] rounded-md cursor-pointer">
            TÜMÜNÜ GÖR
          </Button>
        </Link>
      </div>
    </>
  );
}
