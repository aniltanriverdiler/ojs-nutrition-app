// frontend/src/app/(routes)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/lib/constants/categories";
import ProductDetail from "@/features/products/_components/ProductDetail";
import CategoryListing from "@/features/products/_components/CategoryListing";
import { getProductById, getProductBySlug } from "@/lib/dummy/products";
import { getCategoryBySlug } from "@/lib/dummy/categories";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  // Check if slug is a numeric ID
  const isId = /^\d+$/.test(slug);
  if (isId) {
    const exists = getProductById(slug);
    if (!exists) return notFound();
    return <ProductDetail id={slug} />;
  }

  // Check if slug matches a product slug
  const product = getProductBySlug(slug);
  if (product) {
    return <ProductDetail id={product.id} />;
  }

  // Check if slug matches a category in mock data
  const category = getCategoryBySlug(slug);
  if (category) {
    // Check if this category slug exists in our constants
    const categoryKey = Object.entries(CATEGORIES).find(
      ([, value]) => value === slug
    )?.[0] as keyof typeof CATEGORIES | undefined;

    if (categoryKey) {
      return <CategoryListing slug={CATEGORIES[categoryKey]} />;
    }
  }

  // If nothing matches, return 404
  return notFound();
}
