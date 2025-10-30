import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const MenuNavigation = () => {
  return (
    <div className="flex flex-row mx-auto py-1 gap-30 bg-black text-white justify-center">
      {/* Protein Navigation Menu */}
      <div>
        <NavigationMenu className="[&_div.absolute]:-left-[100px] [&_div.absolute]:translate-x-1/3">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                PROTEİN
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 md:left-1/2 md:-translate-x-1/2">
                <div className="grid grid-cols-[350px_1fr] gap-6 lg:w-[900px]">
                  {/* Best Sellers Section */}
                  <div className="flex flex-col gap-5 bg-gray-300 p-5 pr-0 w-[350px]">
                    <h4 className="text-lg font-bold ml-3">EN ÇOK SATANLAR</h4>
                    <Link href="/products/1">
                      {/* Whey Protein Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">WHEY PROTEİN</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              20055 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/2">
                      {/* Whey Isolate Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">WHEY ISOLATE</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1597 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Mass Gainer Section */}
                    <Link href="/products/3">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">MASS GAINER</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1686 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/4">
                      {/* Protein Bar Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">PROTEIN BAR</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2182 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/5">
                      {/* Pea Protein Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">PEA PROTEIN</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2562 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Proteins Section */}
                  <div className="flex flex-row gap-20 pt-5 pl-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold">PROTEİN</h4>
                      <Link href="/" className="text-sm font-extrabold">
                        PROTEİNLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Whey Protein
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Whey Isolate
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Clear Whey
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Bezelye Proteini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Kolajen Proteini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Süt Proteini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Soya Proteini
                      </Link>
                    </div>
                    {/* Protein Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        PROTEİNLİ ÜRÜNLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Mass Gainer
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Bar
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Meal
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Bezelye Proteini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Coffee
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Collagen Coffee
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Vegan Gainer
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Sports Nutrition Menu */}
      <div>
        <NavigationMenu className="[&_div.absolute]:-left-[-420px] [&_div.absolute]:-translate-x-1/2">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                SPOR GIDALARI
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 md:left-1/2 md:-translate-x-1/2">
                <div className="grid grid-cols-[350px_1fr] gap-6 lg:w-[1250px]">
                  {/* Best Sellers Section */}
                  <div className="flex flex-col gap-5 bg-gray-300 p-5 pr-0 w-[350px]">
                    <h4 className="text-lg font-bold ml-3">EN ÇOK SATANLAR</h4>
                    <Link href="/products/1">
                      {/* Creatine Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">CREATİNE</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              20055 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/2">
                      {/* Pre-Workout Supreme Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">PRE-WORKOUT SUPREME</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1597 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Cream of Rice Section */}
                    <Link href="/products/3">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">CREAM OF RICE</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1686 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/4">
                      {/* BCAA+ Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">BCAA+</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2182 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/5">
                      {/* L-Carnitine Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">L-CARNITINE</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2562 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Amino Acids Section */}
                  <div className="flex flex-row gap-20 pt-5 pl-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold">SPOR GIDALARI</h4>
                      <Link href="/" className="text-sm font-extrabold">
                        AMİNO ASİTLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Creatine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        L-Carnitine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Creatine Creapure
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        BCAA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Glutamine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        EAA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Arginine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Taurine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Leucine
                      </Link>
                    </div>
                    {/* Pre-Workout Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        PRE-WORKOUT
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Pre-Workout Supreme
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        HydroPrime
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Thermo Burner
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Heavy Duty Pre-Workout
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Hydration
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Citrulline
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Supreme Pump
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Beta-Alanine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Betaine
                      </Link>
                    </div>
                    {/* Carbohydrates Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        KARBONHİDRATLAR
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Pirinç Kreması
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Mass Gainer
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Maltodekstrin
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Dekstroz
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Vegan Gainer
                      </Link>
                    </div>
                    {/* Other Supplements Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        DİĞER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Ultra Focus
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Gamer Hack
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Intra Workout
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Elektrolit Blend
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Hydration
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        CLA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Meal
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Health & Wellness Navigation Menu */}
      <div>
        <NavigationMenu className="[&_div.absolute]:-left-[-150px] [&_div.absolute]:-translate-x-1/2">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                SAĞLIK
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 md:left-1/2 md:-translate-x-1/2">
                <div className="grid grid-cols-[350px_1fr] gap-6 lg:w-[1250px]">
                  {/* Best Sellers Section */}
                  <div className="flex flex-col gap-5 bg-gray-300 p-5 pr-0 w-[350px]">
                    <h4 className="text-lg font-bold ml-3">EN ÇOK SATANLAR</h4>
                    <Link href="/products/1">
                      {/* Greens & Superfoods Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">GREENS & SUPERFOODS</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              20055 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/2">
                      {/* Green Detox+ Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">GREEN DETOX+</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1597 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Collagen Section */}
                    <Link href="/products/3">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">COLLAGEN</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1686 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Functional Supplements Section */}
                  <div className="flex flex-row gap-20 pt-5 pl-5 pb-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold">SAĞLIK</h4>
                      <Link href="/" className="text-sm font-extrabold">
                        FONKSİYONEL GIDALAR
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Collagen
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Deep Sleep
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Coffee
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Meal
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Probiyotik
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Collagen Coffee
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Digestion
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Tatlandırıcılar
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        MCT Oil
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Inulin
                      </Link>
                    </div>
                    {/* Greens & Superfoods Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        BİTKİ TOZLARI
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Greens & Superfoods
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Green Detox+
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Red Detox
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Brokoli Tozu
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Maca Kökü Tozu
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Spirulina Tozu
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Ispanak Tozu
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Maydanoz Tozu
                      </Link>
                    </div>
                    {/* Weight Loss Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        ZAYIFLAMA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        L-Carnitine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Thermo Burner
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        L-Carnitine Shot
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        CLA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Hunger Buster
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        CLA+
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Nutrition Menu */}
      <div>
        <NavigationMenu className="[&_div.absolute]:-left-[60px] [&_div.absolute]:-translate-x-1/2">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                GIDA
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 md:left-1/2 md:-translate-x-1/2">
                <div className="grid grid-cols-[350px_1fr] gap-6 lg:w-[650px]">
                  {/* Best Sellers Section */}
                  <div className="flex flex-col gap-5 bg-gray-300 p-5 pr-0 w-[350px]">
                    <h4 className="text-lg font-bold ml-3">EN ÇOK SATANLAR</h4>
                    <Link href="/products/1">
                      {/* Cream of Rice Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">CREAM OF RICE</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              20055 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/2">
                      {/* Protein Bar Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">PROTEİN BAR</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1597 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Peanut Butter Section */}
                    <Link href="/products/3">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">FISTIK EZMESİ</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1686 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/4">
                      {/* Flavor Powder Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">FLAVOR POWDER</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2182 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/5">
                      {/* Ketchup Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">KETÇAP</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2562 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Amino Acids Section */}
                  <div className="flex flex-row gap-20 pt-5 pl-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold">GIDA</h4>
                      <Link href="/" className="text-sm font-extrabold">
                        GIDA ÜRÜNLERİ
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Pirinç Kreması
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Protein Bar
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Fıstık Ezmeleri
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Düşük Kalorili Soslar
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Baharatlar
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Tatlandırıcılar
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Arginine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Sprey Zeytinyağı
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Vitamins & Supplements Navigation Menu */}
      <div>
        <NavigationMenu className="[&_div.absolute]:-left-[275px] [&_div.absolute]:-translate-x-1/2">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold bg-black! text-white! hover:bg-black! hover:text-white! focus:bg-black! focus:text-white! data-[state=open]:bg-black! data-[state=open]:text-white! data-[state=open]:hover:bg-black! data-[state=open]:hover:text-white! cursor-pointer">
                VİTAMİN
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0 md:left-1/2 md:-translate-x-1/2">
                <div className="grid grid-cols-[350px_1fr] gap-6 lg:w-[1400px]">
                  {/* Best Sellers Section */}
                  <div className="flex flex-col gap-5 bg-gray-300 p-5 pr-0 w-[350px]">
                    <h4 className="text-lg font-bold ml-3">EN ÇOK SATANLAR</h4>
                    <Link href="/products/1">
                      {/* Multivitamin Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">MULTİVİTAMİN</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              20055 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link href="/products/2">
                      {/* Omega-3 Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">OMEGA-3</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1597 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Thermo Burner Section */}
                    <Link href="/products/3">
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">THERMO BURNER</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              1686 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/4">
                      {/* ZMA Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">ZMA</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2182 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/products/5">
                      {/* T-Prime Section */}
                      <div className="flex flex-row gap-2 items-center">
                        <Image
                          src="/images/gold-whey.png"
                          alt="Protein 1"
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold">T-PRİME</p>
                          <div className="flex flex-row items-center">
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <Image
                              src="/icons/star-sharp-svg.svg"
                              alt="Star"
                              width={16}
                              height={16}
                            />
                            <p className="ml-2 text-sm font-semibold text-gray-800">
                              2562 Yorum
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Special Formulas Section */}
                  <div className="flex flex-row gap-12 pt-5 pl-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold">VİTAMİN</h4>
                      <Link href="/" className="text-sm font-extrabold">
                        ÖZEL FORMÜL ÜRÜNLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Thermo Burner
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        LVR
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        KDNY
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        T-Prime
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Hunger Buster
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Beauty Formula
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Relax
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Focus Formula
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Gamer Multivitamin
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        GDA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        C-Blocker
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Sleep Formula
                      </Link>
                    </div>
                    {/* Popular Supplements Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        POPÜLER TAKVİYELER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        ZMA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Thermo Burner
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Omega-3
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Multivitamin
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        C Vitamini Efervesan
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Kafein
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Collagen + Hyluronic
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Asit
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Glikozamin Kondroitin
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        MSM
                      </Link>
                    </div>
                    {/* Vitamins Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        VİTAMİNLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        C Vitamini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        B Vitamini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        D Vitamini
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        K Vitamini
                      </Link>
                    </div>
                    {/* Minerals Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        MİNERALLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Magnezyum
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Demir
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Krom
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Selenyum
                      </Link>
                    </div>
                    {/* Botanical Supplements Products Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        BİTKİSEL ÜRÜNLER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Green Detox+
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Milk Thistle
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Tribulus Terrestris
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Saw Palmetto
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        L-Theanine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Panax Ginseng
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        5-HTP
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        L-Tyrosine
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Rhodiola Rosea
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Ginkgo Biloba
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Beta Glukan
                      </Link>
                    </div>
                    {/* Other Vitamins Section */}
                    <div className="flex flex-col gap-2 mt-[30px]">
                      <Link href="/" className="text-sm font-extrabold">
                        DİĞER
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        CLA
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Bromelain
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Koenzim Q10
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Alpha GPC
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Glutatyon
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        NMN
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Hyaluronik Asit
                      </Link>
                      <Link href="/" className="text-sm font-semibold">
                        Laktoz
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* All Supplements Navigation Menu */}
      <div className="flex justify-center items-center">
        <Link href="/products" className="text-sm font-bold">
          TÜM ÜRÜNLER
        </Link>
      </div>
    </div>
  );
};

export default MenuNavigation;
