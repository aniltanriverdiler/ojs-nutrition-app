const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Country {
    id: number;
    name: string;
}

export interface Region {
    id: number;
    name: string;
    country: Country;
}

export interface Subregion {
    id: number;
    name: string;
    region: Region;
}

// Get all countries from API
export async function getCountries(limit = 300) {
    const res = await fetch(`${BASE_URL}/world/countries?limit=${limit}`, { cache: "no-store" });
    if(!res.ok) throw new Error("Failed to fetch countries");
    const json = await res.json();
    return json.data.results as Country[];
}

// Get all regions from API
export async function getRegions(countryName: string, limit = 1000) {
    const res = await fetch(`${BASE_URL}/world/region?country-name=${countryName}&limit=${limit}`, { cache: "no-store" });
    if(!res.ok) throw new Error("Failed to fetch regions");
    const json = await res.json();
    return json.data.results as Region[];
}

// Get all subregions from API
export async function getSubregions(regionName: string, limit = 1000) {
  const res = await fetch(`${BASE_URL}/world/subregion?region-name=${regionName}&limit=${limit}`, { cache: "no-store" });
  if(!res.ok) throw new Error("Failed to fetch subregions");
  const json = await res.json();
  return json.data.results as Subregion[];
}