"use client";

import { useState } from "react";
import ReviewsList from "@/components/shared/ReviewsList";
import {
  getAllReviews,
  getTotalPagesForAllReviews,
  mockReviews,
} from "@/lib/dummy/reviews";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutPageReviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const reviews = getAllReviews(currentPage, limit);
  const totalPages = getTotalPagesForAllReviews(limit);
  const totalReviews = mockReviews.length;

  return (
    <section className="container mx-auto max-w-7xl px-4 py-8">
      {/* Rating Summary Section */}
      <div className="flex flex-row items-center justify-start border-y border-gray-300 py-4 mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src="/icons/star-v2.svg"
            alt="Star"
            width={30}
            height={30}
          />
        ))}
        <p className="font-semibold text-blue-600 ml-2">{totalReviews} Yorum</p>
      </div>

      {/* Title */}
      <Button
        variant="outline"
        className="bg-blue-700 hover:bg-blue-600 text-white hover:text-white font-semibold px-8 py-6 rounded-full cursor-pointer mb-5"
      >
        ÜRÜN İNCELEMELERİ
      </Button>

      {/* Reviews List with Pagination */}
      <ReviewsList
        reviews={reviews}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        limit={limit}
      />
    </section>
  );
};

export default AboutPageReviews;
