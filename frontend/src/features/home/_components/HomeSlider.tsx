"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const HomeSlider = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      date: "03/05/2024",
      title: "Beğendim gayet güzeldi",
      text: "Ürün gayet güzel ama ekşiliği bir süreden sonra bayabiliyor insanı. Teşekkürler.",
      author: "Anıl T.",
      productImage: "/images/gold-whey.png",
      readMoreHref: "#",
    },
    {
      id: 2,
      rating: 5,
      date: "21/06/2024",
      title: "Hızlı teslimat",
      text: "Kargom çok hızlı geldi. Tadını da çok beğendim, tekrar alırım.",
      author: "Elif K.",
      productImage: "/images/gold-whey.png",
      readMoreHref: "#",
    },
    {
      id: 3,
      rating: 4,
      date: "02/07/2024",
      title: "Lezzetli",
      text: "Genel olarak başarılı. Bir tık daha az ekşi olsa mükemmel olurdu.",
      author: "Mert A.",
      productImage: "/images/gold-whey.png",
      readMoreHref: "#",
    },
    {
      id: 4,
      rating: 5,
      date: "10/08/2024",
      title: "Harika deneyim",
      text: "Paketleme çok özenliydi. Ailecek severek tüketiyoruz.",
      author: "Selin D.",
      productImage: "/images/gold-whey.png",
      readMoreHref: "#",
    },
    {
      id: 5,
      rating: 5,
      date: "15/09/2024",
      title: "Taze ve kaliteli",
      text: "Gerçekten taze. İçeriği temiz olduğu için gönül rahatlığıyla aldım.",
      author: "Baran Y.",
      productImage: "/images/gold-whey.png",
      readMoreHref: "#",
    },
  ];

  return (
    <section id="home-slider">
      {/* Ratings Summary */}
      <div className="container mx-auto max-w-7xl grid grid-cols-2 gap-5 justify-between items-center px-8 2xl:px-0">
        <div>
          <h3 className="text-lg font-bold text-gray-600">
            GERÇEK MÜŞTERİ YORUMLARI
          </h3>
        </div>
        <div className="flex flex-row items-center justify-end">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src="/icons/star-v2.svg"
              alt="Star"
              width={26}
              height={26}
            />
          ))}
          <p className="text-sm font-bold text-gray-500 underline ml-2">
            19845 Yorum
          </p>
        </div>
      </div>

      <hr className="border-gray-300 my-4 border mx-8 2xl:mx-auto max-w-7xl" />

      {/* Swiper Section */}
      <div className="pt-3 pb-10 mx-auto max-w-7xl px-4 w-full">
        <Swiper
          spaceBetween={20}
          centeredSlides={false}
          loop={true}
          speed={800}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Card className="h-full border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg rounded-xl">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Image
                          key={idx}
                          src="/icons/star-v2.svg"
                          alt="Star"
                          width={24}
                          height={24}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-gray-500">
                      {review.date}
                    </p>
                  </div>

                  <h4 className="text-xl font-extrabold tracking-tight text-gray-900">
                    {review.title}
                  </h4>

                  <div className="flex items-start gap-4">
                    {review.productImage && (
                      <Image
                        src={review.productImage}
                        alt="Ürün görseli"
                        width={84}
                        height={84}
                        className="h-20 w-20 rounded-md border border-gray-400 p-1 object-contain"
                      />
                    )}
                    <p className="text-[15px] leading-7 text-gray-700">
                      {review.text}
                    </p>
                  </div>

                  <div className="mt-2">
                    <a
                      href={review.readMoreHref}
                      className="text-indigo-600 underline underline-offset-4 hover:text-indigo-700"
                    >
                      Daha Fazla Oku
                    </a>
                  </div>

                  <p className="text-base font-bold text-gray-800">
                    {review.author}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
