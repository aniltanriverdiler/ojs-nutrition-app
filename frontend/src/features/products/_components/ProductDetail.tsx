// frontend/src/features/products/_components/ProductDetail.tsx
import React from "react";

interface ProductDetailProps {
  id: string;
}

export default function ProductDetail({ id }: ProductDetailProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Ürün Detay Sayfası</h1>
        <p className="text-gray-600 mb-2">Ürün ID: {id}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Ürün Görseli</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Ürün Adı</h2>
            <p className="text-xl text-green-600 font-bold mb-4">299.99 TL</p>
            <p className="text-gray-600 mb-6">
              Ürün açıklaması buraya gelecek...
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
