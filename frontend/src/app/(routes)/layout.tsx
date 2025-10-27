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
      <Navbar />
      <MenuNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default RoutesLayout;