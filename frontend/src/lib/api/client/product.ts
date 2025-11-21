const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Get all products (Client Component)
export async function getAllProducts({ page = 1, limit = 12 }) {
  const offset = (page - 1) * limit;
  const res = await fetch(
    `${BASE_URL}/products?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) throw new Error("Failed to fetch all products");
  const json = await res.json();
  return json.data.results;
}

// Get products by category id (Client Component)
export async function getProductsByCategoryIdClient(
  categoryId: string,
  page = 1,
  limit = 12
) {
  const offset = (page - 1) * limit;

  const res = await fetch(
    `${BASE_URL}/products?main_category=${categoryId}&limit=${limit}&offset=${offset}`
  );

  if (!res.ok) throw new Error("Failed to fetch products by category id");

  const json = await res.json();

  if (Array.isArray(json.data)) {
    return json.data;
  }

  if (json.data && Array.isArray(json.data.results)) {
    return json.data.results;
  }

  return [];
}
