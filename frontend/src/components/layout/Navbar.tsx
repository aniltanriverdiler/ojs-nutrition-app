"use client";
import Image from "next/image";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "../ui/badge";

const Navbar = () => {
  return (
    <header className="hidden md:block bg-white my-5 px-4 sm:px-4 md:px-12 lg:px-24 xl:px-18 2xl:px-56">
      <div className="container flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/">
          <Image
            src="/icons/logo-black-svg.svg"
            alt="OJS Nutrition Logo"
            width={171}
            height={38}
            priority
            className="mr-5 md:mr-0"
          />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4 lg:gap-5">
          {/* SearchBar */}
          <div className="hidden md:block">
            <InputGroup className="h-10">
              <InputGroupInput
                placeholder="Aradığınız ürünü yazınız."
                className="rounded-r-none"
              />
              <InputGroupAddon align="inline-end" className="pr-0">
                <InputGroupButton
                  variant="outline"
                  className="bg-gray-500 text-white px-4 lg:px-6 py-5 cursor-pointer rounded-l-none ml-12"
                >
                  <SearchIcon className="w-4 h-4" />
                  <span className="hidden lg:inline">Ara</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Search"
          >
            <SearchIcon className="w-5 h-5" />
          </Button>

          {/* Account Section */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="px-3 sm:px-4 lg:px-6 py-5 whitespace-nowrap cursor-pointer"
              >
                <UserIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Hesap</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" align="center">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <UserIcon className="w-4 h-4" />
                    Üye Girişi
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/register"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <UserPlusIcon className="w-4 h-4" />
                  Üye Ol
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart Section */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="bg-gray-500 text-white px-3 sm:px-4 lg:px-6 py-5 relative cursor-pointer"
              >
                <ShoppingCartIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Sepet</span>
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full flex items-center justify-center"
                >
                  0
                </Badge>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full lg:max-w-lg">
              <SheetHeader>
                <SheetTitle className="text-2xl text-center font-bold">
                  Sepetim
                </SheetTitle>
                <SheetDescription className="text-center">
                  Sepetinizdeki ürünleri görüntüleyebilirsiniz.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col h-full">
                {/* Cart Content */}
                <div className="flex-1 py-6">
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingCartIcon className="w-16 h-16 text-gray-500 mb-4" />
                    <p className="text-gray-500 text-lg">
                      Sepetinizde ürün bulunmamaktadır.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cart Footer */}
              <SheetFooter className="flex-col gap-2">
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    className="w-full border-gray-500 text-gray-600 hover:bg-gray-50 hover:text-gray-600 cursor-pointer"
                  >
                    Alışverişe Devam Et
                  </Button>
                </SheetClose>
                <Button className="w-full bg-gray-500 text-white hover:bg-gray-600 cursor-pointer">
                  Sepete Git
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
