import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="hidden md:block relative bg-[#222222] text-gray-300 text-center">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start py-10 xl:max-w-6xl 2xl:max-w-7xl xl:mx-auto xl:px-0">
        {/* Rating and Text Section */}
        <div className="col-span-1 flex flex-col gap-3 justify-center items-center xl:items-start">
          {/* Rating Section */}
          <div className="flex flex-row gap-1 items-center lg:mr-12 md:mr-5 xl:mr-0">
            <Image
              src="/icons/star-sharp-svg.svg"
              alt="Star"
              width={24}
              height={24}
            />
            <Image
              src="/icons/star-sharp-svg.svg"
              alt="Star"
              width={24}
              height={24}
            />
            <Image
              src="/icons/star-sharp-svg.svg"
              alt="Star"
              width={24}
              height={24}
            />
            <Image
              src="/icons/star-sharp-svg.svg"
              alt="Star"
              width={24}
              height={24}
            />
            <Image
              src="/icons/star-sharp-svg.svg"
              alt="Star"
              width={24}
              height={24}
            />
            <p className="text-white text-xl">(475.000+)</p>
          </div>
          <div className="flex flex-col items-start space-y-1 text-white lg:text-xl xl:text-3xl font-bold mr-5 sm:ml-9 md:mr-10 lg:ml-14 xl:ml-0">
            <p>LABORATUVAR TESTLİ ÜRÜNLER</p>
            <p>AYNI GÜN & ÜCRETSİZ KARGO</p>
            <p>MEMNUNİYET GARANTİSİ</p>
          </div>
        </div>
        <p className="col-span-1 self-start text-white text-start sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px] font-semibold mt-1 lg:mt-4 xl:mt-8 2xl:mt-10 mr-14 md:mr-10 lg:mr-18 xl:mr-0 2xl:mr-10">
          475.000&apos;den fazla ürün yorumumuza dayanarak, ürünlerimizi
          seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan, ürün
          koşullarına göre en uygun çözümü sunmaya hazırız.
        </p>
      </div>

      <div className="grid grid-cols-3 xl:gap-46 2xl:gap-0 py-10">
        {/* OJS Nutrition Contact Section */}
        <div className="flex flex-col gap-3 xl:mr-10 2xl:mr-0 justify-center items-center">
          <Link href="/" className="mb-4">
            <Image
              src="/icons/logo-white-svg.svg"
              alt="OJS Nutrition Logo"
              width={132}
              height={30}
              priority
            />
          </Link>
          <div className="flex flex-col items-start ml-12 space-y-2 text-[#999999]">
            <Link href="/" className="font-medium">
              İletişim
            </Link>
            <Link href="/" className="font-medium">
              Hakkımızda
            </Link>
            <Link href="/" className="font-medium">
              Sıkça Sorulan Sorular
            </Link>
            <Link href="/" className="font-medium">
              KVKK
            </Link>
            <Link href="/" className="font-medium">
              Çalışma İlkelerimiz
            </Link>
            <Link href="/" className="font-medium">
              Satış Sözleşmesi
            </Link>
            <Link href="/" className="font-medium">
              Garanti ve İade Koşulları
            </Link>
            <Link href="/" className="font-medium">
              Gerçek Müşteri Yorumları
            </Link>
            <Link href="/" className="font-medium">
              Blog
            </Link>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col gap-3 justify-center items-center pr-10">
          <Link href="/" className="text-xl font-bold text-white mr-5">
            Kategoriler
          </Link>
          <div className="flex flex-col items-start ml-12 space-y-2 text-[#999999]">
            <Link href="/" className="font-medium">
              Protein
            </Link>
            <Link href="/" className="font-medium">
              Spor Gıdaları
            </Link>
            <Link href="/" className="font-medium">
              Sağlık
            </Link>
            <Link href="/" className="font-medium">
              Gıda
            </Link>
            <Link href="/" className="font-medium">
              Vitamin
            </Link>
            <Link href="/" className="font-medium">
              Aksesuar
            </Link>
            <Link href="/" className="font-medium">
              Tüm Ürünler
            </Link>
            <Link href="/" className="font-medium">
              Paketler
            </Link>
            <Link href="/" className="font-medium sm:text-start">
              Lansmana Özel Fırsatlar
            </Link>
          </div>
        </div>

        {/* Popular Products Section */}
        <div className="flex flex-col gap-3 justify-center items-center pr-10">
          <Link href="/" className="text-xl font-bold text-white mr-5">
            Popüler Ürünler
          </Link>
          <div className="flex flex-col items-start mr-2 space-y-2 text-[#999999]">
            <Link href="/" className="font-medium">
              Whey Protein
            </Link>
            <Link href="/" className="font-medium">
              Cream of Rice
            </Link>
            <Link href="/" className="font-medium">
              Creatine
            </Link>
            <Link href="/" className="font-medium">
              BCAA+
            </Link>
            <Link href="/" className="font-medium">
              Pre-Workout
            </Link>
            <Link href="/" className="font-medium">
              Fitness Paketi
            </Link>
            <Link href="/" className="font-medium">
              Collagen
            </Link>
            <Link href="/" className="font-medium">
              Günlük Vitamin Paketi
            </Link>
            <Link href="/" className="font-medium">
              ZMA
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#999999] text-sm text-start ml-15 lg:ml-25 xl:ml-16 2xl:ml-54 pb-8">
          Copyright © - Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
