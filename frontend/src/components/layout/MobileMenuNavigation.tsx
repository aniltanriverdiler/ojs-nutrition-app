"use client";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeftIcon, ChevronRight, TextAlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { getAllCategories } from "@/lib/api/categories";
import { Category } from "@/types/categories";

// Category icon mapping based on category slug
const CATEGORY_ICONS: Record<string, string> = {
  protein: "/images/gold-whey.png",
  "spor-gidalari": "/images/gold-whey.png",
  saglik: "/images/gold-whey.png",
  gida: "/images/gold-whey.png",
  vitamin: "/images/gold-whey.png",
  default: "/images/gold-whey.png",
};

const MobileMenuNavigation = () => {
  const [panel, setPanel] = useState<"root" | string>("root");
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "") || "";

  const getImageUrl = (path: string) => {
    if (!path) return "/images/5-htp-lg.png";
    if (path.startsWith("http")) return path;
    const cleanBase = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(
          Array.isArray(data) ? data.sort((a, b) => a.order - b.order) : []
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) setPanel("root");
  };

  const getIndex = (p: string) => {
    const panelOrder = ["root", ...categories.map((c) => c.slug)];
    return panelOrder.indexOf(p);
  };

  const getCategoryIcon = (category: Category) => {
    // Try to use the first top seller's image if available
    if (category.top_sellers && category.top_sellers.length > 0) {
      return getImageUrl(category.top_sellers[0].picture_src);
    }
    // Fallback to predefined icons
    return CATEGORY_ICONS[category.slug] || CATEGORY_ICONS["default"];
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button aria-label="Menu">
          <TextAlignJustify className="w-7 h-7" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-80 sm:w-96 p-0 flex flex-col h-screen"
      >
        <div className="relative overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${getIndex(panel) * 100}%)` }}
          >
            {/* Root Panel */}
            <div className="min-w-[20rem] sm:min-w-[24rem] flex flex-col h-full p-1">
              {/* Logo */}
              <div className="mb-2 shrink-0 p-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/ojs-svg.svg"
                    alt="OJS"
                    width={47}
                    height={20}
                  />
                  <Image
                    src="/icons/nutrition-svg.svg"
                    alt="NUTRITION"
                    width={120}
                    height={30}
                  />
                </div>
              </div>

              <nav className="flex flex-col gap-5 overflow-y-auto flex-1 pr-2 px-4">
                {/* Loading State */}
                {isLoading && (
                  <div className="text-center py-4">Yükleniyor...</div>
                )}

                {/* Dynamic Categories */}
                {!isLoading &&
                  categories.map((category) => (
                    <Button
                      key={category.id}
                      className="bg-transparent text-black text-xl py-3 pl-2 font-bold uppercase justify-start hover:bg-gray-100"
                      onClick={() => setPanel(category.slug)}
                    >
                      <div className="relative flex items-center justify-center w-[45px] h-[45px]">
                        <Image
                          src={getCategoryIcon(category)}
                          alt={category.name}
                          fill
                          sizes="45px"
                          className="object-cover rounded-sm"
                          priority
                          unoptimized
                        />
                      </div>
                      {category.name}
                      <ChevronRight
                        strokeWidth={3}
                        className="w-10 h-10 ml-auto"
                      />
                    </Button>
                  ))}

                {/* All Products */}
                <Link href="/products" className="px-3">
                  <Button className="w-full bg-black text-white hover:bg-black/90 text-lg font-bold uppercase py-6">
                    TÜM ÜRÜNLERİ İNCELE
                  </Button>
                </Link>

                {/* Account Links */}
                <div className="flex flex-col gap-2 px-3 pb-4">
                  <Link
                    href="/auth/login"
                    className="font-bold text-lg hover:underline"
                  >
                    ÜYE GİRİŞİ
                  </Link>
                  <Link
                    href="/auth/register"
                    className="font-bold text-lg hover:underline"
                  >
                    ÜYE OL
                  </Link>
                  <Link href="/" className="font-bold text-lg hover:underline">
                    MÜŞTERİ YORUMLARI
                  </Link>
                  <Link
                    href="/contact"
                    className="font-bold text-lg hover:underline"
                  >
                    İLETİŞİM
                  </Link>
                </div>
              </nav>
            </div>

            {/* Dynamic Category Panels */}
            {categories.map((category) => (
              <div
                key={category.id}
                className="min-w-[20rem] sm:min-w-[24rem] p-6 flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-4 shrink-0">
                  <Button
                    variant="outline"
                    className="w-18 h-10"
                    onClick={() => setPanel("root")}
                    aria-label="Geri"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                    <span className="text-sm mb-0.5 mr-2">Geri</span>
                  </Button>
                </div>

                <nav className="flex flex-col gap-4 overflow-y-auto flex-1 pr-2">
                  {/* Main Category Link */}
                  <Link
                    href={`/products/${category.slug}`}
                    className="font-bold text-2xl text-center mb-2 hover:underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>

                  {/* Top Sellers Section (if available) */}
                  {category.top_sellers && category.top_sellers.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2 text-gray-700">
                        EN ÇOK SATANLAR
                      </h3>
                      <div className="flex flex-col gap-2">
                        {category.top_sellers.slice(0, 3).map((seller) => (
                          <Link
                            key={seller.slug}
                            href={`/products/${seller.slug}`}
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="relative flex items-center justify-center w-[45px] h-[45px]">
                              <Image
                                src={getImageUrl(seller.picture_src)}
                                alt={seller.name}
                                fill
                                sizes="45px"
                                className="object-cover rounded-sm"
                                priority
                                unoptimized
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm">
                                {seller.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {seller.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Child Categories */}
                  {category.children
                    ?.sort((a, b) => a.order - b.order)
                    .map((child) => (
                      <div key={child.id} className="mb-2">
                        {/* Only title, no link */}
                        <h3 className="font-semibold text-lg block mb-2 text-gray-900">
                          {child.name}
                        </h3>
                        {/* Sub Children */}
                        <div className="flex flex-col gap-1 pl-2">
                          {child.sub_children
                            ?.sort((a, b) => a.order - b.order)
                            .map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/products/${sub.slug}`}
                                className="text-md text-gray-700 hover:text-black hover:underline"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuNavigation;
