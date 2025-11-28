import { cookies } from "next/headers";

// Reads token from cookies (server-side only)
export async function getAccessToken(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value;
    return token || null;
  } catch (error) {
    console.error("Error getting access token:", error);
    return null;
  }
}

// Creates headers for authenticated API requests
export async function getAuthHeader(): Promise<HeadersInit> {
  const token = await getAccessToken();

  if (!token) {
    return {
      "Content-Type": "application/json",
    };
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
