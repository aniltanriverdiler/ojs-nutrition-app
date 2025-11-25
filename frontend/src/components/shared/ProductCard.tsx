import { ProductCardProps } from "@/types/home";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  href,
  imageSrc,
  name,
  description,
  price,
  previousPrice,
  commentCount,
  badge,
  stars = 5,
  imageContainerClassName = "w-[170px] h-[170px]",
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Link href={href} className="flex flex-col items-center w-full">
        <div
          className={`relative flex items-center justify-center ${imageContainerClassName} mb-2`}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="175px"
            className="object-cover"
            priority
            unoptimized
          />
          {badge ? (
            <div className="absolute -top-6 -right-4 bg-red-500 text-white font-bold w-16 h-13 rounded-none flex flex-col items-center justify-center">
              <span className="text-xl leading-none">{badge.text}</span>
              {badge.sub ? (
                <span className="text-xs font-medium leading-none uppercase">
                  {badge.sub}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Name and Description */}
        <div className="flex flex-col items-center gap-1 w-full px-2">
          <p className="text-lg font-bold text-center text-gray-800 leading-tight">
            {name}
          </p>
          <p className="font-semibold text-center text-gray-400 text-sm min-h-[32px] leading-tight flex items-center justify-center">
            {description}
          </p>
        </div>

        {/* Stars, Comments and Price */}
        <div className="flex flex-col items-center gap-1 mt-1 w-full">
          <div className="flex flex-row items-center justify-center h-5">
            {stars > 0 ? (
              Array.from({ length: stars }).map((_, i) => (
                <Image
                  key={i}
                  src="/icons/star-v2.svg"
                  alt="Star"
                  width={24}
                  height={24}
                  priority
                />
              ))
            ) : (
              Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gray-300" />
              ))
            )}
          </div>

          {commentCount !== undefined ? (
            <p className="text-sm text-center font-semibold text-gray-700 leading-none">
              {commentCount?.toLocaleString("tr-TR")} Yorum
            </p>
          ) : null}

          <div className="flex items-center justify-center gap-2">
            <p className="text-center text-xl font-bold text-gray-800 leading-none">
              {Math.round(parseFloat(price)).toLocaleString("tr-TR")} TL
            </p>
            {previousPrice ? (
              <p className="text-center font-bold text-red-500 line-through text-sm leading-none">
                {Math.round(parseFloat(previousPrice)).toLocaleString("tr-TR")} TL
              </p>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
