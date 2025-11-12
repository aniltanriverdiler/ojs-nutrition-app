"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = React.useState<"login" | "register">(
    "login"
  );

  // Determine active tab from URL
  useEffect(() => {
    if (pathname === "/auth/register") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  }, [pathname]);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    const tab = value as "login" | "register";
    setActiveTab(tab);

    // Update URL (but page doesn't refresh)
    if (tab === "register") {
      router.push("/auth/register", { scroll: false });
    } else {
      router.push("/auth/login", { scroll: false });
    }
  };

  return (
    <div className="container mx-auto max-w-lg px-4 py-12">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full border shadow-md border-gray-300 rounded-lg p-8"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Giriş Yap</TabsTrigger>
          <TabsTrigger value="register">Üye Ol</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="mt-6">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register" className="mt-6">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;
