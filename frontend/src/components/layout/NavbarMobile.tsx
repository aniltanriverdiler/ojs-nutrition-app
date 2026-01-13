"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenuNavigation from "./MobileMenuNavigation";
import MobileCart from "./MobileCart";
import SearchBarMobile from "./SearchBarMobile";

const NavbarMobile = () => {
  return (
    <>
      <header className="grid grid-cols-3 gap-5 py-5 px-4 shadow-md">
        {/* Mobile Menu Navigation */}
        <div>
          <MobileMenuNavigation />
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/icons/logo-black-svg.svg"
              alt="OJS Nutrition Logo"
              width={141}
              height={30}
              priority
            />
          </Link>
        </div>

        {/* Shopping Cart */}
        <div className="text-right mr-2">
          <MobileCart />
        </div>
      </header>

      {/* Mobile Search Bar */}
      <div className="px-4 py-2">
        <SearchBarMobile />
      </div>
    </>
  );
};

export default NavbarMobile;
