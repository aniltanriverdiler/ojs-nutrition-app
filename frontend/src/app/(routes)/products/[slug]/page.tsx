import { notFound } from "next/navigation";
import ProductDetail from "@/features/products/_components/ProductDetail";
import CategoryListing from "@/features/products/_components/CategoryListing";
import { getProductBySlug } from "@/lib/dummy/products";
import { getAllCategories } from "@/lib/api/server/categories";
import { getProductsByCategoryId } from "@/lib/api/server/products";

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

      return (
        <CategoryListing
          title={matchedCategory.name}
          initialProducts={initialProducts}
          subCategories={subCategories}
          slug={matchedCategory.slug}
          categoryId={matchedCategory.id}
        />
      );
    }
  } catch (error) {
    console.error("Error fetching categories/products:", error);
  }

  const isId = /^\d+$/.test(slug);
  if (isId) {
    return <ProductDetail id={slug} />;
  }

  const product = getProductBySlug(slug);
  if (product) {
    return <ProductDetail id={product.id} />;
  }

  return notFound();
}
