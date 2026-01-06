"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/types/reviews";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="w-full border-none bg-gray-50 shadow-md mb-4 rounded-xl">
      <CardContent className="px-6 py-3">
        <div className="flex flex-col gap-3">
          {/* Header: Stars, Name, Badges, Date */}
          <div className="flex flex-wrap items-center justify-between gap-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Stars */}
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < review.rating ? (
                    <Image
                      key={i}
                      src="/icons/star-v2.svg"
                      alt="Star"
                      width={20}
                      height={20}
                      className="w-6 h-6 md:w-7 md:h-7"
                    />
                  ) : (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-gray-300"
                      fill="currentColor"
                    />
                  )
                )}
              </div>

              {/* Name and Country */}
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900 text-base md:text-lg">
                  {review.author}
                </span>
                <span className="font-bold text-gray-900 text-sm pt-0.5">
                  TR
                </span>
              </div>

              {/* Verified Badge */}
              {review.verified && (
                <div className="bg-[#D4F4E4] text-[#1E7E53] text-[10px] md:text-[10px] font-bold px-3 py-2 rounded-full flex items-center tracking-wider">
                  DOĞRULANMIŞ KULLANICI
                </div>
              )}
            </div>

            {/* Date */}
            <div className="text-gray-900 text-xs md:text-base font-bold ml-auto">
              {review.date}
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="font-bold text-gray-900 text-xl">{review.title}</h3>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-800 text-lg leading-relaxed">
              {review.text}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
