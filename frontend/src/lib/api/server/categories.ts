const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Get all categories (Server Component)
export async function getAllCategories() {
  const res = await fetch(`${BASE_URL}/categories`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch all categories");
  const json = await res.json();
  return json.data.data;
}
