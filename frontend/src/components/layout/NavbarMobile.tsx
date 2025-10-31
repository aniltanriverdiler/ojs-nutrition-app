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
  ShoppingCartIcon,
  TextAlignJustify,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, CATEGORY_NAMES } from "@/lib/constants/categories";
import { Button } from "../ui/button";

const NavbarMobile = () => {
  const [panel, setPanel] = React.useState<"root" | "protein">("root");

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
          <SheetContent side="left">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform:
                    panel === "root" ? "translateX(0%)" : "translateX(-100%)",
                }}
              >
                {/* ROOT PANEL */}
                <div className="min-w-[24rem] p-4">
                  <SheetHeader className="mb-4">
                    <SheetTitle className="text-2xl font-bold">Menü</SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col divide-y">
                    {/* Navigate to protein submenu */}
                    <Button
                      className="text-left py-3 font-bold uppercase"
                      onClick={() => setPanel("protein")}
                    >
                      {CATEGORY_NAMES[CATEGORIES.PROTEIN]}
                    </Button>
                  </nav>
                </div>

                {/* PROTEIN PANEL */}
                <div className="min-w-[24rem] p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      className="w-8 h-8"
                      aria-label="Geri"
                      onClick={() => setPanel("root")}
                    >
                      <ChevronLeftIcon className="w-4 h-4" />
                    </Button>
                    <h2 className="text-lg font-bold">
                      {" "}
                      {CATEGORY_NAMES[CATEGORIES.PROTEIN]}{" "}
                    </h2>
                  </div>

                  <nav className="flex flex-col gap-2">
                    <Link
                      href={`/products/${CATEGORIES.PROTEIN}`}
                      className="font-semibold"
                    >
                      Tüm {CATEGORY_NAMES[CATEGORIES.PROTEIN]} Ürünleri
                    </Link>

                    {/* Example product links (static) */}
                    <Link href="/products/1" className="text-sm text-gray-600">
                      Whey Protein
                    </Link>
                    <Link href="/products/2" className="text-sm text-gray-600">
                      Whey Isolate
                    </Link>
                    <Link href="/products/3" className="text-sm text-gray-600">
                      Clear Whey
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Icon */}
      <div>
        <Image
          src="/icons/logo-black-svg.svg"
          alt="OJS Nutrition Logo"
          width={141}
          height={30}
          priority
        />
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
