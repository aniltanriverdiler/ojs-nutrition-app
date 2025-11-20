const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Get products list best sellers (Server Component)
export async function getProductsListBestSellers() {
    const res = await fetch(`${BASE_URL}/products/best-sellers`, { cache: 'no-store' })
    if(!res.ok) throw new Error('Failed to fetch products list best sellers');
    return res.json();
}
