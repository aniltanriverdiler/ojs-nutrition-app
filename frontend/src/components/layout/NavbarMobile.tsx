"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronLeftIcon,
  ChevronRight,
  ShoppingCartIcon,
  TextAlignJustify,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, CATEGORY_NAMES } from "@/lib/constants/categories";
import { Button } from "../ui/button";

const NavbarMobile = () => {
  const [panel, setPanel] = React.useState<
    "root" | "protein" | "sports" | "health" | "food" | "vitamin"
  >("protein");

  // Panel index order (slide index)
  const PANEL_ORDER = [
    "root",
    "protein",
    "sports",
    "health",
    "food",
    "vitamin",
  ] as const;
  const getIndex = (p: (typeof PANEL_ORDER)[number]) => PANEL_ORDER.indexOf(p);

  const onOpenChange = (open: boolean) => {
    if (!open) setPanel("root");
  };

  return (
    <header className="grid grid-cols-3 gap-5 py-5 px-4 shadow-lg">
      {/* Mobile Menu */}
      <div>
        <Sheet onOpenChange={onOpenChange}>
          <SheetTrigger>
            <TextAlignJustify className="w-7 h-7" />
          </SheetTrigger>
          <SheetContent side="left" className="w-80 sm:w-96 p-0">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${getIndex(panel) * 100}%)`,
                }}
              >
                {/* ROOT PANEL */}
                <div className="min-w-[20rem] sm:min-w-[24rem] p-4">
                  <SheetHeader className="mb-2">
                    <SheetTitle className="text-2xl font-bold">
                      OJS NUTRITION
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col gap-5">
                    {/* Navigate to protein submenu */}
                    <Button
                      className="bg-transparent text-black text-xl py-3 pl-2 font-bold uppercase"
                      onClick={() => setPanel("protein")}
                    >
                      <Image
                        src="/images/gold-whey.png"
                        alt="Gold Whey"
                        width={40}
                        height={40}
                        priority
                      />
                      {CATEGORY_NAMES[CATEGORIES.PROTEIN]}
                      <ChevronRight
                        strokeWidth={3}
                        className="w-10 h-10 ml-auto"
                      />
                    </Button>

                    {/* Navigate to sports nutrition submenu */}
                    <Button
                      className="bg-transparent text-black text-xl py-3 pl-2 font-bold uppercase"
                      onClick={() => setPanel("sports")}
                    >
                      <Image
                        src="/images/gold-whey.png"
                        alt="Gold Whey"
                        width={40}
                        height={40}
                        priority
                      />
                      {CATEGORY_NAMES[CATEGORIES.SPORTS_NUTRITION]}
                      <ChevronRight
                        strokeWidth={3}
                        className="w-10 h-10 font-semibold ml-auto"
                      />
                    </Button>

                    {/* Navigate to health submenu */}
                    <Button
                      className="bg-transparent text-black text-xl py-3 pl-2 font-bold uppercase"
                      onClick={() => setPanel("health")}
                    >
                      <Image
                        src="/images/gold-whey.png"
                        alt="Gold Whey"
                        width={40}
                        height={40}
                        priority
                      />
                      {CATEGORY_NAMES[CATEGORIES.HEALTH]}
                      <ChevronRight
                        strokeWidth={3}
                        className="w-10 h-10 font-semibold ml-auto"
                      />
                    </Button>

                    {/* Navigate to food submenu */}
                    <Button
                      className="bg-transparent text-black text-xl py-3 pl-2 font-bold uppercase"
                      onClick={() => setPanel("food")}
                    >
                      <Image
                        src="/images/gold-whey.png"
                        alt="Gold Whey"
                        width={40}
                        height={40}
                        priority
                      />
                      {CATEGORY_NAMES[CATEGORIES.FOOD]}
                      <ChevronRight
                        strokeWidth={3}
                        className="w-10 h-10 font-semibold ml-auto"
                      />
                    </Button>

                    {/* Navigate to vitamin submenu */}
                    <Button
                      className="bg-transparent text-black text-xl py-3 pl-2 font-bold uppercase"
                      onClick={() => setPanel("vitamin")}
                    >
                      <Image
                        src="/images/gold-whey.png"
                        alt="Gold Whey"
                        width={40}
                        height={40}
                        priority
                      />
                      {CATEGORY_NAMES[CATEGORIES.VITAMIN]}
                      <ChevronRight
                        strokeWidth={3}
                        className="w-10 h-10 font-semibold ml-auto"
                      />
                    </Button>

                    <Link href="/products" className="py-3 font-bold uppercase">
                      Tüm Ürünler
                    </Link>
                  </nav>
                </div>

                {/* PROTEIN PANEL */}
                <div className="min-w-[20rem] sm:min-w-[24rem] p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      className="w-8 h-8"
                      aria-label="Geri"
                      onClick={() => setPanel("root")}
                    >
                      <ChevronLeftIcon className="w-4 h-4" />
                    </Button>
                    <h2 className="text-xl font-bold">
                      {" "}
                      {CATEGORY_NAMES[CATEGORIES.PROTEIN]}{" "}
                    </h2>
                  </div>

                  <nav className="flex flex-col gap-2">
                    <Link
                      href={`/products/${CATEGORIES.PROTEIN}`}
                      className="font-semibold text-xl"
                    >
                      Tüm {CATEGORY_NAMES[CATEGORIES.PROTEIN]} Ürünleri
                    </Link>

                    <Link
                      href={`/products/${CATEGORIES.PROTEIN}`}
                      className="font-semibold text-xl"
                    >
                      Proteinler
                    </Link>
                    {/* Example protein product links (static) */}
                    <Link href="/products/1" className="text-md text-gray-800">
                      Whey Protein
                    </Link>
                    <Link href="/products/2" className="text-md text-gray-800">
                      Whey Isolate
                    </Link>
                    <Link href="/products/3" className="text-md text-gray-800">
                      Clear Whey
                    </Link>
                    <Link href="/products/4" className="text-md text-gray-800">
                      Bezelye Proteini
                    </Link>
                    <Link href="/products/5" className="text-md text-gray-800">
                      Kolajen Proteini
                    </Link>
                    <Link href="/products/6" className="text-md text-gray-800">
                      Süt Proteini
                    </Link>
                    <Link href="/products/7" className="text-md text-gray-800">
                      Soya Proteini
                    </Link>

                    <Link
                      href={`/products/${CATEGORIES.PROTEIN}`}
                      className="font-semibold text-xl"
                    >
                      Proteinli Ürünler
                    </Link>
                    <Link href="/products/8" className="text-md text-gray-800">
                      Mass Gainer
                    </Link>
                    <Link href="/products/9" className="text-md text-gray-800">
                      Protein Bar
                    </Link>
                    <Link href="/products/10" className="text-md text-gray-800">
                      Protein Meal
                    </Link>
                    <Link href="/products/11" className="text-md text-gray-800">
                      Protein Coffee
                    </Link>
                    <Link href="/products/12" className="text-md text-gray-800">
                      Collagen Coffee
                    </Link>
                    <Link href="/products/13" className="text-md text-gray-800">
                      Vegan Gainer
                    </Link>
                  </nav>
                </div>

                {/* SPORTS NUTRITION PANEL */}
                <div className="min-w-[20rem] sm:min-w-[24rem] p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      className="w-8 h-8"
                      onClick={() => setPanel("root")}
                      aria-label="Geri"
                    >
                      <ChevronLeftIcon className="w-4 h-4" />
                    </Button>
                    <h2 className="text-xl font-bold">
                      {CATEGORY_NAMES[CATEGORIES.SPORTS_NUTRITION]}
                    </h2>
                  </div>
                  <nav className="flex flex-col gap-2">
                    <Link
                      href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
                      className="font-semibold text-xl"
                    >
                      Tüm {CATEGORY_NAMES[CATEGORIES.SPORTS_NUTRITION]}
                    </Link>
                    <Link href="/products/14" className="text-md text-gray-800">
                      Creatine
                    </Link>
                    <Link href="/products/15" className="text-md text-gray-800">
                      BCAA
                    </Link>
                    <Link href="/products/16" className="text-md text-gray-800">
                      Pre-Workout
                    </Link>
                  </nav>
                </div>
                {/* HEALTH PANEL */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Icon */}
      <div>
        <Link href="/">
          <Image
            src="/icons/logo-black-svg.svg"
            alt="OJS Nutrition Logo"
            width={141}
            height={30}
            priority
          />
        </Link>
      </div>

      {/* Mobile Shopping Cart */}
      <div className="text-right mr-2">
        <Sheet>
          <SheetTrigger>
            <ShoppingCartIcon className="w-7 h-7" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavbarMobile;
