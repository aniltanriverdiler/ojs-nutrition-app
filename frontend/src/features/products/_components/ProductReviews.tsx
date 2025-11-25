"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReviewsList from "@/components/shared/ReviewsList";
import { getProductCommentsBySlug } from "@/lib/api/server/products";
import { Review } from "@/types/reviews";

// Comments type for the API response
interface CommentData {
  id?: number | string;
  stars: string | number;
  comment: string;
  title: string;
  created_at: string;
  aroma: string;
  first_name: string;
  last_name: string;
}

// Props Type
interface ProductReviewsProps {
  productSlug: string;
}

const ProductReviews = ({ productSlug }: ProductReviewsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const limit = 10;

  // Fetch comments when the component mounts or the slug changes
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        // Fetch comments from the API
        const response = await getProductCommentsBySlug(
          productSlug,
          limit,
          (currentPage - 1) * limit
        );

        // Update state with the fetched data
        if (response && response.data) {
          setComments(response.data.results || []);
          setTotalCount(response.data.count || 0);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [productSlug, currentPage]);

  // Calculate summary statistics
  const averageRating = 5;

  // Total number of pages
  const totalPages = Math.ceil(totalCount / limit);

  // Star Distribution Calculation
  const ratingDistribution = { 5: totalCount, 4: 0, 3: 0, 2: 0, 1: 0 };

  if (isLoading && comments.length === 0) {
    return <div className="text-center py-10">Yorumlar yükleniyor...</div>;
  }

  const formattedReviews: Review[] = comments.map((c, index) => ({
    id: c.id || index,
    author: `${c.first_name} ${c.last_name.charAt(0)}.`,
    date: new Date(c.created_at)
      .toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
      .replace(/\./g, "/"),
    rating: Number(c.stars),
    title: c.title,
    text: c.comment,
    verified: true,
  }));

  return (
    <section className="container mx-auto max-w-7xl px-4 py-8">
      {/* Overall Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/*Left Side: Average Rating */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-5xl font-semibold text-gray-800 items-center md:ml-21">
            {averageRating}
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
            {totalCount.toLocaleString("tr-TR")} YORUM
          </p>
          <Button
            variant="outline"
            className="bg-blue-800 hover:bg-blue-700 text-white hover:text-white px-8 py-5 rounded-full cursor-pointer"
          >
            YORUM {totalCount.toLocaleString("tr-TR")}
          </Button>
        </div>

        {/* Right Side: Star Distribution */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count =
              ratingDistribution[rating as keyof typeof ratingDistribution] ||
              0;
            const percentage = totalCount > 0 ? (count / totalCount) * 100 : 0;

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
        reviews={formattedReviews}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        limit={limit}
      />
    </section>
  );
};

export default ProductReviews;
