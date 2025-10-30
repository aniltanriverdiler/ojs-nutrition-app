// frontend/src/features/products/_components/CategoryListing.tsx
import React from "react";
import {
  CATEGORY_NAMES,
  CATEGORY_DESCRIPTIONS,
} from "@/lib/constants/categories";

interface CategoryListingProps {
  slug: keyof typeof CATEGORY_NAMES;
}

export default function CategoryListing({ slug }: CategoryListingProps) {
  const title = CATEGORY_NAMES[slug];
  const desc = CATEGORY_DESCRIPTIONS[slug];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 text-lg">{desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <p className="text-gray-500">Ürün {i}</p>
            </div>
            <h3 className="font-semibold text-lg mb-2">Ürün Adı {i}</h3>
            <p className="text-gray-600 text-sm mb-3">Kısa açıklama...</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">
                299.99 TL
              </span>
              <button className="bg-black text-white px-4 py-2 rounded text-sm">
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
