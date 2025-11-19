import { ProductCardProps } from "@/types/home";
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
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={href} className="flex flex-col sm:gap-1 items-center">
        <div className="relative w-44 h-44 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="168px"
            className="object-cover"
            priority
            unoptimized
          />
          {badge ? (
            <div className="absolute -top-6 -right-4 bg-red-500 text-white font-bold w-16 h-16 rounded-none flex flex-col items-center justify-center">
              <span className="text-xl leading-none">{badge.text}</span>
              {badge.sub ? (
                <span className="text-xs font-medium leading-none uppercase">
                  {badge.sub}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>

        <p className="text-lg font-bold text-center text-gray-800">{name}</p>
        <p className="font-semibold text-center text-gray-400 text-sm min-h-[36px]">
          {description}
        </p>

        <div className="flex flex-row items-center justify-center min-h-[24px]">
          {Array.from({ length: stars }).map((_, i) => (
            <Image
              key={i}
              src="/icons/star-v2.svg"
              alt="Star"
              width={24}
              height={24}
              priority
            />
          ))}
        </div>

        {commentCount !== undefined ? (
          <p className="text-sm text-center font-semibold text-gray-700 mt-2">
            {commentCount?.toLocaleString("tr-TR")} Yorum
          </p>
        ) : null}

        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-center text-xl font-bold text-gray-800">
            {price} TL
          </p>
          {previousPrice ? (
            <p className="text-center font-bold text-red-500 line-through">
              {previousPrice} TL
            </p>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
