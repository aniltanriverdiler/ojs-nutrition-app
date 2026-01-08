import ProductDetail from "@/features/products/_components/ProductDetail";
import CategoryListing from "@/features/products/_components/CategoryListing";
import { getAllCategories } from "@/lib/api/categories";
import {
  getProductsByCategoryId,
  getProductDetailsBySlug,
  getProductsListBestSellers,
  getProductRateStatisticsBySlug,
} from "@/lib/api/products";

interface ApiCategory {
  id: string;
  name: string;
  slug: string;
  children?: ApiCategory[];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Let's define a variable to store the fetched data
  let matchedCategoryData = null;

  // Check is category from API
  try {
    const categories: ApiCategory[] = await getAllCategories();
    const matchedCategory = categories.find(
      (c) => c.slug.toLowerCase() === slug.toLowerCase()
    );

    if (matchedCategory) {
      // If the category is found, fetch the products belonging to that category
      const productsData = await getProductsByCategoryId(
        matchedCategory.id,
        12,
        0
      );
      const initialProducts = Array.isArray(productsData) ? productsData : [];
      const subCategories = matchedCategory.children || [];

      matchedCategoryData = {
        category: matchedCategory,
        initialProducts,
        subCategories,
      };
    }
  } catch (error) {
    console.error("Error fetching categories/products:", error);
  }

  if (matchedCategoryData) {
    return (
      <CategoryListing
        title={matchedCategoryData.category.name}
        initialProducts={matchedCategoryData.initialProducts}
        subCategories={matchedCategoryData.subCategories}
        slug={matchedCategoryData.category.slug}
        categoryId={matchedCategoryData.category.id}
      />
    );
  }

  // Check if the product exists (Fetches the product by slug from the API)
  const productResponse = await getProductDetailsBySlug(slug);

  if (productResponse && productResponse.data) {
    // Fetch best sellers and categories for the product detail page
    const bestSellers = await getProductsListBestSellers();
    const productRateStatistics = await getProductRateStatisticsBySlug(slug);
    const categories: ApiCategory[] = await getAllCategories();
    
    return (
      <ProductDetail
        product={productResponse.data}
        bestSellers={bestSellers.data}
        rateStatistics={productRateStatistics.data}
        categories={categories}
      />
    );
  }
}
