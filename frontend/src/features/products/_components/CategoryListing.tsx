"use client";
import React, { useState } from "react";
import {
  CATEGORY_NAMES,
  CATEGORY_DESCRIPTIONS,
  CATEGORIES,
} from "@/lib/constants/categories";
import { getCategoryBySlug } from "@/lib/dummy/categories";
import { getProductsByCategoryId } from "@/lib/dummy/products";
import ProductCard from "@/components/shared/ProductCard";
import { toTurkishUpperCase } from "@/lib/utils/text";
import { Button } from "@/components/ui/button";

interface CategoryListingProps {
  slug: keyof typeof CATEGORY_NAMES;
}

const CategoryListing = ({ slug }: CategoryListingProps) => {
  const [showMore, setShowMore] = useState(false);
  const title = CATEGORY_NAMES[slug];
  const desc = CATEGORY_DESCRIPTIONS[slug];

  // Find the category id
  const category = getCategoryBySlug(slug);
  const categoryId = category?.id;

  // Check if this is the protein category page
  const isProteinPage = slug === CATEGORIES.PROTEIN;

  // Protein category information text
  const proteinInfoShort = `Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık zincirini içeren büyük biyomoleküller ve makromoleküler olarak tanımlanır. Hayvansal ve bitkisel protein olarak farklı unsurlardan temin edilebileceği gibi takviye ediciler ile de protein ihtiyacının mutlaka karşılanması gereklidir. Özellikle spor yapanların çok daha fazla ihtiyaç duyduğu protein, bilhassa vücut gelişimi için sporcuların ihtiyaç duyduğu en önemli maddeler arasında yer almaktadır.`;

  const proteinInfoLong = `Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık zincirini içeren büyük biyomoleküller ve makromoleküler olarak tanımlanır. Hayvansal ve bitkisel protein olarak farklı unsurlardan temin edilebileceği gibi takviye ediciler ile de protein ihtiyacının mutlaka karşılanması gereklidir. Özellikle spor yapanların çok daha fazla ihtiyaç duyduğu protein, bilhassa vücut gelişimi için sporcuların ihtiyaç duyduğu en önemli maddeler arasında yer almaktadır.

Vücudun yapı taşlarından biri olan protein, hücrelerin oluşmasını ve büyümesini sağlamasıdır. Kaslar için de hayati öneme sahip olmasıyla sporcular tarafından yaygın olarak kullanılan ürünler arasından protein tozu ilk sırada yer almıştır. Sporcuların yoğun proteine ihtiyaç duymalarında temel neden ise buna bağlanabilir. En iyi protein tozu ile sporcuların çok daha sağlıklı ve hızlı şekilde hedefledikleri şekilde gelişmeleri desteklenmektedir. Özellikle vücut geliştirme alanında faaliyet gösteren sporcular için protein tozu ve buna benzer takviye edici unsurlara ihtiyaç duyulmaktadır.

Sporcuların yeterli düzeyde protein almalarını sağlayan ve sağlıklı bir şekilde gelişimlerinin desteklenmesini sağlayan bir besin takviyesi olan protein tozu, birçok farklı içerik ve özellikle günümüzde üretilebilmektedir. Bu ürün çeşitliliği sayesinde birçok alternatifi tercih edebilirsiniz. Protein tozu fiyatları doğrudan ürünlerin sahip olduğu bu özelliklere ve çeşitlerine göre değişmektedir. 

Protein Tozu Çeşitleri Nelerdir?

Whey Protein Tozu

Bezelye Protein Tozu

İzole Protein Tozu

Soya Vegan Protein Tozu

Protein çeşitleri bu kapsamda temel yapısına göre belirlenebilir. Büyüme ve gelişmenin sağlanması açısından hücresel yapıların oluşumunda önemli rol oynayan protein tozu, vücut için aynı zamanda bir enerji kaynağıdır. Vegan protein tozu (soya), süt protein tozu, yumurta protein tozu, bezelye protein tozu, Whey protein tozu gibi birçok farklı ürün sahip olduğu içeriğine göre değerlendirilebilir. Bu protein tozları arasından tercihlerinize göre dilediğinizi seçerek spor faaliyetlerinin çok daha etkili gerçekleştirilmesini sağlayabilirsiniz.

Protein Tozu Nasıl Kullanılır?

Günlük protein ihtiyacı vücut ağırlığına göre belirlenmektedir. Bu oran yaklaşık vücut ağırlığının kilogram başına 1 gr protein olarak belirlenmiştir. Protein tozunu etkili biçimde kullanmak için mutlaka kullanım önerilerine dikkat edilmesi gerekir. Aşırı protein tozu kullanımı ciddi sağlık sorunlarına yol açabileceği için bilinçsiz bir şekilde kullanılmasından kaçınmanız önerilir.

Protein tozu yapılan antrenmandan sonra tüketilir. Bunun temel nedeni spor sonrasında vücudun katabolizma evresinde, yani yıkım durumunda olmasıdır. Kasların yorgun olması nedeniyle acilen onarıma ihtiyaç duyacaktır. Bu onarım için proteinlerin mutlaka alınması gerekir. Protein tozu kullanarak bu sürecin daha kısa sürede gerçekleşmesi ve vücudun desteklenmesi sağlanmaktadır.  

Protein Tozu Ne Zaman İçilir? 

Protein tozu spordan hemen sonra içilmelidir. Protein, yüksek miktarda dallı zincirli amino asit içermektedir. Bu unsurlar kas glikojen depolarının korunmasını sağlamaktadır. Antrenman performansını artırması açısından da önemlidir. Tüketiminin doğru miktarda ve doğru zamanda yapılması son derece önemlidir. Vücudun normalden fazla proteine sahip olması en az protein eksikliği kadar ciddi sonuçlara neden olacaktır.

Vücut geliştirme protein tozu kullanımının en yaygın olduğu alanlardan biridir. Bu nedenle antrenmandan hemen sonra alınması gereken protein tozu, spordan hemen sonraki 30 – 60 dakikalık aralıklardan faydalanmalıdır.  

Protein Tozu İçindekileri ve İçeriği 

Protein tozlarının içeriği tamamen doğal ürünler ile desteklenmektedir. Birçok farklı çeşidi bulunan protein tozunun içeriğinde peynir altı suyu, yumurta, soya ve daha birçok farklı hayvansal veya bitkisel bazlı protein seçenekleri yer almaktadır. Her protein tozu ürünün içeriği farklıdır. Peynir altı suyu proteini (whey) tozu kapsamında örnek besin içeriği; whey protein konsantresi (süt), aroma verici, sukraloz, pancar kökü kırmızısı, sindirim enzimi karışımları, pridoksin HCL gibi unsurlar yer almaktadır. Marka ve tercih edilecek protein türüne göre içindekiler değişecektir. Whey protein tozu günümüzde en yayın tercih edilen türler arasında yer almaktadır. Buna ek olarak her birinin içeriği de değişmektedir.`;

  //If the category is not found, return an empty state
  if (!categoryId) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 text-lg">{desc}</p>
        </div>
        <div className="text-gray-500">Bu kategori bulunamadı.</div>
      </div>
    );
  }

  // Get the products by category id
  const productDetails = getProductsByCategoryId(categoryId);

  // Normalize the product details for ProductCard
  const products = productDetails.map((p) => {
    const firstVariant = p.variants?.[0];
    const price = firstVariant?.price?.total_price ?? 0;
    const discountedPrice = firstVariant?.price?.discounted_price ?? null;
    const hasDiscount = Boolean(discountedPrice);

    return {
      href: `/products/${p.slug || p.id}`,
      imageSrc: "/images/5-htp.png", // for now, we are using a default image
      name: p.name,
      description: p.short_explanation || "",
      price: discountedPrice ?? price,
      previousPrice: hasDiscount ? price : undefined,
      commentCount: p.comment_count ?? 0,
      badge:
        hasDiscount && firstVariant?.price?.discount_percentage
          ? {
              text: `%${firstVariant.price.discount_percentage}`,
              sub: "İNDİRİM",
            }
          : undefined,
    };
  });

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-center uppercase mb-3">
            {toTurkishUpperCase(title)}
          </h1>
        </div>

        {products.length === 0 ? (
          <div className="text-gray-500 text-center">
            Bu kategoriye ait ürün bulunamadı.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 gap-5 mb-4 mx-auto max-w-7xl">
              {products.map((product) => (
                <ProductCard
                  key={product.href}
                  href={product.href}
                  imageSrc={product.imageSrc}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  previousPrice={product.previousPrice}
                  commentCount={product.commentCount}
                  badge={product.badge}
                />
              ))}
            </div>
            {/* Total products count */}
            <div className="text-center mt-6 mb-4">
              <p className="text-gray-700 text-sm font-semibold">
                Toplam {products.length} ürün görüntüleniyor
              </p>
            </div>
          </>
        )}

        {/* Protein category information section - moved to the end */}
        {isProteinPage && (
          <div className="mt-8 max-w-7xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <p
                className={`text-gray-700 leading-relaxed ${
                  showMore ? "whitespace-pre-line" : "line-clamp-2"
                }`}
              >
                {showMore ? proteinInfoLong : proteinInfoShort}
              </p>
              <div className="mt-4">
                <Button
                  variant="link"
                  onClick={() => setShowMore(!showMore)}
                  className="text-blue-600 hover:text-blue-800 p-0 h-auto font-semibold cursor-pointer"
                >
                  {showMore ? "Daha az göster" : "Daha fazla göster"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryListing;
