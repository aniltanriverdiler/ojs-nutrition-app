// Price Information Types
export interface PriceInfo {
  profit: number | null;
  total_price: number;
  discounted_price: number | null;
  price_per_servings: number;
  discount_percentage: number | null;
}

// Basic Product Type (for product lists)
export interface Product {
  name: string;
  short_explanation: string;
  slug: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
  id: string;
}

// Variant Types
export interface ProductSize {
  gram?: number;
  pieces: number;
  total_services: number;
}

export interface ProductVariant {
  id: string;
  size: ProductSize;
  aroma: string;
  price: PriceInfo;
  photo_src: string;
  is_available: boolean;
}

// Nutritional Content Types
export interface Ingredient {
  aroma: string | null;
  value: string;
}

export interface NutritionFact {
  name: string;
  amounts: string[];
}

export interface NutritionFacts {
  ingredients: NutritionFact[];
  portion_sizes: string[];
}

export interface AminoAcidFacts {
  ingredients: NutritionFact[];
  portion_sizes: string[];
}

export interface NutritionalContent {
  ingredients: Ingredient[];
  nutrition_facts: NutritionFacts;
  amino_acid_facts: AminoAcidFacts | null;
}

// Product Explanation Type
export interface ProductExplanation {
  usage: string;
  features: string;
  description: string;
  nutritional_content: NutritionalContent;
}

// Detailed Product Type
export interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  short_explanation: string;
  explanation: ProductExplanation;
  main_category_id: string;
  sub_category_id: string;
  tags: string[];
  variants: ProductVariant[];
  comment_count: number;
  average_star: number;
}

// API Response Types
export interface ProductsListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}

export interface ProductsListResponse {
  status: string;
  data: ProductsListData;
}

export interface ProductResponse {
  status: string;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
  };
}

export interface ProductsDetailsResponse {
  status: string;
  data: ProductDetail[];
}

// Best Seller Product Type (simplified)
export interface BestSellerProduct {
  name: string;
  short_explanation: string;
  price_info: PriceInfo;
  photo_src: string;
  comment_count: number;
  average_star: number;
}

export interface ProductsBestSellersResponse {
  status: string;
  data: BestSellerProduct[];
}
