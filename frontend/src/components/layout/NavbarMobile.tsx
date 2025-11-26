"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import MobileMenuNavigation from "./MobileMenuNavigation";
import MobileCart from "./MobileCart";

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
        <InputGroup className="bg-gray-100">
          <InputGroupInput
            placeholder="Aradığınız ürünü yazınız."
            className="placeholder:text-black"
          />
          <InputGroupAddon>
            <SearchIcon className="text-black" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end" className="text-black">
            12 sonuç
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
};

export default NavbarMobile;
