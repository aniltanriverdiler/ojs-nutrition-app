import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { getAllCategories } from "@/lib/api/categories";
import { Category } from "@/types/categories";

// Constants
const FALLBACK_IMAGE = "/images/5-htp-lg.png";
const STAR_ICON = "/icons/star-sharp-svg.svg";

// Helper function for navigation menu positioning
const getPositionClass = (idx: number): string => {
  const positions = [
    "2xl:[&_div.absolute]:-left-[100px] 2xl:[&_div.absolute]:translate-x-1/3 xl:[&_div.absolute]:-left-[5px] xl:[&_div.absolute]:translate-x-1/3 lg:[&_div.absolute]:-left-[60px] lg:[&_div.absolute]:translate-x-1/3",
    "[&_div.absolute]:-left-[-420px] [&_div.absolute]:-translate-x-1/2",
    "[&_div.absolute]:-left-[-150px] [&_div.absolute]:-translate-x-1/2",
    "[&_div.absolute]:-left-[60px] [&_div.absolute]:-translate-x-1/2",
    "[&_div.absolute]:-left-[275px] [&_div.absolute]:-translate-x-1/2",
  ];
  return (
    positions[idx] ||
    "[&_div.absolute]:-left-[100px] [&_div.absolute]:-translate-x-1/2"
  );
};

// Helper function for grid width based on children count
const getGridWidthForCategory = (cat: Category): string => {
  const childCount = cat.children?.length || 0;
  if (childCount >= 4) return "lg:w-[1400px]";
  if (childCount === 3) return "lg:w-[1150px]";
  if (childCount === 2) return "lg:w-[900px]";
  return "lg:w-[650px]";
};

const MenuNavigation = async () => {
  // Fetch categories from server
  let categories: Category[] = [];
  try {
    const data = await getAllCategories();
    categories = Array.isArray(data)
      ? data.sort((a: Category, b: Category) => a.order - b.order)
      : [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "") || "";

  const getImageUrl = (path: string): string => {
    if (!path) return FALLBACK_IMAGE;
    if (path.startsWith("http")) return path;
    const cleanBase = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  return (
    <>
      {/* Category quick buttons for md, lg, xl (hidden on 2xl and up) */}
      <div className="hidden md:flex 2xl:hidden flex-wrap items-center justify-center gap-2 md:gap-8 lg:gap-16 xl:gap-31 2xl:gap-16 py-2 px-3 bg-black text-white">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products/${category.slug}`}
            className="bg-transparent font-bold text-sm text-white uppercase hover:underline transition-all"
          >
            <span className="group inline-flex flex-row items-center gap-1">
              {category.name}
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </span>
          </Link>
        ))}
        {/* All Products Button */}
        <Link
          href="/products"
          className="bg-transparent font-bold text-sm text-white uppercase hover:underline transition-all"
        >
          <span className="inline-flex flex-row items-center gap-1">
            TÜM ÜRÜNLER
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Menus (2xl and up) */}
      <div className="hidden 2xl:flex flex-row py-1 md:gap-2 lg:gap-10 xl:gap-10 2xl:gap-31 bg-black text-white justify-center pr-7 pl-1.5">
        {/* Dynamic Navigation Menus */}
        {categories.map((category, index) => (
          <div key={category.id}>
            <NavigationMenu className={getPositionClass(index)}>
              <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-0 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`grid grid-cols-[370px_1fr] gap-6 ${getGridWidthForCategory(
                        category
                      )}`}
                    >
                      {/* Best Sellers Section */}
                      {category.top_sellers &&
                        category.top_sellers.length > 0 && (
                          <div className="flex flex-col gap-5 bg-gray-300 p-5 w-[360px]">
                            <h4 className="text-lg font-bold ml-1">
                              EN ÇOK SATANLAR
                            </h4>
                            {category.top_sellers.map((seller) => (
                              <Link
                                key={seller.slug}
                                href={`/products/${seller.slug}`}
                                className="hover:bg-white/50 p-2 rounded-lg transition-colors"
                              >
                                <div className="flex flex-row gap-2 items-center">
                                  <div className="relative flex items-center justify-center w-[75px] h-[75px]">
                                    <Image
                                      src={getImageUrl(seller.picture_src)}
                                      alt={seller.name}
                                      fill
                                      sizes="75px"
                                      className="object-cover rounded-sm"
                                      priority
                                      unoptimized
                                    />
                                  </div>
                                  <div className="flex flex-col justify-start items-start gap-1">
                                    <p className="font-bold text-sm">
                                      {seller.name}
                                    </p>
                                    <p className="text-xs text-gray-800 font-semibold">
                                      {seller.description}
                                    </p>
                                    <div
                                      className="flex flex-row items-center"
                                      aria-label="5 yıldız"
                                      role="img"
                                    >
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Image
                                          key={i}
                                          src={STAR_ICON}
                                          alt=""
                                          width={18}
                                          height={18}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}

                      {/* Category Children Section */}
                      <div className="flex flex-col gap-2 pt-5 pl-5 pb-6">
                        <h4 className="font-bold uppercase text-base mb-2">
                          {category.name}
                        </h4>

                        <div className="flex flex-row gap-12 flex-wrap">
                          {category.children
                            ?.sort((a, b) => a.order - b.order)
                            .map((child) => (
                              <div
                                key={child.id}
                                className="flex flex-col gap-2 min-w-[180px]"
                              >
                                <Link
                                  href={`/products/${child.slug}`}
                                  className="text-sm font-extrabold hover:underline"
                                >
                                  {child.name}
                                </Link>

                                {/* Subcategory products */}
                                {child.sub_children
                                  ?.sort((a, b) => a.order - b.order)
                                  .map((subChild) => (
                                    <Link
                                      key={subChild.slug}
                                      href={`/products/${subChild.slug}`}
                                      className="text-sm font-semibold text-gray-600 hover:text-black hover:underline transition-colors"
                                    >
                                      {subChild.name}
                                    </Link>
                                  ))}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        ))}

        {/* All Products Navigation Menu */}
        <div className="flex justify-center items-center">
          <Link
            href="/products"
            className="text-sm font-bold hover:underline transition-all"
          >
            TÜM ÜRÜNLER
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuNavigation;
