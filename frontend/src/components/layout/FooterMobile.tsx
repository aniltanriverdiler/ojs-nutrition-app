import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { getAllCategories } from "@/lib/api/categories";
import { toTitleCase } from "@/lib/utils/text";

const FooterMobile = async () => {
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
    <footer className="relative bg-[#222222] text-gray-300 text-center py-7">
      {/* Mobile Footer Description */}
      <div className="grid grid-flow-col grid-rows-2 gap-4">
        {/* Rating and Text Section */}
        <div className="flex flex-col gap-3 ml-7">
          {/* Rating Section */}
          <div className="flex flex-row gap-1 items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/icons/star-sharp-svg.svg"
                alt="Star"
                width={30}
                height={30}
              />
            ))}
            <p className="text-white text-4xl">(475.000+)</p>
          </div>
          <div className="flex flex-col items-start space-y-1 text-white text-3xl font-bold">
            <p>LABORATUVAR TESTLİ ÜRÜNLER</p>
            <p>AYNI GÜN & ÜCRETSİZ KARGO</p>
            <p>MEMNUNİYET GARANTİSİ</p>
          </div>
        </div>
        <p className="self-start text-white text-start text-lg font-semibold pt-3 ml-7 mr-15">
          475.000&apos;den fazla ürün yorumumuza dayanarak, ürünlerimizi
          seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan, ürün
          koşullarına göre en uygun çözümü sunmaya hazırız.
        </p>
      </div>

      {/* Footer Accordion Menu Section */}
      <div className="ml-7">
        <Accordion type="single" collapsible>
          {/* Contact Section */}
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="mr-90 sm:mr-96 sm:pr-10 text-xl font-bold text-white items-center [&>svg]:text-white [&>svg]:size-5 [&>svg]:translate-y-0 ">
              OJS NUTRITION
            </AccordionTrigger>
            <AccordionContent>
              <nav
                className="flex flex-col items-start space-y-2 text-[#999999]"
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
            </AccordionContent>
          </AccordionItem>

          {/* Categories Section */}
          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="mr-90 sm:mr-96 sm:pr-12 text-xl font-bold text-white items-center [&>svg]:text-white [&>svg]:size-5 [&>svg]:translate-y-0 ">
              KATEGORİLER
            </AccordionTrigger>
            <AccordionContent>
              <nav
                className="flex flex-col items-start space-y-2 text-[#999999]"
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
                  className="font-medium hover:text-white transition-colors"
                >
                  Lansmana Özel Fırsatlar
                </Link>
              </nav>
            </AccordionContent>
          </AccordionItem>

          {/* Popular Products Section */}
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="mr-80 sm:mr-96 text-xl font-bold text-white items-center [&>svg]:text-white [&>svg]:size-5 [&>svg]:translate-y-0 ">
              POPÜLER ÜRÜNLER
            </AccordionTrigger>
            <AccordionContent>
              <nav
                className="flex flex-col items-start space-y-2 text-[#999999]"
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p className="text-[#999999] text-sm text-start ml-7 mt-10">
          Copyright © {new Date().getFullYear()} - Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default FooterMobile;
