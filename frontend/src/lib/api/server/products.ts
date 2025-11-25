const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Get products list best sellers (Server Component)
export async function getProductsListBestSellers() {
  const res = await fetch(`${BASE_URL}/products/best-sellers`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products list best sellers");
  return res.json();
}

// Get category listing (Server Component)
export async function getProductsByCategoryId(categoryId: string, limit = 12, offset = 0) {
  const res = await fetch(`${BASE_URL}/products?main_category=${categoryId}&limit=${limit}&offset=${offset}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Products fetch error:", res.statusText);
    return [];
  }

  const json = await res.json();

  // The API response may return an array directly in 'data' or in 'data.results'; check both.
  if (Array.isArray(json.data)) {
    return json.data;
  }

  if (json.data && Array.isArray(json.data.results)) {
    return json.data.results;
  }

  return [];
}

// Get product details by slug (Server Component)
export default async function getProductDetailsBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/products/${slug}`, {cache: "no-store"});
  console.log("API Response Status:", res.status);

  if (!res.ok) {
    console.error("Failed to fetch product. Status:", res.status, "Slug:", slug);
    throw new Error("Failed to fetch product details by slug");
  }
  
  const json = await res.json();
  console.log("Product Data:", json);
  return json;
};
