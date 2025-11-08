"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  getReviewsByProductId,
  getReviewSummary,
  getTotalPages,
} from "@/lib/dummy/reviews";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

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
          <p className="text-5xl font-semibold text-gray-800 items-center ml-16">
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
          <p className="text-lg font-semibold text-gray-700 ml-14 mb-6">
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

      {/* Comments List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="w-full border-none bg-gray-100 shadow-md"
          >
            <CardContent>
              <div className="flex flex-row gap-4 items-center w-full">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-row items-center w-full">
                    <div className="flex flex-row items-center flex-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Image
                          key={i}
                          src="/icons/star-v2.svg"
                          alt="Star"
                          width={30}
                          height={30}
                          priority
                        />
                      ))}
                      <p className="text-xl font-semibold text-gray-800 ml-2">
                        {review.author}
                      </p>
                    </div>
                    <p className="text-gray-800 font-semibold text-right w-28">
                      {review.date}
                    </p>
                  </div>
                  <p className="text-xl font-semibold text-gray-800 mt-5">
                    {" "}
                    {review.title}{" "}
                  </p>
                  <p className="text-gray-700 text-lg">{review.text}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent className="gap-2 sm:gap-3">
            <PaginationItem>
              <PaginationLink
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer gap-1 px-2.5 sm:pl-2.5"
                }
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </PaginationLink>
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              const isActive = currentPage === page;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={isActive}
                    className={`cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer gap-1 px-2.5 sm:pr-2.5"
                }
              >
                <ChevronRightIcon className="w-4 h-4" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};

export default ProductReviews;
