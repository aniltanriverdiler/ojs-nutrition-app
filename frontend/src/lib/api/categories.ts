const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Get all categories from API
export async function getAllCategories() {
  const res = await fetch(`${BASE_URL}/categories`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  
  const json = await res.json();
  return json.data.data;
}

