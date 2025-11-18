// Category Card Component Props
export interface CategoryCardProps {
  slug: string;
  title: string;
  image: string;
  bgColor: string;
  isAllProducts?: boolean;
}

// Product Card Component Props
export interface ProductCardProps {
  href: string;
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  previousPrice?: string;
  commentCount?: number;
  badge?: { text: string; sub?: string };
  stars?: number;
}
