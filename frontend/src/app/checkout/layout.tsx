// frontend/src/app/checkout/layout.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import OrderSummary from "@/features/checkout/_components/OrderSummary";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Header, Content, Footer (Half of the page) */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white">
        {/* Minimal Header - Logo only */}
        <header className="py-4 lg:py-8 px-4 sm:px-6 lg:px-20">
          <div className="flex flex-row items-center justify-between gap-2">
            <Link href="/">
              <Image
                src="/icons/logo-black-svg.svg"
                alt="OJS Nutrition Logo"
                width={171}
                height={38}
                priority
                className="cursor-pointer"
              />
            </Link>
            <div className="flex flex-col items-end gap-1">
              <p className="text-xl font-bold">Anıl Tanrıverdiler</p>
              <p className="text-gray-400 font-semibold">tanriverdileranil@gmail.com</p>
            </div>
          </div>
        </header>

        {/* Checkout Content */}
        <main className="flex-1 py-4 lg:py-8 px-4 sm:px-6 lg:px-20">{children}</main>

        {/* Minimal Footer - Links only */}
        <footer className="py-4 lg:py-6 px-4 sm:px-6 lg:px-20">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 items-center justify-center">
            <Link href="/faq" className="hover:text-gray-900">
              Para İade Politikası 
            </Link>
            <Link href="/faq" className="hover:text-gray-900">
              Gizlilik Politikası
            </Link>
            <Link href="/faq" className="hover:text-gray-900">
              Hizmet Şartları
            </Link>
          </div>
        </footer>
      </div>

      {/* Right Side - Gray Area (Half of the page) */}
      <div className="hidden lg:block w-1/2 bg-gray-100">
        <div className="w-full max-w-md mx-auto">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
