export interface Review {
  id: number;
  rating: number;
  date: string;
  title: string;
  text: string;
  author: string;
  productImage: string;
  productId?: string;
  readMoreHref?: string;
}

export interface ReviewsResponse {
  status: "success";
  data: Review[];
}

export interface ReviewsSummary {
  totalReviews: number;
  averageRating: number;
  ratingDistribution: {
    [key: number]: number;
  };
}
