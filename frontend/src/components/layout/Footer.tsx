import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#222222] text-gray-300 text-center">
      <div className="grid grid-cols-2 py-10">
        {/* Rating and Text Section */}
        <div className="flex flex-col gap-3 justify-center items-center">
          {/* Rating Section */}
          <div className="flex flex-row gap-1 items-center mr-48">
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
          <div className="flex flex-col items-start space-y-1 text-white text-3xl font-bold ml-10">
            <p>LABORATUVAR TESTLİ ÜRÜNLER</p>
            <p>AYNI GÜN & ÜCRETSİZ KARGO</p>
            <p>MEMNUNİYET GARANTİSİ</p>
          </div>
        </div>
        <p className="text-white text-xl font-semibold text-start mt-10 mr-68">
          475.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi seveceğinize
          eminiz. Eğer herhangi bir sebeple memnun kalmazsan, ürün koşullarına
          göre en uygun çözümü sunmaya hazırız.
        </p>
      </div>

      <div className="grid grid-cols-3 py-10">
        {/* OJS Nutrition Contact Section */}
        <div className="flex flex-col gap-3 justify-center items-center">
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
            <Link href="/" className="font-medium">
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
        <p className="text-[#999999] text-sm text-start ml-54 mb-8">Copyright © - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
