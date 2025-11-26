import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAllCategories } from "@/lib/api/categories";
import { toTitleCase } from "@/lib/utils/text";

const Footer = async () => {
  // Fetch categories from API
  let categories = [];
  try {
    const data = await getAllCategories();
    categories = Array.isArray(data)
      ? data.sort((a, b) => a.order - b.order)
      : [];
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  // Get popular products from all categories' top sellers
  const popularProducts = categories
    .flatMap((cat) => cat.top_sellers || [])
    .slice(0, 9); // Limit to 9 products

  return (
    <footer className="hidden md:block relative bg-[#222222] text-gray-300 text-center">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start py-10 xl:max-w-6xl 2xl:max-w-7xl xl:mx-auto xl:px-0">
        {/* Rating and Text Section */}
        <div className="col-span-1 flex flex-col gap-3 justify-center items-center xl:items-start">
          {/* Rating Section */}
          <div className="flex flex-row gap-1 items-center lg:mr-12 md:mr-5 xl:mr-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/icons/star-sharp-svg.svg"
                alt="Star"
                width={24}
                height={24}
              />
            ))}
            <p className="text-white text-xl">(475.000+)</p>
          </div>
          <div className="flex flex-col items-start space-y-1 text-white lg:text-xl xl:text-3xl font-bold mr-5 sm:ml-9 md:mr-20 lg:ml-14 xl:ml-0">
            <p>Laboratuvar Testli Ürünler</p>
            <p>Aynı Gün & Ücretsiz Kargo</p>
            <p>Memnuniyet Garantisi</p>
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
          <Link href="/" className="mb-4" aria-label="Ana Sayfa">
            <Image
              src="/icons/logo-white-svg.svg"
              alt="OJS Nutrition Logo"
              width={132}
              height={30}
              priority
            />
          </Link>
          <nav
            className="flex flex-col items-start ml-12 space-y-2 text-[#999999]"
            aria-label="Kurumsal Linkler"
          >
            <Link href="/contact" className="font-medium hover:text-white">
              İletişim
            </Link>
            <Link href="/about" className="font-medium hover:text-white">
              Hakkımızda
            </Link>
            <Link href="/faq" className="font-medium hover:text-white">
              Sıkça Sorulan Sorular
            </Link>
            <Link href="/kvkk" className="font-medium hover:text-white">
              Kvkk
            </Link>
            <Link
              href="/working-principles"
              className="font-medium hover:text-white"
            >
              Çalışma İlkelerimiz
            </Link>
            <Link
              href="/sales-agreement"
              className="font-medium hover:text-white"
            >
              Satış Sözleşmesi
            </Link>
            <Link
              href="/return-policy"
              className="font-medium hover:text-white"
            >
              Garanti ve İade Koşulları
            </Link>
            <Link href="/reviews" className="font-medium hover:text-white">
              Gerçek Müşteri Yorumları
            </Link>
            <Link href="/blog" className="font-medium hover:text-white">
              Blog
            </Link>
          </nav>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col gap-3 justify-center items-center pr-10">
          <Link
            href="/products"
            className="text-xl font-bold text-white mr-5 hover:underline"
          >
            Kategoriler
          </Link>
          <nav
            className="flex flex-col items-start ml-12 space-y-2 text-[#999999]"
            aria-label="Kategori Linkleri"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="font-medium hover:text-white transition-colors"
              >
                {toTitleCase(category.name)}
              </Link>
            ))}
            <Link
              href="/products"
              className="font-medium hover:text-white transition-colors"
            >
              Tüm Ürünler
            </Link>
            <Link
              href="/packages"
              className="font-medium hover:text-white transition-colors"
            >
              Paketler
            </Link>
            <Link
              href="/special-offers"
              className="font-medium hover:text-white transition-colors sm:text-start"
            >
              Lansmana Özel Fırsatlar
            </Link>
          </nav>
        </div>

        {/* Popular Products Section */}
        <div className="flex flex-col gap-3 justify-center items-center pr-10">
          <Link
            href="/products"
            className="text-xl font-bold text-white hover:underline mr-5"
          >
            Popüler Ürünler
          </Link>
          <nav
            className="flex flex-col items-start mr-2 space-y-2 text-[#999999]"
            aria-label="Popüler Ürünler"
          >
            {popularProducts.length > 0 ? (
              popularProducts.map((product, index) => (
                <Link
                  key={`${product.slug}-${index}`}
                  href={`/products/${product.slug}`}
                  className="font-medium hover:text-white transition-colors"
                >
                  {toTitleCase(product.name)}
                </Link>
              ))
            ) : (
              // Fallback popular products if API fails
              <>
                <Link
                  href="/products/whey-protein"
                  className="font-medium hover:text-white"
                >
                  Whey Protein
                </Link>
                <Link
                  href="/products/cream-of-rice"
                  className="font-medium hover:text-white"
                >
                  Cream of Rice
                </Link>
                <Link
                  href="/products/creatine"
                  className="font-medium hover:text-white"
                >
                  Creatine
                </Link>
                <Link
                  href="/products/bcaa-411"
                  className="font-medium hover:text-white"
                >
                  BCAA+
                </Link>
                <Link
                  href="/products/pre-workout"
                  className="font-medium hover:text-white"
                >
                  Pre-Workout
                </Link>
                <Link
                  href="/products/collagen"
                  className="font-medium hover:text-white"
                >
                  Collagen
                </Link>
                <Link
                  href="/products/zma"
                  className="font-medium hover:text-white"
                >
                  ZMA
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
      <div>
        <p className="text-[#999999] text-sm text-start ml-15 lg:ml-25 xl:ml-16 2xl:ml-54 pb-8">
          Copyright © {new Date().getFullYear()} - Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
