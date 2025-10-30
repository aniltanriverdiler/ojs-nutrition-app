import Footer from "@/components/layout/Footer";
import MenuNavigation from "@/components/layout/MenuNavigation";
import Navbar from "@/components/layout/Navbar";
import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <MenuNavigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default RoutesLayout;
