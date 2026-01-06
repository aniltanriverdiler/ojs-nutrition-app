import HeroSection from "@/features/home/_components/HeroSection";
import HomeContent from "@/features/home/_components/HomeContent";
import HomeSlider from "@/features/home/_components/HomeSlider";
import {
  getProductCommentsBySlug,
  getProductDetailsBySlug,
} from "@/lib/api/products";

// API Comment type
interface ApiComment {
  id: number | string;
  stars: string | number;
  comment: string;
  title: string;
  created_at: string;
  first_name?: string;
  last_name?: string;
  aroma?: string;
}

interface Comment {
  id: string | number;
  rating: number;
  date: string;
  title: string;
  text: string;
  author?: string;
  product_image?: string;
  verified: boolean;
}

const HomePage = async () => {
  // Fetch comments for a popular product (whey-isolate as default)
  let allComments: Comment[] = [];
  let averageRating = 5;

  // Popular products list
  const popularProducts = [
    "whey-isolate",
    "whey-protein",
    "creatine",
    "pea-protein",
  ];

  try {
    // For each product, get comments
    const commentsPromises = popularProducts.map(async (slug) => {
      try {
        const [productResponse, commentsResponse] = await Promise.all([
          getProductDetailsBySlug(slug),
          getProductCommentsBySlug(slug, 5, 0), // For each product, get 5 comments
        ]);

        const productImage = productResponse?.data?.variants?.[0]?.photo_src;
        const rawComments: ApiComment[] = commentsResponse.data.results || [];

        return rawComments.map((comment) => ({
          id: `${slug}-${comment.id ?? crypto.randomUUID()}`,
          rating: Number(comment.stars) || 5,
          date: comment.created_at,
          title: comment.title,
          text: comment.comment,
          author:
            comment.first_name && comment.last_name
              ? `${comment.first_name} ${comment.last_name.charAt(0)}.`
              : undefined,
          product_image: productImage,
          verified: true,
        }));
      } catch (error) {
        console.error(`Error fetching comments for ${slug}:`, error);
        return [];
      }
    });

    // Combine all comments
    const commentsArrays = await Promise.all(commentsPromises);
    allComments = commentsArrays.flat();

    // Take first 20 comments
    allComments = allComments.slice(0, 20);

    // Calculate average rating
    if (allComments.length > 0) {
      const totalRating = allComments.reduce(
        (sum, comment) => sum + (comment.rating || 5),
        0
      );
      averageRating = totalRating / allComments.length;
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
  }

  return (
    <>
      <HeroSection />
      <HomeContent />
      <HomeSlider
        comments={allComments}
        totalComments={allComments.length}
        averageRating={averageRating}
      />
    </>
  );
};

export default HomePage;
