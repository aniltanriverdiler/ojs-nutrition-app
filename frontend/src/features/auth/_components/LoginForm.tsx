"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@/components/ui/button-group";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir email adresi giriniz."),
  password: z.string().min(1, "Şifre alanı boş bırakılamaz."),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  // 1. Define your form.
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginFormValues) {
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Giriş işlemi başarısız oldu.");
        toast.error(data?.message || "Giriş sırasında bir hata oluştu.");
        return;
      }

      // Login successful, redirect to home page
      toast.success("Giriş işlemi başarılı oldu.");

      // Clear form values
      form.reset();

      // Redirect to home page
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      setError("Sunuya ulasılamadı. Lütfen daha sonra tekrar deneyiniz.");
      console.error(error);
      toast.error("Sunuya ulasılamadı. Lütfen daha sonra tekrar deneyiniz.");
    }
  }

  return (
    <>
      {error && (
        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      {/* Form Section */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Section */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="mb-1">*E-Posta</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-lg"
                    placeholder="E-Posta"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Section */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1">*Şifre</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-lg"
                    placeholder="Şifre"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*Forgot Password Section */}
          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-sm font-semibold text-primary underline"
            >
              Şifremi Unuttum?
            </Link>
          </div>
          <div className="flex justify-end mb-5">
            <Button
              type="submit"
              className="w-full bg-primary text-white font-semibold text-lg py-6 rounded-lg cursor-pointer"
            >
              GİRİŞ YAP
            </Button>
          </div>
        </form>
      </Form>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Google Login */}
        <ButtonGroup className="w-full border border-gray-300 bg-white hover:bg-gray-50 cursor-pointer rounded-md overflow-hidden">
          <Button
            type="button"
            variant="ghost"
            className="flex items-center justify-center px-2 py-6 hover:bg-transparent border-r cursor-pointer"
            onClick={() => console.log("Google ile giriş")}
          >
            <Image
              src="/icons/google-logo-svg.svg"
              alt="Google"
              width={24}
              height={24}
            />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex flex-col px-0 gap-0 justify-center items-center mt-1 hover:bg-transparent cursor-pointer"
            onClick={() => console.log("Google ile giriş")}
          >
            <span className="text-start text-sm text-gray-800 mr-2 p-0">
              Google
            </span>
            <span className="text-xs font-normal text-gray-600 ml-2">
              ile Giriş Yap
            </span>
          </Button>
        </ButtonGroup>

        {/* Facebook Login */}
        <ButtonGroup className="w-full border border-gray-300 bg-[#3A5A98] text-white hover:bg-[#3A5A98]/90 cursor-pointer rounded-md overflow-hidden">
          <Button
            type="button"
            variant="ghost"
            className="flex items-center justify-center px-2 py-6 hover:bg-transparent border-r border-white cursor-pointer"
            onClick={() => console.log("Facebook ile giriş")}
          >
            <Image
              src="/icons/facebook-logo-svg.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex flex-col px-0 gap-0 justify-center items-center mt-1 hover:bg-transparent cursor-pointer"
            onClick={() => console.log("Facebook ile giriş")}
          >
            <span className="text-start text-sm text-white ml-2 p-0">
              Facebook
            </span>
            <span className="text-xs font-normal text-white ml-2">
              ile Giriş Yap
            </span>
          </Button>
        </ButtonGroup>

        {/* Apple Login */}
        <ButtonGroup className="w-full border border-gray-300 bg-black text-white hover:bg-black/90 cursor-pointer rounded-md overflow-hidden">
          <Button
            type="button"
            variant="ghost"
            className="flex items-center justify-center px-2 py-6 hover:bg-transparent border-r cursor-pointer"
            onClick={() => console.log("Google ile giriş")}
          >
            <Image
              src="/icons/apple-logo-svg.svg"
              alt="Apple"
              width={24}
              height={24}
            />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex flex-col px-0 gap-0 justify-center items-center mt-1 hover:bg-transparent cursor-pointer"
            onClick={() => console.log("Apple ile giriş")}
          >
            <span className="text-start text-sm text-white mr-4 p-0">
              Apple
            </span>
            <span className="text-xs font-normal text-white ml-2">
              ile Giriş Yap
            </span>
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default LoginForm;
