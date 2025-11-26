import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const MobileCart = () => {
  return (
    <>
      <div className="text-right mr-2">
        <Sheet>
          <SheetTrigger asChild>
            <button className="relative inline-flex items-center justify-center cursor-pointer">
              <ShoppingCartIcon className="w-7 h-7" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center text-xs font-semibold"
              >
                0
              </Badge>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 sm:w-96 p-0 flex flex-col h-screen"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="p-4 shrink-0">
                <SheetTitle className="text-2xl text-center font-bold">
                  Sepetim
                </SheetTitle>
                <SheetDescription className="text-center">
                  Sepetinizdeki ürünleri görüntüleyebilirsiniz.
                </SheetDescription>
              </SheetHeader>

              {/* Cart Content */}
              <div className="flex-1 py-6 px-4 overflow-y-auto">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCartIcon className="w-16 h-16 text-gray-500 mb-4" />
                  <p className="text-gray-500 text-lg">
                    Sepetinizde ürün bulunmamaktadır.
                  </p>
                </div>
              </div>

              {/* Cart Footer */}
              <SheetFooter className="flex-col gap-2 p-4 shrink-0">
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileCart;
