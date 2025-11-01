"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronLeftIcon,
  ChevronRight,
  ShoppingCartIcon,
  TextAlignJustify,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, CATEGORY_NAMES } from "@/lib/constants/categories";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

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
    <>
      <header className="grid grid-cols-3 gap-5 py-5 px-4 shadow-md">
        {/* Mobile Menu */}
        <div>
          <Sheet onOpenChange={onOpenChange}>
            <SheetTrigger>
              <TextAlignJustify className="w-7 h-7" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 sm:w-96 p-0 flex flex-col h-screen"
            >
              <div className="relative overflow-hidden flex-1">
                <div
                  className="flex transition-transform duration-300 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${getIndex(panel) * 100}%)`,
                  }}
                >
                  {/* ROOT PANEL */}
                  <div className="min-w-[20rem] sm:min-w-[24rem] flex flex-col h-full p-1">
                    <SheetHeader className="mb-2 shrink-0">
                      <SheetTitle className="flex items-center gap-2">
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
                      </SheetTitle>
                    </SheetHeader>

                    <nav className="flex flex-col gap-5 overflow-y-auto flex-1 pr-2">
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

                      {/* All Products Section */}
                      <Link href="/products" className="px-3">
                        <Button className="w-full bg-black text-white hover:bg-black/90 text-lg font-bold uppercase py-6">
                          TÜM ÜRÜNLERİ İNCELE
                        </Button>
                      </Link>

                      {/* Account and Contact Section */}
                      <div className="flex flex-col gap-2 px-3">
                        <Link href="/auth/login" className="font-bold text-lg">
                          ÜYE GİRİŞİ
                        </Link>
                        <Link
                          href="/auth/register"
                          className="font-bold text-lg"
                        >
                          ÜYE OL
                        </Link>
                        <Link href="/contact" className="font-bold text-lg">
                          MÜŞTERİ YORUMLARI
                        </Link>
                        <Link href="/contact" className="font-bold text-lg">
                          İLETİŞİM
                        </Link>
                      </div>
                    </nav>
                  </div>

                  {/* PROTEIN PANEL */}
                  <div className="min-w-[20rem] sm:min-w-[24rem] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4 shrink-0">
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

                    <nav className="flex flex-col gap-2 overflow-y-auto flex-1 pr-2">
                      <Link
                        href={`/products/${CATEGORIES.PROTEIN}`}
                        className="font-semibold text-xl"
                      >
                        Tüm {CATEGORY_NAMES[CATEGORIES.PROTEIN]} Ürünleri
                      </Link>

                      {/* Proteins Section */}
                      <Link
                        href={`/products/${CATEGORIES.PROTEIN}`}
                        className="font-semibold text-xl"
                      >
                        Proteinler
                      </Link>
                      {/* Protein powders links */}
                      <Link
                        href="/products/1"
                        className="text-md text-gray-800"
                      >
                        Whey Protein
                      </Link>
                      <Link
                        href="/products/2"
                        className="text-md text-gray-800"
                      >
                        Whey Isolate
                      </Link>
                      <Link
                        href="/products/3"
                        className="text-md text-gray-800"
                      >
                        Clear Whey
                      </Link>
                      <Link
                        href="/products/4"
                        className="text-md text-gray-800"
                      >
                        Bezelye Proteini
                      </Link>
                      <Link
                        href="/products/5"
                        className="text-md text-gray-800"
                      >
                        Kolajen Proteini
                      </Link>
                      <Link
                        href="/products/6"
                        className="text-md text-gray-800"
                      >
                        Süt Proteini
                      </Link>
                      <Link
                        href="/products/7"
                        className="text-md text-gray-800"
                      >
                        Soya Proteini
                      </Link>

                      {/* Protein Products Section */}
                      <Link
                        href={`/products/${CATEGORIES.PROTEIN}`}
                        className="font-semibold text-xl"
                      >
                        Proteinli Ürünler
                      </Link>
                      <Link
                        href="/products/8"
                        className="text-md text-gray-800"
                      >
                        Mass Gainer
                      </Link>
                      <Link
                        href="/products/9"
                        className="text-md text-gray-800"
                      >
                        Protein Bar
                      </Link>
                      <Link
                        href="/products/10"
                        className="text-md text-gray-800"
                      >
                        Protein Meal
                      </Link>
                      <Link
                        href="/products/11"
                        className="text-md text-gray-800"
                      >
                        Protein Coffee
                      </Link>
                      <Link
                        href="/products/12"
                        className="text-md text-gray-800"
                      >
                        Collagen Coffee
                      </Link>
                      <Link
                        href="/products/13"
                        className="text-md text-gray-800"
                      >
                        Vegan Gainer
                      </Link>
                    </nav>
                  </div>

                  {/* SPORTS NUTRITION PANEL */}
                  <div className="min-w-[20rem] sm:min-w-[24rem] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4 shrink-0">
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
                    <nav className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
                      <Link
                        href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
                        className="font-semibold text-xl"
                      >
                        Tüm {CATEGORY_NAMES[CATEGORIES.SPORTS_NUTRITION]}
                      </Link>

                      {/* Amino Acids Section */}
                      <Link
                        href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
                        className="font-semibold text-xl"
                      >
                        Amino Asitler
                      </Link>
                      <Link
                        href="/products/14"
                        className="text-md text-gray-800"
                      >
                        Creatine
                      </Link>
                      <Link
                        href="/products/15"
                        className="text-md text-gray-800"
                      >
                        L-Carnitine
                      </Link>
                      <Link
                        href="/products/16"
                        className="text-md text-gray-800"
                      >
                        Creatine Creapure
                      </Link>
                      <Link
                        href="/products/17"
                        className="text-md text-gray-800"
                      >
                        BCAA
                      </Link>
                      <Link
                        href="/products/18"
                        className="text-md text-gray-800"
                      >
                        Glutamine
                      </Link>
                      <Link
                        href="/products/19"
                        className="text-md text-gray-800"
                      >
                        EAA
                      </Link>
                      <Link
                        href="/products/20"
                        className="text-md text-gray-800"
                      >
                        Arginine
                      </Link>
                      <Link
                        href="/products/21"
                        className="text-md text-gray-800"
                      >
                        Taurine
                      </Link>
                      <Link
                        href="/products/22"
                        className="text-md text-gray-800"
                      >
                        Leucine
                      </Link>

                      {/* Pre-Workout Section */}
                      <Link
                        href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
                        className="font-semibold text-xl"
                      >
                        Pre-Workout
                      </Link>
                      <Link
                        href="/products/23"
                        className="text-md text-gray-800"
                      >
                        Pre-Workout Supreme
                      </Link>
                      <Link
                        href="/products/24"
                        className="text-md text-gray-800"
                      >
                        HydroPrime
                      </Link>
                      <Link
                        href="/products/25"
                        className="text-md text-gray-800"
                      >
                        Thermo Burner
                      </Link>
                      <Link
                        href="/products/26"
                        className="text-md text-gray-800"
                      >
                        Heavy Duty Pre-Workout
                      </Link>
                      <Link
                        href="/products/27"
                        className="text-md text-gray-800"
                      >
                        Hydration
                      </Link>
                      <Link
                        href="/products/28"
                        className="text-md text-gray-800"
                      >
                        Citrulline
                      </Link>
                      <Link
                        href="/products/29"
                        className="text-md text-gray-800"
                      >
                        Supreme Pump
                      </Link>
                      <Link
                        href="/products/30"
                        className="text-md text-gray-800"
                      >
                        Beta-Alanine
                      </Link>
                      <Link
                        href="/products/31"
                        className="text-md text-gray-800"
                      >
                        Betaine
                      </Link>

                      {/* Carbohydrates Section */}
                      <Link
                        href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
                        className="font-semibold text-xl"
                      >
                        Karbonhidratlar
                      </Link>
                      <Link
                        href="/products/32"
                        className="text-md text-gray-800"
                      >
                        Pirinç Kreması
                      </Link>
                      <Link
                        href="/products/33"
                        className="text-md text-gray-800"
                      >
                        Mass Gainer
                      </Link>
                      <Link
                        href="/products/34"
                        className="text-md text-gray-800"
                      >
                        Maltodekstrin
                      </Link>
                      <Link
                        href="/products/35"
                        className="text-md text-gray-800"
                      >
                        Dekstroz
                      </Link>
                      <Link
                        href="/products/36"
                        className="text-md text-gray-800"
                      >
                        Vegan Gainer
                      </Link>

                      {/* Other Products Section */}
                      <Link
                        href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
                        className="font-semibold text-xl"
                      >
                        Diğer Ürünler
                      </Link>
                      <Link
                        href="/products/37"
                        className="text-md text-gray-800"
                      >
                        Ultra Focus
                      </Link>
                      <Link
                        href="/products/38"
                        className="text-md text-gray-800"
                      >
                        Gamer Hack
                      </Link>
                      <Link
                        href="/products/39"
                        className="text-md text-gray-800"
                      >
                        Intra Workout
                      </Link>
                      <Link
                        href="/products/40"
                        className="text-md text-gray-800"
                      >
                        Elektrolit Blend
                      </Link>
                      <Link
                        href="/products/41"
                        className="text-md text-gray-800"
                      >
                        Hydration
                      </Link>
                      <Link
                        href="/products/42"
                        className="text-md text-gray-800"
                      >
                        CLA
                      </Link>
                      <Link
                        href="/products/43"
                        className="text-md text-gray-800"
                      >
                        Protein Meal
                      </Link>
                    </nav>
                  </div>

                  {/* HEALTH & WELLNESS PANEL */}
                  <div className="min-w-[20rem] sm:min-w-[24rem] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4 shrink-0">
                      <Button
                        variant="outline"
                        className="w-8 h-8"
                        onClick={() => setPanel("root")}
                        aria-label="Geri"
                      >
                        <ChevronLeftIcon className="w-4 h-4" />
                      </Button>
                      <h2 className="text-xl font-bold">
                        {CATEGORY_NAMES[CATEGORIES.HEALTH]}
                      </h2>
                    </div>
                    <nav className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
                      <Link
                        href={`/products/${CATEGORIES.HEALTH}`}
                        className="font-semibold text-xl"
                      >
                        Tüm {CATEGORY_NAMES[CATEGORIES.HEALTH]}
                      </Link>

                      {/* Functional Foods Section */}
                      <Link
                        href={`/products/${CATEGORIES.HEALTH}`}
                        className="font-semibold text-xl"
                      >
                        Fonksiyonel Gıdalar
                      </Link>
                      <Link
                        href="/products/44"
                        className="text-md text-gray-800"
                      >
                        Collagen
                      </Link>
                      <Link
                        href="/products/45"
                        className="text-md text-gray-800"
                      >
                        Deep Sleep
                      </Link>
                      <Link
                        href="/products/46"
                        className="text-md text-gray-800"
                      >
                        Protein Coffee
                      </Link>
                      <Link
                        href="/products/47"
                        className="text-md text-gray-800"
                      >
                        Protein Meal
                      </Link>
                      <Link
                        href="/products/48"
                        className="text-md text-gray-800"
                      >
                        Probiyotik
                      </Link>
                      <Link
                        href="/products/49"
                        className="text-md text-gray-800"
                      >
                        Collagen Coffee
                      </Link>
                      <Link
                        href="/products/50"
                        className="text-md text-gray-800"
                      >
                        Digestion
                      </Link>
                      <Link
                        href="/products/51"
                        className="text-md text-gray-800"
                      >
                        Tatlandırıcılar
                      </Link>
                      <Link
                        href="/products/52"
                        className="text-md text-gray-800"
                      >
                        Mct Oil
                      </Link>
                      <Link
                        href="/products/53"
                        className="text-md text-gray-800"
                      >
                        Inulin
                      </Link>

                      {/* Plant Powders Section */}
                      <Link
                        href={`/products/${CATEGORIES.HEALTH}`}
                        className="font-semibold text-xl"
                      >
                        Biti Tozları
                      </Link>
                      <Link
                        href="/products/54"
                        className="text-md text-gray-800"
                      >
                        Greens & Superfoods
                      </Link>
                      <Link
                        href="/products/55"
                        className="text-md text-gray-800"
                      >
                        Green Detox+
                      </Link>
                      <Link
                        href="/products/56"
                        className="text-md text-gray-800"
                      >
                        Red Detox
                      </Link>
                      <Link
                        href="/products/57"
                        className="text-md text-gray-800"
                      >
                        Brokoli Tozu
                      </Link>
                      <Link
                        href="/products/58"
                        className="text-md text-gray-800"
                      >
                        Maca Kökü Tozu
                      </Link>
                      <Link
                        href="/products/59"
                        className="text-md text-gray-800"
                      >
                        Spirulina Tozu
                      </Link>
                      <Link
                        href="/products/60"
                        className="text-md text-gray-800"
                      >
                        Ispanak Tozu
                      </Link>
                      <Link
                        href="/products/61"
                        className="text-md text-gray-800"
                      >
                        Maydanoz Tozu
                      </Link>

                      {/* Weight Loss Section */}
                      <Link
                        href={`/products/${CATEGORIES.HEALTH}`}
                        className="font-semibold text-xl"
                      >
                        Zayıflama
                      </Link>
                      <Link
                        href="/products/62"
                        className="text-md text-gray-800"
                      >
                        L-Carnitine
                      </Link>
                      <Link
                        href="/products/63"
                        className="text-md text-gray-800"
                      >
                        Thermo Burner
                      </Link>
                      <Link
                        href="/products/64"
                        className="text-md text-gray-800"
                      >
                        L-Carnitine Shot
                      </Link>
                      <Link
                        href="/products/65"
                        className="text-md text-gray-800"
                      >
                        CLA
                      </Link>
                      <Link
                        href="/products/66"
                        className="text-md text-gray-800"
                      >
                        Hunger Buster
                      </Link>
                      <Link
                        href="/products/67"
                        className="text-md text-gray-800"
                      >
                        CLA+
                      </Link>
                    </nav>
                  </div>

                  {/* FOOD PANEL */}
                  <div className="min-w-[20rem] sm:min-w-[24rem] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4 shrink-0">
                      <Button
                        variant="outline"
                        className="w-8 h-8"
                        onClick={() => setPanel("root")}
                        aria-label="Geri"
                      >
                        <ChevronLeftIcon className="w-4 h-4" />
                      </Button>
                      <h2 className="text-xl font-bold">
                        {CATEGORY_NAMES[CATEGORIES.FOOD]}
                      </h2>
                    </div>
                    <nav className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
                      <Link
                        href={`/products/${CATEGORIES.FOOD}`}
                        className="font-semibold text-xl"
                      >
                        Tüm {CATEGORY_NAMES[CATEGORIES.FOOD]} Ürünleri
                      </Link>

                      {/* Food Section */}
                      <Link
                        href="/products/68"
                        className="text-md text-gray-800"
                      >
                        Pirinç Kreması
                      </Link>
                      <Link
                        href="/products/69"
                        className="text-md text-gray-800"
                      >
                        Protein Bar
                      </Link>
                      <Link
                        href="/products/70"
                        className="text-md text-gray-800"
                      >
                        Fıstık Ezmeleri
                      </Link>
                      <Link
                        href="/products/71"
                        className="text-md text-gray-800"
                      >
                        Düşük Kalorili Soslar
                      </Link>
                      <Link
                        href="/products/72"
                        className="text-md text-gray-800"
                      >
                        Baharatlar
                      </Link>
                      <Link
                        href="/products/73"
                        className="text-md text-gray-800"
                      >
                        Tatlandırıcılar
                      </Link>
                      <Link
                        href="/products/74"
                        className="text-md text-gray-800"
                      >
                        Sprey Zeytinyağı
                      </Link>
                    </nav>
                  </div>

                  {/* VITAMIN PANEL */}
                  <div className="min-w-[20rem] sm:min-w-[24rem] p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4 shrink-0">
                      <Button
                        variant="outline"
                        className="w-8 h-8"
                        onClick={() => setPanel("root")}
                        aria-label="Geri"
                      >
                        <ChevronLeftIcon className="w-4 h-4" />
                      </Button>
                      <h2 className="text-xl font-bold">
                        {CATEGORY_NAMES[CATEGORIES.VITAMIN]}
                      </h2>
                    </div>
                    <nav className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        Tüm {CATEGORY_NAMES[CATEGORIES.VITAMIN]} Ürünleri
                      </Link>

                      {/* Special Formulas Section */}
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        Özel Formül Ürünler
                      </Link>
                      <Link
                        href="/products/75"
                        className="text-md text-gray-800"
                      >
                        Thermo Burner
                      </Link>
                      <Link
                        href="/products/76"
                        className="text-md text-gray-800"
                      >
                        LVR
                      </Link>
                      <Link
                        href="/products/77"
                        className="text-md text-gray-800"
                      >
                        KDNY
                      </Link>
                      <Link
                        href="/products/78"
                        className="text-md text-gray-800"
                      >
                        T-Prime
                      </Link>
                      <Link
                        href="/products/79"
                        className="text-md text-gray-800"
                      >
                        Hunger Buster
                      </Link>
                      <Link
                        href="/products/80"
                        className="text-md text-gray-800"
                      >
                        Beauty Formula
                      </Link>
                      <Link
                        href="/products/81"
                        className="text-md text-gray-800"
                      >
                        Relax
                      </Link>
                      <Link
                        href="/products/82"
                        className="text-md text-gray-800"
                      >
                        Focus Formula
                      </Link>
                      <Link
                        href="/products/83"
                        className="text-md text-gray-800"
                      >
                        Gamer Multivitamin
                      </Link>
                      <Link
                        href="/products/84"
                        className="text-md text-gray-800"
                      >
                        GDA
                      </Link>
                      <Link
                        href="/products/85"
                        className="text-md text-gray-800"
                      >
                        C-Blocker
                      </Link>
                      <Link
                        href="/products/86"
                        className="text-md text-gray-800"
                      >
                        Sleep Formula
                      </Link>

                      {/* Popular Formulas Section */}
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        Popüler Takviyeler
                      </Link>
                      <Link
                        href="/products/87"
                        className="text-md text-gray-800"
                      >
                        ZMA
                      </Link>
                      <Link
                        href="/products/88"
                        className="text-md text-gray-800"
                      >
                        Thermo Burner
                      </Link>
                      <Link
                        href="/products/89"
                        className="text-md text-gray-800"
                      >
                        Omega-3
                      </Link>
                      <Link
                        href="/products/90"
                        className="text-md text-gray-800"
                      >
                        Multivitamin
                      </Link>
                      <Link
                        href="/products/91"
                        className="text-md text-gray-800"
                      >
                        C Vitamini Efervesan
                      </Link>
                      <Link
                        href="/products/92"
                        className="text-md text-gray-800"
                      >
                        Kafein
                      </Link>
                      <Link
                        href="/products/93"
                        className="text-md text-gray-800"
                      >
                        Collagen + Hyluronic
                      </Link>
                      <Link
                        href="/products/94"
                        className="text-md text-gray-800"
                      >
                        Asit
                      </Link>
                      <Link
                        href="/products/95"
                        className="text-md text-gray-800"
                      >
                        Glikozamin Kondroitin
                      </Link>
                      <Link
                        href="/products/96"
                        className="text-md text-gray-800"
                      >
                        MSM
                      </Link>

                      {/* Vitamins Section */}
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        VİTAMİNLER
                      </Link>
                      <Link
                        href="/products/97"
                        className="text-md text-gray-800"
                      >
                        C Vitamini
                      </Link>
                      <Link
                        href="/products/98"
                        className="text-md text-gray-800"
                      >
                        B Vitamini
                      </Link>
                      <Link
                        href="/products/99"
                        className="text-md text-gray-800"
                      >
                        D Vitamini
                      </Link>
                      <Link
                        href="/products/100"
                        className="text-md text-gray-800"
                      >
                        K Vitamini
                      </Link>

                      {/* Minerals Section */}
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        MİNERALLER
                      </Link>
                      <Link
                        href="/products/101"
                        className="text-md text-gray-800"
                      >
                        Magnezyum
                      </Link>
                      <Link
                        href="/products/102"
                        className="text-md text-gray-800"
                      >
                        Demir
                      </Link>
                      <Link
                        href="/products/103"
                        className="text-md text-gray-800"
                      >
                        Krom
                      </Link>
                      <Link
                        href="/products/104"
                        className="text-md text-gray-800"
                      >
                        Selenyum
                      </Link>

                      {/* Botanical Supplements Section */}
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        BİTKİSEL ÜRÜNLER
                      </Link>
                      <Link
                        href="/products/105"
                        className="text-md text-gray-800"
                      >
                        Green Detox+
                      </Link>
                      <Link
                        href="/products/106"
                        className="text-md text-gray-800"
                      >
                        Milk Thistle
                      </Link>
                      <Link
                        href="/products/107"
                        className="text-md text-gray-800"
                      >
                        Tribulus Terrestris
                      </Link>
                      <Link
                        href="/products/108"
                        className="text-md text-gray-800"
                      >
                        Saw Palmetto
                      </Link>
                      <Link
                        href="/products/109"
                        className="text-md text-gray-800"
                      >
                        L-Theanine
                      </Link>
                      <Link
                        href="/products/110"
                        className="text-md text-gray-800"
                      >
                        Panax Ginseng
                      </Link>
                      <Link
                        href="/products/111"
                        className="text-md text-gray-800"
                      >
                        5-HTP
                      </Link>
                      <Link
                        href="/products/112"
                        className="text-md text-gray-800"
                      >
                        L-Tyrosine
                      </Link>
                      <Link
                        href="/products/113"
                        className="text-md text-gray-800"
                      >
                        Rhodiola Rosea
                      </Link>
                      <Link
                        href="/products/114"
                        className="text-md text-gray-800"
                      >
                        Ginkgo Biloba
                      </Link>
                      <Link
                        href="/products/115"
                        className="text-md text-gray-800"
                      >
                        Beta Glukan
                      </Link>

                      {/* Other Supplements Section */}
                      <Link
                        href={`/products/${CATEGORIES.VITAMIN}`}
                        className="font-semibold text-xl"
                      >
                        DİĞER ÜRÜNLER
                      </Link>
                      <Link
                        href="/products/116"
                        className="text-md text-gray-800"
                      >
                        CLA
                      </Link>
                      <Link
                        href="/products/117"
                        className="text-md text-gray-800"
                      >
                        Bromelain
                      </Link>
                      <Link
                        href="/products/118"
                        className="text-md text-gray-800"
                      >
                        Koenzim Q10
                      </Link>
                      <Link
                        href="/products/119"
                        className="text-md text-gray-800"
                      >
                        Alpha GPC
                      </Link>
                      <Link
                        href="/products/120"
                        className="text-md text-gray-800"
                      >
                        Glutatyon
                      </Link>
                      <Link
                        href="/products/121"
                        className="text-md text-gray-800"
                      >
                        NMN
                      </Link>
                      <Link
                        href="/products/122"
                        className="text-md text-gray-800"
                      >
                        Hyaluronik Asit
                      </Link>
                      <Link
                        href="/products/123"
                        className="text-md text-gray-800"
                      >
                        Laktoz
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
            <SheetTrigger asChild>
              <button className="relative inline-flex items-center justify-center cursor-pointer">
                <ShoppingCartIcon className="w-7 h-7" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center text-xs font-semibold"
                >
                  0
                </Badge>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 sm:w-96 p-0 flex flex-col h-screen"
            >
              <div className="flex flex-col h-full">
                <SheetHeader className="p-4 shrink-0">
                  <SheetTitle className="text-2xl text-center font-bold">
                    Sepetim
                  </SheetTitle>
                  <SheetDescription className="text-center">
                    Sepetinizdeki ürünleri görüntüleyebilirsiniz.
                  </SheetDescription>
                </SheetHeader>

                {/* Cart Content */}
                <div className="flex-1 py-6 px-4 overflow-y-auto">
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCartIcon className="w-16 h-16 text-gray-500 mb-4" />
                    <p className="text-gray-500 text-lg">
                      Sepetinizde ürün bulunmamaktadır.
                    </p>
                  </div>
                </div>

                {/* Cart Footer */}
                <SheetFooter className="flex-col gap-2 p-4 shrink-0">
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      className="w-full border-gray-500 text-gray-600 hover:bg-gray-50 hover:text-gray-600 cursor-pointer"
                    >
                      Alışverişe Devam Et
                    </Button>
                  </SheetClose>
                  <Button className="w-full bg-gray-500 text-white hover:bg-gray-600 cursor-pointer">
                    Sepete Git
                  </Button>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Mobile Search Bar Section */}
      <div className="px-4 py-2">
        <InputGroup className="bg-gray-100">
          <InputGroupInput
            placeholder="Aradığınız ürünü yazınız."
            className="placeholder:text-black"
          />
          <InputGroupAddon>
            <SearchIcon className="text-black" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end" className="text-black">
            12 sonuç
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
};

export default NavbarMobile;
