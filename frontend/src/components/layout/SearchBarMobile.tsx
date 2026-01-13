"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { SearchIcon, Loader2 } from "lucide-react";
import { searchProducts } from "@/lib/api/products";
import { Product } from "@/types/product";

const SearchBarMobile = () => {
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
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full">
      <InputGroup className="bg-gray-100">
        <InputGroupInput
          placeholder="200+'den fazla üründen ara"
          className="placeholder:text-black placeholder:text-sm placeholder:font-medium"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length >= 2) setIsOpen(true);
          }}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
        />
        <InputGroupAddon>
          {isLoading ? (
            <Loader2 className="text-black w-5 h-5 animate-spin" />
          ) : (
            <SearchIcon className="text-black" />
          )}
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" className="text-black">
          {results.length > 0
            ? `${results.length} sonuç`
            : "200+'den fazla sonuç"}
        </InputGroupAddon>
      </InputGroup>

      {/* Search Results Dropdown */}
      {isOpen && (results.length > 0 || query.length >= 2) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-[100] max-h-[400px] overflow-y-auto">
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
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none"
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                  >
                    <div className="relative w-14 h-14 shrink-0 bg-white rounded-md">
                      <Image
                        src={
                          product.photo_src.startsWith("http")
                            ? product.photo_src
                            : `${MEDIA_BASE_URL}${product.photo_src}`
                        }
                        alt={product.name}
                        fill
                        className="object-contain p-1 rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-600 truncate">
                        {product.short_explanation}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-bold text-gray-900 text-sm">
                          {Math.floor(currentPrice || 0).toLocaleString(
                            "tr-TR"
                          )}{" "}
                          TL
                        </span>
                        {oldPrice && (
                          <span className="text-xs text-red-500 line-through">
                            {oldPrice.toLocaleString("tr-TR")} TL
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
              <Link
                href={`/products?search=${query}`}
                className="block text-center py-3 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
              >
                Tüm sonuçları gör ({results.length})
              </Link>
            </div>
          ) : (
            !isLoading && (
              <div className="p-6 text-center text-gray-500">
                <p className="text-sm">
                  &quot;{query}&quot; ile ilgili ürün bulunamadı.
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBarMobile;
