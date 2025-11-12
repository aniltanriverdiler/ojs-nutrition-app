"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/types/reviews";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="w-full border-none bg-gray-100 shadow-md">
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
              {review.title}
            </p>
            <p className="text-gray-700 text-lg">{review.text}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
