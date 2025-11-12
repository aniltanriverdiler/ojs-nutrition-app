"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  getReviewsByProductId,
  getReviewSummary,
  getTotalPages,
} from "@/lib/dummy/reviews";
import { Button } from "@/components/ui/button";
import ReviewsList from "@/components/shared/ReviewsList";

interface ProductReviewsProps {
  productId: string;
}

const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const reviews = getReviewsByProductId(productId, currentPage, limit);
  const summary = getReviewSummary(productId);
  const totalPages = getTotalPages(productId, limit);

  return (
    <section className="container mx-auto max-w-7xl px-4 py-8">
      {/* Overall Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/*Left Side: Average Rating */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-5xl font-semibold text-gray-800 items-center md:ml-16">
            {summary.averageRating}
          </p>
          <div className="flex flex-row items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                src="/icons/star-v2.svg"
                alt="Star"
                width={35}
                height={35}
                priority
              />
            ))}
          </div>
          <p className="text-lg font-semibold text-gray-700 md:ml-14 mb-6">
            {summary.totalReviews.toLocaleString("tr-TR")} YORUM
          </p>
          <Button
            variant="outline"
            className="bg-blue-800 hover:bg-blue-700 text-white hover:text-white px-8 py-5 rounded-full cursor-pointer"
          >
            YORUM {summary.totalReviews.toLocaleString("tr-TR")}
          </Button>
        </div>

        {/* Right Side: Star Distribution */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = summary.ratingDistribution[rating] || 0;
            const percentage =
              summary.totalReviews > 0
                ? (count / summary.totalReviews) * 100
                : 0;

            return (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-lg text-[#f1ce1a] font-semibold w-12">
                  {rating} ★
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                  <div
                    className="bg-blue-700 h-full rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-lg text-gray-700 w-16 text-right mb-2">
                  ({count.toLocaleString("tr-TR")})
                </span>
              </div>
            );
          })}
        </div>
      </div>

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

export default ProductReviews;
