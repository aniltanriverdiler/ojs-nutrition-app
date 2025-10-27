import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MenuNavigation = () => {
  return (
    <div className="flex flex-row mx-auto py-1 gap-30 bg-black text-white justify-center">
      {/* Protein Navigation Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                PROTEİN
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Sports Nutrition Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                SPOR GIDALARI
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Health & Wellness Navigation Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                SAĞLIK
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Nutrition Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                GIDA
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Vitamins & Supplements Navigation Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                VİTAMİN
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* All Supplements Navigation Menu */}
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                TÜM ÜRÜNLER
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default MenuNavigation;
