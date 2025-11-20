// Get all products (Client Component)
export async function getAllProducts({ page = 1, limit = 12 }) {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const offset = (page - 1) * limit;    
    const res = await fetch(`${BASE_URL}/products?limit=${limit}&offset=${offset}`);
    if(!res.ok) throw new Error('Failed to fetch all products');
    const json = await res.json();
    return json.data.results;
};