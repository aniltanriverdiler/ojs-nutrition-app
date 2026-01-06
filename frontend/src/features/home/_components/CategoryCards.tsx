import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CategoryCardProps } from "@/types/home";

const CategoryCards = ({
  slug,
  title,
  image,
  bgColor,
  isAllProducts,
}: CategoryCardProps) => {
  const href = isAllProducts ? slug : `/products/${slug}`;
  const imageAlt = title.toLowerCase();

  return (
    <>
      <Link href={href} className="w-full">
        <div
          className={`flex flex-row ${bgColor} w-full h-36 sm:h-40 md:h-40 lg:h-44 xl:h-48 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="shrink-0 w-28 sm:w-36 md:w-32 lg:w-36 xl:w-auto">
            <Image
              src={image}
              alt={imageAlt}
              width={162}
              height={162}
              className="rounded-l-xl object-cover h-full w-full"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-2 lg:gap-3 xl:gap-4 justify-center items-center flex-1 px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4">
            <h3 className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
              {title}
            </h3>
            <Button className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-10 2xl:py-5 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base rounded-xl hover:bg-black/80 transition-all duration-300 cursor-pointer shadow-xl/20">
              İNCELE
            </Button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCards;
