// frontend/src/app/(routes)/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_NAMES } from "@/lib/constants/categories";
import ProductDetail from "@/features/products/_components/ProductDetail";
import CategoryListing from "@/features/products/_components/CategoryListing";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  if (/^\d+$/.test(slug)) {
    return <ProductDetail id={slug} />;
  }

  const valid = Object.values(CATEGORIES).includes(slug as any);
  if (!valid) return notFound();

  return <CategoryListing slug={slug as keyof typeof CATEGORY_NAMES} />;
}
