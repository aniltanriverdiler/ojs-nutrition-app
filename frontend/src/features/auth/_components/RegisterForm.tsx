"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
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
import { ButtonGroup } from "@/components/ui/button-group";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

const registerFormSchema = z.object({
  name: z.string().min(1, "İsim alanı boş bırakılamaz."),
  surname: z.string().min(1, "Soyisim alanı boş bırakılamaz."),
  email: z
    .string()
    .min(1, "Email alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir email adresi giriniz."),
  password: z.string().min(1, "Şifre alanı boş bırakılamaz."),
});

type RegisterFormValues = z.infer<typeof registerFormSchema>;

const RegisterForm = () => {
  // 1. Define your form.
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: RegisterFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      {/* Social Login Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
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

      {/* Form Section */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Section */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Ad</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-lg"
                      placeholder="Ad"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Surname Section */}
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Soyad</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-lg"
                      placeholder="Soyad *"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email Section */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>E-Posta</FormLabel>
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
              <FormItem className="">
                <FormLabel>Şifre</FormLabel>
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

          {/* Commercial Consent Section */}
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex items-start gap-3">
              <Checkbox id="commercial-consent" className="mt-1" />
              <label
                htmlFor="commercial-consent"
                className="space-y-1 text-sm text-gray-700"
              >
                <span>
                  Kampanyalardan haberdar olmak için{" "}
                  <Link
                    href="#"
                    className="font-semibold underline text-gray-900"
                  >
                    Ticari Elektronik İleti Onayı
                  </Link>{" "}
                  metnini okudum, onaylıyorum. Tarafınızdan gönderilecek ticari
                  elektronik iletileri almak istiyorum.
                </span>
              </label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="membership-consent" className="mt-1" />
              <label
                htmlFor="membership-consent"
                className="space-y-1 text-sm text-gray-700"
              >
                <span>
                  <Link
                    href="#"
                    className="font-semibold underline text-gray-900"
                  >
                    Üyelik sözleşmesini
                  </Link>{" "}
                  ve{" "}
                  <Link
                    href="#"
                    className="font-semibold underline text-gray-900"
                  >
                    KVKK Aydınlatma Metnini
                  </Link>{" "}
                  okudum, kabul ediyorum.
                </span>
              </label>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end mb-5">
            <Button
              type="submit"
              className="w-full bg-primary text-white font-semibold text-lg py-6 rounded-lg cursor-pointer"
            >
              ÜYE OL
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-6 text-sm text-gray-700">
        Zaten hesabınız var mı?{" "}
        <Link
          href="/auth/login"
          className="text-primary font-semibold underline"
        >
          Giriş Yap
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
