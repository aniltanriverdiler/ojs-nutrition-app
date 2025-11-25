"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReviewsList from "@/components/shared/ReviewsList";
import {
  getProductCommentsBySlug,
  getProductRateStatisticsBySlug,
} from "@/lib/api/server/products";
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

// Rate statistics type for the API response (Raw data from the API)
interface ApiRateStatistics {
  rate_count: number;
  one_star_count: number;
  two_star_count: number;
  three_star_count: number;
  four_star_count: number;
  five_star_count: number;
  average_star: number;
}

// Rate statistics type for the API response (Transformed data)
interface RateStatistics {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: {
    [key: number]: number;
  };
}

// Props Type
interface ProductReviewsProps {
  productSlug: string;
  rateStatistics?: ApiRateStatistics;
}

const ProductReviews = ({
  productSlug,
  rateStatistics: propRateStatistics,
}: ProductReviewsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rateStatistics, setRateStatistics] = useState<RateStatistics>({
    totalReviews: 0,
    averageRating: 0,
    ratingDistribution: {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    },
  });

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

  // Fetch rate statistics when the component mounts or the slug changes or the rate statistics prop changes
  useEffect(() => {
    if (propRateStatistics) {
      // If the rate statistics prop is provided, transform it and use it
      const transformedData: RateStatistics = {
        totalReviews: propRateStatistics.rate_count || 0,
        averageRating: propRateStatistics.average_star || 0,
        ratingDistribution: {
          5: propRateStatistics.five_star_count || 0,
          4: propRateStatistics.four_star_count || 0,
          3: propRateStatistics.three_star_count || 0,
          2: propRateStatistics.two_star_count || 0,
          1: propRateStatistics.one_star_count || 0,
        },
      };
      setRateStatistics(transformedData);
    } else {
      // If the rate statistics prop is not provided, fetch it from the API
      const fetchRateStatistics = async () => {
        try {
          const response = await getProductRateStatisticsBySlug(productSlug);
          if (response && response.data) {
            const transformedData: RateStatistics = {
              totalReviews: response.data.rate_count || 0,
              averageRating: response.data.average_star || 0,
              ratingDistribution: {
                5: response.data.five_star_count || 0,
                4: response.data.four_star_count || 0,
                3: response.data.three_star_count || 0,
                2: response.data.two_star_count || 0,
                1: response.data.one_star_count || 0,
              },
            };
            setRateStatistics(transformedData);
          }
        } catch (error) {
          console.error("Error fetching rate statistics:", error);
        }
      };

      fetchRateStatistics();
    }
  }, [productSlug, propRateStatistics]);

  // Calculate summary statistics - Safe access
  const averageRating = rateStatistics?.averageRating || 0;
  const totalReviews = rateStatistics?.totalReviews || 0;

  // Total number of pages
  const totalPages = Math.ceil(totalCount / limit);

  // Star Distribution Calculation - Safe access
  const ratingDistribution = rateStatistics?.ratingDistribution || {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

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
        <div className="flex justify-center md:justify-start ">
          <div className="flex flex-col gap-2 items-center justify-center ">
            <p className="text-5xl font-semibold text-gray-800 items-center justify-center">
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
            <p className="text-lg font-semibold text-gray-700 mb-6">
              {rateStatistics.totalReviews.toLocaleString("tr-TR")} YORUM
            </p>
          </div>
        </div>

        {/* Right Side: Star Distribution */}
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count =
              ratingDistribution[rating as keyof typeof ratingDistribution] ||
              0;
            const percentage =
              rateStatistics.totalReviews > 0
                ? (count / rateStatistics.totalReviews) * 100
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

        {/* Rate Statistics Button */}
        <div className="flex justify-start">
          <Button
            variant="outline"
            className="bg-blue-800 hover:bg-blue-700 text-white hover:text-white px-8 py-5 rounded-full cursor-pointer"
          >
            YORUM ({rateStatistics.totalReviews.toLocaleString("tr-TR")})
          </Button>
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
