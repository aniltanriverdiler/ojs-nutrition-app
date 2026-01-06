"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Review } from "@/types/reviews";
import ReviewCard from "./ReviewCard";

interface ReviewsListProps {
  reviews: Review[];
  totalPages: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  limit?: number;
}

const ReviewsList = ({
  reviews,
  totalPages,
  currentPage: externalCurrentPage,
  onPageChange,
}: ReviewsListProps) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);

  const currentPage = externalCurrentPage ?? internalCurrentPage;
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    } else {
      setInternalCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Comments List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent className="gap-2 sm:gap-3">
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
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
                    onClick={() => handlePageChange(page)}
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
                  handlePageChange(Math.min(totalPages, currentPage + 1))
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
    </div>
  );
};

export default ReviewsList;
