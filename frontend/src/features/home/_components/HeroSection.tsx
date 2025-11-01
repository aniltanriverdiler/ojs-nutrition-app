import { Package, ShieldCheck, Smile } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    /* Navigation Menu Description */
    <div className="hidden md:flex md:px-5 flex-row xl:gap-24 py-2 items-center justify-center bg-gray-200 shadow-md">
      {/* Cargo Section */}
      <p className="flex flex-row items-center xl:gap-2 text-xs md:text-center">
        <span className="flex flex-row items-center gap-2 font-bold">
          <Package className="w-5 h-5" />
          AYNI GÜN KARGO
        </span>
        <span>- 16:00'DAN ÖNCEKİ SİPARİŞLERDE</span>
      </p>

      {/* Cargo - 2 Section */}
      <p className="flex flex-row items-center xl:gap-2 text-xs md:text-center">
        <span className="flex flex-row items-center gap-2 font-bold">
          <Smile className="w-5 h-5" />
          ÜCRETSİZ KARGO
        </span>
        <span>- 100 TL ÜZERİ SİPARİŞLERDE</span>
      </p>

      {/* Safe Shopping Section */}
      <p className="flex flex-row items-center md:gap-2 text-xs md:text-center">
        <span className="flex flex-row items-center gap-2 font-bold">
          <ShieldCheck className="w-5 h-5" />
          GÜVENLİ ALIŞVERİŞ
        </span>
        <span>- 1.000.000+ MUTLU MÜŞTERİ</span>
      </p>
    </div>
  );
};

export default HeroSection;
