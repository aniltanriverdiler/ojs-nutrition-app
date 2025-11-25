"use client";
import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { toTurkishUpperCase } from "@/lib/utils/text";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { getProductsByCategoryIdClient } from "@/lib/api/client/product";

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface CategoryListingProps {
  title: string;
  initialProducts: Product[];
  subCategories?: SubCategory[];
  slug: string;
  categoryId: string;
}

const CategoryListing = ({
  title,
  initialProducts = [],
  subCategories = [],
  slug,
  categoryId,
}: CategoryListingProps) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialProducts.length === 12); // If the first page is less than 12, there is no more
  const [showMore, setShowMore] = useState(false);

  // To fix the API URL for images
  const MEDIA_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/v1$/, "") || "";

  // Check if this is the protein category page
  const isProteinPage = slug === "protein";

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

  //infinite scroll logic
  const loadMoreProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newProducts = await getProductsByCategoryIdClient(
        categoryId,
        page,
        12
      );

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        // Add by filtering according to the IDs of the incoming products
        setProducts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const uniqueNewProducts = newProducts.filter(
            (p: Product) => !existingIds.has(p.id)
          );

          if (uniqueNewProducts.length === 0) {
            setHasMore(false);
            return prev;
          }

          return [...prev, ...uniqueNewProducts];
        });

        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, categoryId]);

  // Scroll to load more products
  useEffect(() => {
    function handleScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
      if (nearBottom) {
        loadMoreProducts();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreProducts, loading, hasMore]);

  // Normalize the product details for ProductCard
  const formattedProducts = products.map((p) => {
    const price = p.price_info.total_price;
    const discountedPrice = p.price_info.discounted_price;
    const hasDiscount = Boolean(discountedPrice);

    return {
      href: `/products/${p.slug}`,
      imageSrc: p.photo_src
        ? p.photo_src.startsWith("http")
          ? p.photo_src
          : `${MEDIA_BASE_URL}${p.photo_src}`
        : "/images/5-htp.png", // for now, we are using a default image
      name: p.name,
      description: p.short_explanation || "",
      price: (discountedPrice ?? price).toLocaleString("tr-TR"),
      previousPrice: hasDiscount ? price.toLocaleString("tr-TR") : undefined,
      commentCount: p.comment_count ?? 0,
      stars: Math.round(p.average_star),
      badge:
        hasDiscount && p.price_info.discount_percentage
          ? {
              text: `%${p.price_info.discount_percentage}`,
              sub: "indirim",
            }
          : undefined,
    };
  });

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-center uppercase pb-6">
            {toTurkishUpperCase(title)}
          </h1>
        </div>

        {formattedProducts.length === 0 ? (
          <div className="text-gray-500 text-center">
            Bu kategoriye ait ürün bulunamadı.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4 mx-auto max-w-7xl">
              {formattedProducts.map((product) => (
                <ProductCard
                  key={product.href}
                  href={product.href}
                  imageSrc={product.imageSrc}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  previousPrice={product.previousPrice}
                  commentCount={product.commentCount}
                  stars={product.stars}
                  badge={product.badge}
                  imageContainerClassName="w-[260px] h-[260px] sm:w-[277px] sm:h-[277px] md:w-[230px] md:h-[230px] lg:w-[230px] lg:h-[230px] xl:w-[277px] xl:h-[277px]"
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
