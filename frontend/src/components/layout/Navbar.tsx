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
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  LogOutIcon,
  SearchIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { CartButton } from "@/features/cart/_components/CartButton";

const Navbar = () => {
  const initializeCart = useCartStore((state) => state.initializeCart);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const logout = useUserStore((state) => state.logout);

  const router = useRouter();

  useEffect(() => {
    // If user is authenticated, load the cart
    if (isAuthenticated) {
      initializeCart();
    }
  }, [isAuthenticated, initializeCart]);

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
                <span className="hidden lg:inline">
                  {isAuthenticated ? "Hesap" : "Hesap"}
                </span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-28" align="center">
              {isAuthenticated ? (
                <>
                  {/* Account */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/account"
                      className="flex items-center gap-2 cursor-pointer justify-center"
                    >
                      <UserIcon className="w-4 h-4" />
                      Hesap
                    </Link>
                  </DropdownMenuItem>

                  {/* Orders */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/account/orders"
                      className="flex items-center gap-2 cursor-pointer justify-center"
                    >
                      <UserIcon className="w-4 h-4" />
                      Siparişlerim
                    </Link>
                  </DropdownMenuItem>

                  {/* Logout */}
                  <DropdownMenuItem
                    className="cursor-pointer justify-center"
                    onClick={async () => {
                      await logout(); // Clears the cookie and state
                      router.push("/");
                    }}
                  >
                    <LogOutIcon className="w-4 h-4" />
                    Çıkış Yap
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  {/* Login */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/auth/login"
                      className="flex items-center gap-2 cursor-pointer justify-center"
                    >
                      <UserIcon className="w-4 h-4" />
                      Üye Girişi
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  {/* Register */}
                  <DropdownMenuItem asChild>
                    <Link
                      href="/auth/register"
                      className="flex items-center gap-2 cursor-pointer justify-center"
                    >
                      <UserPlusIcon className="w-4 h-4" />
                      Üye Ol
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart Section */}
          <CartButton />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
