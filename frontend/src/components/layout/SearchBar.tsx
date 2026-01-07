"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Loader2, X } from "lucide-react";
import { searchProducts } from "@/lib/api/products";
import { Product } from "@/types/product";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // To fix image URLs
  const MEDIA_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/v1$/, "") ||
    "https://fe1111.projects.academy.onlyjs.com";

  // Debounce: User stops typing for 300ms, then search
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        try {
          const products = await searchProducts(query);
          setResults(products);
          setIsOpen(true);
        } catch (error) {
          console.error("Arama hatası:", error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        // If menu is open or input has value, clear
        if (query.length > 0 || isOpen) {
          handleClear();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [query, isOpen]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div
      ref={searchRef}
      className="relative w-full max-w-[600px] flex items-center"
    >
      <InputGroup className="h-10 w-full z-50 relative flex items-center">
        <InputGroupInput
          placeholder="200+'den fazla üründen ara"
          className="text-black font-medium placeholder:text-gray-600 placeholder:font-medium pl-4"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length >= 2) setIsOpen(true);
          }}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
        />
        <InputGroupAddon align="inline-end" className="pr-[4px]">
          <InputGroupButton
            variant="outline"
            className="bg-gray-500 hover:bg-gray-700 text-white hover:text-white px-6 border-l-0 rounded-l-none h-10 w-12 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (query.length > 0) {
                handleClear();
              }
            }}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : query.length > 0 ? (
              <div className="flex items-center justify-center w-full h-full">
                <X className="w-5 h-5 cursor-pointer" />
              </div>
            ) : (
              <span className="text-sm font-medium">ARA</span>
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Search Results Dropdown */}
      {isOpen && (results.length > 0 || query.length >= 2) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-[100] max-h-[500px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((product) => {
                const hasDiscount =
                  product.price_info.discounted_price !== null;
                const currentPrice = hasDiscount
                  ? product.price_info.discounted_price
                  : product.price_info.total_price;
                const oldPrice = hasDiscount
                  ? product.price_info.total_price
                  : null;

                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-md">
                      <Image
                        src={
                          product.photo_src.startsWith("http")
                            ? product.photo_src
                            : `${MEDIA_BASE_URL}${product.photo_src}`
                        }
                        alt={product.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 truncate">
                        {product.short_explanation}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="font-bold text-gray-900">
                        {Math.floor(currentPrice || 0).toLocaleString("tr-TR")}{" "}
                        TL
                      </span>
                      {oldPrice && (
                        <span className="text-xs text-red-500 line-through font-medium">
                          {oldPrice.toLocaleString("tr-TR")} TL
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
              <Link
                href={`/products?search=${query}`}
                className="block text-center py-3 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tüm sonuçları gör ({results.length})
              </Link>
            </div>
          ) : (
            !isLoading && (
              <div className="p-8 text-center text-gray-500">
                <p>&quot;{query}&quot; ile ilgili ürün bulunamadı.</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
