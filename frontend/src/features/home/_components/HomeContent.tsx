import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CATEGORIES } from "@/lib/constants/categories";

const HomeContent = () => {
  return (
    <>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 mx-auto py-5 sm:py-6 md:py-6 lg:py-8 px-3 sm:px-4 md:px-4 lg:px-6 xl:px-8 2xl:px-0 max-w-7xl">
        {/* Category Cards Section */}
        {/* Protein Section */}
        <Link href={`/products/${CATEGORIES.PROTEIN}`} className="w-full">
          <div className="flex flex-row bg-[#7EA0A2] w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto">
              <Image
                src="/images/protein-card-v2.png"
                alt="Protein"
                width={162}
                height={162}
                className="rounded-l-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
              <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
                PROTEİN
              </h3>
              <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
                İNCELE
              </Button>
            </div>
          </div>
        </Link>

        {/* Vitamin Section */}
        <Link href={`/products/${CATEGORIES.VITAMIN}`} className="w-full">
          <div className="flex flex-row bg-[#FDE8D7] w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto">
              <Image
                src="/images/vitamins-card-v2.png"
                alt="Vitamins"
                width={162}
                height={162}
                className="rounded-l-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
              <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
                VİTAMİN
              </h3>
              <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
                İNCELE
              </Button>
            </div>
          </div>
        </Link>

        {/* Health & Wellness Section */}
        <Link href={`/products/${CATEGORIES.HEALTH}`} className="w-full">
          <div className="flex flex-row bg-[#CCCBC6] w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto">
              <Image
                src="/images/health-card-v2.png"
                alt="Health"
                width={162}
                height={162}
                className="rounded-l-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
              <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
                SAĞLIK
              </h3>
              <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
                İNCELE
              </Button>
            </div>
          </div>
        </Link>

        {/* Sports Nutrition Food Section */}
        <Link
          href={`/products/${CATEGORIES.SPORTS_NUTRITION}`}
          className="w-full"
        >
          <div className="flex flex-row bg-[#D9D8D3] w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto">
              <Image
                src="/images/sport-card-v2.png"
                alt="Sports Nutrition"
                width={162}
                height={162}
                className="rounded-l-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
              <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
                SPOR GIDALARI
              </h3>
              <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
                İNCELE
              </Button>
            </div>
          </div>
        </Link>

        {/* Food Section */}
        <Link href={`/products/${CATEGORIES.FOOD}`} className="w-full">
          <div className="flex flex-row bg-[#72B4CE] w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto">
              <Image
                src="/images/food-card-v2.png"
                alt="Food"
                width={162}
                height={162}
                className="rounded-l-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
              <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
                GIDA
              </h3>
              <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
                İNCELE
              </Button>
            </div>
          </div>
        </Link>

        {/* All Products Section */}
        <Link href="/products" className="w-full">
          <div className="flex flex-row rounded-xl bg-[#A8D5E8] w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto 2xl:pl-3">
              <Image
                src="/images/amino-package.png"
                alt="All Products"
                width={162}
                height={162}
                className="rounded-l-xl object-cover h-full w-full pt-1 sm:pt-0 md:pt-2 lg:pt-6 xl:pt-0"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
              <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
                TÜM ÜRÜNLER
              </h3>
              <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
                İNCELE
              </Button>
            </div>
          </div>
        </Link>
      </div>

      {/* Best Sellers Section */}
      <h3 className="text-2xl font-bold text-center mb-3">ÇOK SATANLAR</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 my-10 mx-auto max-w-7xl">
        {/* Whey Protein Section */}
        <div className="flex flex-col items-center lg:justify-center">
          <Link
            href="/products/whey-protein"
            className="flex flex-col sm:gap-1 items-center"
          >
            <Image
              src="/images/5-htp.png"
              alt="All Products"
              width={168}
              height={168}
              className="justify-self-center"
            />
            <p className="text-lg font-bold text-center text-gray-800">
              WHEY PROTEİN
            </p>
            <p className="font-semibold text-center text-gray-400 text-sm">
              EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-center font-semibold text-gray-700 mt-2">
              10869 Yorum
            </p>
            <p className="text-center text-xl font-bold text-gray-800">
              549 TL
            </p>
          </Link>
        </div>

        {/* Fitness Package Section */}
        <div className="flex flex-col items-center lg:justify-center">
          <Link href="/products/creatine" className="flex flex-col gap-1 items-center">
            <div className="relative justify-self-center">
              <Image
                src="/images/b-capsule.png"
                alt="All Products"
                width={168}
                height={168}
                className=""
              />
              <Badge className="absolute -top-6 -right-4 bg-red-500 text-white hover:bg-red-600 font-bold w-16 h-16 rounded-none flex flex-col items-center justify-center">
                <span className="text-xl leading-none">%29</span>
                <span className="text-xs font-medium leading-none uppercase">
                  İNDİRİM
                </span>
              </Badge>
            </div>
            <p className="text-lg font-bold text-center text-gray-800">
              FITNESS PAKETİ
            </p>
            <p className="font-semibold text-center text-gray-400 text-sm">
              EN POPÜLER ÜRÜNLER BİR ARADA
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-center font-semibold text-gray-700 mt-2">
              76560 Yorum
            </p>
            <div className="flex flex-row items-center justify-center gap-2">
              <p className="text-center text-xl font-bold text-gray-800">
                799 TL
              </p>
              <p className="text-center font-bold text-red-500 line-through">
                1499 TL
              </p>
            </div>
          </Link>
        </div>

        {/* Vitamins Package Section */}
        <div className="flex flex-col items-center justify-center xl:mt-1">
          <Link href="/products/bcaa-411" className="flex flex-col gap-1 items-center">
            <div className="relative justify-self-center">
              <Image
                src="/images/betaine.png"
                alt="All Products"
                width={168}
                height={168}
                className=""
              />
              <Badge className="absolute -top-6 -right-4 bg-red-500 text-white hover:bg-red-600 font-bold w-16 h-16 rounded-none flex flex-col items-center justify-center">
                <span className="text-xl leading-none">%23</span>
                <span className="text-xs font-medium leading-none uppercase">
                  İNDİRİM
                </span>
              </Badge>
            </div>
            <p className="text-lg font-bold text-center text-gray-800">
              GÜNLÜK VİTAMİN PAKETİ
            </p>
            <p className="font-semibold text-center text-gray-400 text-sm">
              EN SIK TÜKETİLEN TAKVİYELER
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-center font-semibold text-gray-700">
              5013 Yorum
            </p>
            <div className="flex flex-row items-center justify-center gap-2">
              <p className="text-center text-xl font-bold text-gray-800">
                549 TL
              </p>
              <p className="text-center font-bold text-red-500 line-through">
                717 TL
              </p>
            </div>
          </Link>
        </div>

        {/* Pre Workout Supreme Section */}
        <div className="flex flex-col items-center lg:justify-center">
          <Link href="/products/bcaa-411" className="flex flex-col items-center">
            <Image
              src="/images/bcaa.png"
              alt="All Products"
              width={168}
              height={168}
              className="justify-self-center"
            />
            <p className="text-lg font-bold text-center text-gray-800">
              PRE-WORKOUT <span className="hidden md:block">SUPREME</span>
            </p>
            <p className="font-semibold text-center text-gray-400 text-sm">
              ANTRENMAN ÖNCESİ TAKVİYESİ
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-center font-semibold text-gray-700">
              6738 Yorum
            </p>
            <p className="text-center text-xl font-bold text-gray-800">
              399 TL
            </p>
          </Link>
        </div>

        {/* Cream of Rice Section */}
        <div className="flex flex-col items-center 2xl:justify-center">
          <Link
            href="/products/l-carnitine"
            className="flex flex-col gap-1 lg:gap-1.5 xl:gap-2.5 items-center"
          >
            <Image
              src="/images/green-detox.png"
              alt="All Products"
              width={168}
              height={168}
              className="justify-self-center"
            />
            <p className="text-lg font-bold text-center text-gray-800">
              CREAM OF RICE
            </p>
            <p className="font-semibold text-center text-gray-400 text-sm">
              EN LEZZETLİ PİRİNÇ KREMASI
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-center font-semibold text-gray-700">
              5216 Yorum
            </p>
            <p className="text-center text-xl font-bold text-gray-800">
              239 TL
            </p>
          </Link>
        </div>

        {/* Creatine Section */}
        <div className="flex flex-col items-center 2xl:justify-center">
          <Link
            href="/products/glutamine"
            className="flex flex-col gap-1 sm:gap-0 md:gap-1 lg:gap-1.5 xl:gap-1.5 items-center"
          >
            <Image
              src="/images/c-complex.png"
              alt="All Products"
              width={168}
              height={168}
              className="justify-self-center"
            />
            <p className="text-lg font-bold text-center text-gray-800">
              CREATINE
            </p>
            <p className="font-semibold text-center text-gray-400 text-sm">
              EN POPÜLER SPORCU TAKVİYESİ
            </p>
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/star-v2.svg"
                alt="Star"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm text-center font-semibold text-gray-700">
              8558 Yorum
            </p>
            <p className="text-center text-xl font-bold text-gray-800">
              239 TL
            </p>
          </Link>
        </div>
      </div>

      {/* Home Content Motivation Banner Section */}
      <div className="my-8">
        <div className="relative overflow-hidden">
          <Image
            src="/images/motivation-banner.png"
            alt="Kampanya Banner"
            width={1920}
            height={480}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
