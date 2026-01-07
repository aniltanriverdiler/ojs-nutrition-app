const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Get products list best sellers from API
export async function getProductsListBestSellers() {
  const res = await fetch(`${BASE_URL}/products/best-sellers`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products list best sellers");
  return res.json();
}

// Get all products with pagination from API
export async function getAllProducts({ page = 1, limit = 12 }) {
  const offset = (page - 1) * limit;
  const res = await fetch(
    `${BASE_URL}/products?limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch all products");
  const json = await res.json();
  return json.data.results;
}

// Get products by category ID with pagination from API
export async function getProductsByCategoryId(
  categoryId: string,
  limit = 12,
  offset = 0
) {
  const res = await fetch(
    `${BASE_URL}/products?main_category=${categoryId}&limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Products fetch error:", res.statusText);
    return [];
  }

  const json = await res.json();

  // The API response may return an array directly in 'data' or in 'data.results'
  if (Array.isArray(json.data)) {
    return json.data;
  }

  if (json.data && Array.isArray(json.data.results)) {
    return json.data.results;
  }

  return [];
}

// Get product details by slug from API
export async function getProductDetailsBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/products/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product details by slug");
  }

  const json = await res.json();
  return json;
}

// Get product comments by slug with pagination from API
export async function getProductCommentsBySlug(
  slug: string,
  limit = 10,
  offset = 0
) {
  const res = await fetch(
    `${BASE_URL}/products/${slug}/comments?limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product comments by slug");
  }

  const json = await res.json();
  return json;
}

// Get product rate statistics by slug from API
export async function getProductRateStatisticsBySlug(slug: string) {
  const res = await fetch(`${BASE_URL}/products/${slug}/rate-statistics`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product rate statistics by slug");
  }

  const json = await res.json();
  return json;
}

// Get products by search query with pagination from API
export async function searchProducts(query: string, limit = 20, offset = 0) {
  const res = await fetch(
    `${BASE_URL}/products?limit=${limit}&offset=${offset}&search=${query}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return [];
  }

  const json = await res.json();
  return json.data.results || [];
}
