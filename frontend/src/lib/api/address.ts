import type { Address } from "@/types/account";

// Backend Address Format (matching actual API response)
interface BackendAddress {
  id: string;
  title: string;
  first_name?: string;
  last_name?: string;
  full_address: string;
  country?: {
    id: number;
    name: string;
  };
  region?: {
    id: number;
    name: string;
  };
  subregion?: {
    id: number;
    name: string;
  };
  phone_number?: string;
  apartment?: string;
}

// Map backend address to frontend format
function mapBackendAddress(backendAddr: any): Address {
  return {
    id: backendAddr.id || "",
    title: backendAddr.title || "Adres",
    name: backendAddr.first_name || "Kullanıcı",
    surname: backendAddr.last_name || "",
    address: backendAddr.full_address || "",
    apartment: backendAddr.apartment || "",
    city: backendAddr.region?.name || backendAddr.city || "İstanbul",
    district: backendAddr.subregion?.name || backendAddr.district || "",
    // Remove country code for cleaner display
    phone: backendAddr.phone_number?.replace(/^\+90/, "0") || "",
    phoneCountryCode: "+90",
  };
}

// Get addresses (GET /account/addresses)
export async function getAddresses(): Promise<Address[]> {
  try {
    const res = await fetch("/api/account/addresses", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Address fetch failed with status:", res.status);
      return [];
    }

    const json = await res.json();

    // Backend might return data in different formats
    const results = json.results || json.data?.results || json.data || [];

    let backendAddresses = [];

    if (Array.isArray(results)) {
      backendAddresses = results;
    } else {
      console.warn("Unexpected backend address format:", json);
      return [];
    }

    // Map backend format to frontend format
    return backendAddresses.map(mapBackendAddress);
  } catch (error) {
    console.error("getAddresses Error:", error);
    return [];
  }
}

// Export Address type for convenience
export type { Address };
