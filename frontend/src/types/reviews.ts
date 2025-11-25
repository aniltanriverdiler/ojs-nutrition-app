export interface Review {
  id: string | number;
  rating: number;
  date: string;
  title: string;
  text: string;
  author: string;
  verified?: boolean;
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
