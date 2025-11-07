import { CATEGORIES } from "./categories";
import { CategoryCardProps } from "@/types/home";

export const HOME_CATEGORIES: (CategoryCardProps & { slug: string })[] = [
  {
    slug: CATEGORIES.PROTEIN,
    title: "PROTEİN",
    image: "/images/protein-card-v2.png",
    bgColor: "bg-[#7EA0A2]",
  },
  {
    slug: CATEGORIES.VITAMIN,
    title: "VİTAMİN",
    image: "/images/vitamins-card-v2.png",
    bgColor: "bg-[#FDE8D7]",
  },
  {
    slug: CATEGORIES.HEALTH,
    title: "SAĞLIK",
    image: "/images/health-card-v2.png",
    bgColor: "bg-[#CCCBC6]",
  },
  {
    slug: CATEGORIES.SPORTS_NUTRITION,
    title: "SPOR GIDALARI",
    image: "/images/sport-card-v2.png",
    bgColor: "bg-[#D9D8D3]",
  },
  {
    slug: CATEGORIES.FOOD,
    title: "GIDA",
    image: "/images/food-card-v2.png",
    bgColor: "bg-[#72B4CE]",
  },
  {
    slug: "/products", 
    title: "TÜM ÜRÜNLER",
    image: "/images/amino-package.png",
    bgColor: "bg-[#A8D5E8]",
    isAllProducts: true,
  },
] as const;
