"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Comment {
  id: string | number;
  rating: number;
  date: string;
  title: string;
  text: string;
  author?: string;
  product_image?: string;
  verified?: boolean;
}

interface HomeSliderProps {
  comments: Comment[];
  totalComments: number;
  averageRating: number;
}

const HomeSlider = ({
  comments,
  totalComments,
  averageRating,
}: HomeSliderProps) => {
  const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace("/api/v1", "") || "";

  const getImageUrl = (path: string | undefined) => {
    if (!path) return "/images/gold-whey.png";
    if (path.startsWith("http")) return path;
    const cleanBase = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
  };

  // Format date if needed
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Prefer 5 star reviews but fallback to all comments when necessary
  const fiveStarComments = comments.filter((comment) => comment.rating === 5);
  const slidesSource =
    fiveStarComments.length >= 3 ? fiveStarComments : comments;

  return (
    <section id="home-slider">
      {/* Ratings Summary */}
      <div className="container mx-auto max-w-7xl grid grid-cols-2 gap-5 justify-between items-center px-8 2xl:px-0">
        <div>
          <h3 className="text-lg font-bold text-gray-600 uppercase">
            Gerçek Müşteri Yorumları
          </h3>
        </div>
        <div className="flex flex-row items-center justify-end">
          {Array.from({ length: Math.round(averageRating) }).map((_, i) => (
            <Image
              key={i}
              src="/icons/star-v2.svg"
              alt="Star"
              width={26}
              height={26}
              priority
            />
          ))}
          <p className="text-sm font-bold text-gray-500 underline ml-2">
            {totalComments.toLocaleString("tr-TR")} Yorum
          </p>
        </div>
      </div>

      <hr className="border-gray-300 my-4 border mx-8 2xl:mx-auto max-w-7xl" />

      {/* Swiper Section */}
      <div className="pt-3 pb-10 mx-auto max-w-7xl px-4 w-full">
        {slidesSource.length > 0 ? (
          <Swiper
            spaceBetween={20}
            centeredSlides={false}
            loop={slidesSource.length > 3}
            speed={800}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              enabled: slidesSource.length > 1,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper [&_.swiper-button-next]:text-black [&_.swiper-button-prev]:text-black [&_.swiper-button-next]:w-10 [&_.swiper-button-prev]:w-10"
          >
            {slidesSource.map((comment, index) => (
              <SwiperSlide
                key={comment.id ?? `${comment.title}-${index}`}
                className="h-auto"
              >
                <Card className="flex h-full flex-col border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg rounded-xl">
                  <CardContent className="flex h-full flex-col justify-between p-0 space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: comment.rating }).map(
                          (_, idx) => (
                            <Image
                              key={idx}
                              src="/icons/star-v2.svg"
                              alt="Star"
                              width={24}
                              height={24}
                              priority
                            />
                          )
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {comment.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                            Doğrulanmış
                          </span>
                        )}
                        <p className="text-sm font-semibold text-gray-500">
                          {formatDate(comment.date)}
                        </p>
                      </div>
                    </div>

                    <h4 className="text-base font-bold tracking-tight text-gray-900 line-clamp-2">
                      {comment.title}
                    </h4>

                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex items-start gap-4">
                        {comment.product_image && (
                          <Image
                            src={getImageUrl(comment.product_image)}
                            alt="Ürün görseli"
                            width={84}
                            height={84}
                            className="h-20 w-20 rounded-md border border-gray-400 object-contain shrink-0"
                            priority
                          />
                        )}
                        <p className="text-[15px] leading-7 text-gray-700 line-clamp-4 font-medium">
                          {comment.text}
                        </p>
                      </div>

                      {comment.author && (
                        <p className="text-base font-bold text-gray-800 mt-auto">
                          {comment.author}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center py-10 text-gray-500">
            <p className="text-lg font-semibold">
              Henüz yorum bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSlider;
