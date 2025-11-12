// frontend/src/app/(routes)/account/layout.tsx

import React from "react";
import AccountSidebar from "@/features/account/_components/AccountSidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-16">
        {/* Left Sidebar */}
        <aside className="w-full">
          <h1 className="text-4xl font-bold text-center mb-6">Hesabım</h1>
          <AccountSidebar />
        </aside>

        {/* Right Content Area */}
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
