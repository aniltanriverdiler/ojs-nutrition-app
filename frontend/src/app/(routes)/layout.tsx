import Footer from "@/components/layout/Footer";
import FooterMobile from "@/components/layout/FooterMobile";
import MenuNavigation from "@/components/layout/MenuNavigation";
import Navbar from "@/components/layout/Navbar";
import NavbarMobile from "@/components/layout/NavbarMobile";
import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:block">
          <Navbar />
          <MenuNavigation />
        </div>
        {/* Mobile Navbar Layout */}
        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <main className="flex-1">{children}</main>
        {/* Desktop/Tablet Footer Layout */}
        <div className="hidden md:block">
          <Footer />
        </div>
        {/* Mobile Footer Layout */}
        <div className="md:hidden">
          <FooterMobile />
        </div>
      </div>
    </>
  );
}

export default RoutesLayout;
