"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserIcon, MapPinIcon, Package2Icon } from "lucide-react";

const menuItems = [
  {
    href: "/account",
    label: "Hesap Bilgilerim",
    icon: UserIcon,
  },
  {
    href: "/account/orders",
    label: "Siparişlerim",
    icon: Package2Icon,
  },
  {
    href: "/account/addresses",
    label: "Adreslerim",
    icon: MapPinIcon,
  },
];

const AccountSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-center md:justify-start md:flex-col gap-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href !== "/account" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors 
        ${
          isActive
            ? "bg-black text-white font-bold"
            : "text-gray-800 hover:bg-gray-100 font-semibold"
        }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default AccountSidebar;
