import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FooterMobile = () => {
  return (
    <footer className="relative bg-[#222222] text-gray-300 text-center py-7">
      {/* Mobile Footer Description */}
      <div className="grid grid-flow-col grid-rows-2 gap-4">
        {/* Rating and Text Section */}
        <div className="flex flex-col gap-3 ml-7">
          {/* Rating Section */}
          <div className="flex flex-row gap-1 items-center">
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
          <div className="flex flex-col items-start space-y-1 text-white text-xl font-bold">
            <p>LABORATUVAR TESTLİ ÜRÜNLER</p>
            <p>AYNI GÜN & ÜCRETSİZ KARGO</p>
            <p>MEMNUNİYET GARANTİSİ</p>
          </div>
        </div>
        <p className="self-start text-white text-start font-semibold pt-3 ml-7 mr-15">
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
              <div className="flex flex-col items-start space-y-2 text-[#999999]">
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
            </AccordionContent>
          </AccordionItem>
          {/* Categories Section */}
          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="mr-90 sm:mr-96 sm:pr-12 text-xl font-bold text-white items-center [&>svg]:text-white [&>svg]:size-5 [&>svg]:translate-y-0 ">
              KATEGORİLER
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start space-y-2 text-[#999999]">
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
            </AccordionContent>
          </AccordionItem>
          {/* Popular Products Section */}
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="mr-80 sm:mr-96 text-xl font-bold text-white items-center [&>svg]:text-white [&>svg]:size-5 [&>svg]:translate-y-0 ">
              POPÜLER ÜRÜNLER
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start space-y-2 text-[#999999]">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p className="text-[#999999] text-sm text-start ml-7 mt-10">
          Copyright © - Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default FooterMobile;
