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
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const accountFormSchema = z.object({
  name: z.string().min(1, "İsim alanı boş bırakılamaz."),
  surname: z.string().min(1, "Soyisim alanı boş bırakılamaz."),
  phone: z.string().min(1, "Telefon alanı boş bırakılamaz."),
  email: z
    .string()
    .min(1, "Email alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir email adresi giriniz."),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const AccountForm = () => {
  // 1. Define your form.
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: AccountFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <h3 className="text-start text-xl text-gray-800 font-bold mb-8">
        Hesap Bilgilerim
      </h3>

      {/* Form Section */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Section */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 font-semibold mb-1">
                    *Ad
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
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
                <FormItem>
                  <FormLabel className="text-gray-800 font-semibold mb-1">
                    *Soyad
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="Soyad"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Phone Section */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              const formatPhoneNumber = (value: string) => {
                // Remove all non-digit characters
                const phoneNumber = value.replace(/\D/g, "");

                // Format: 0XXX XXX XX XX
                if (phoneNumber.length <= 4) {
                  return phoneNumber;
                } else if (phoneNumber.length <= 7) {
                  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
                } else if (phoneNumber.length <= 9) {
                  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
                    4,
                    7
                  )} ${phoneNumber.slice(7)}`;
                } else {
                  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
                    4,
                    7
                  )} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
                }
              };

              return (
                <FormItem>
                  <FormLabel className="text-gray-800 font-semibold mb-1">
                    Telefon
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="0XXX XXX XX XX"
                      maxLength={14}
                      {...field}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        field.onChange(formatted);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Email Section */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-semibold mb-1">
                  E-Posta
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="E-Posta"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Commercial Consent Section */}
          <div className="flex items-start gap-3">
            <Checkbox id="account-consent" className="mt-1" />
            <label
              htmlFor="account-consent"
              className="space-y-1 text-xs text-gray-600 font-semibold mt-1"
            >
              <span>
                Kampanyalardan haberdar olmak için{" "}
                <Link href="#" className="font-bold underline text-gray-900">
                  Ticari Elektronik İleti Onayı
                </Link>{" "}
                metnini okudum, onaylıyorum. Tarafınızdan gönderilecek ticari
                elektronik iletileri almak istiyorum.
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="outline"
              className="text-lg font-semibold bg-black hover:bg-black/90 text-white hover:text-white p-7 cursor-pointer"
            >
              KAYDET
            </Button>
          </div>
        </form>
      </Form>

      {/* Account Deletion Section */}
      <div className="mt-10 pt-8 border-t border-gray-300 mb-10">
        <h3 className="text-start text-xl text-gray-800 font-bold mb-4">
          Hesap Silme Talebi
        </h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed mr-10">
          Hesabınızı silmek istiyorsanız, aşağıdaki butona tıklayarak hesap
          silme talebinde bulunabilirsiniz. Hesap silme işlemi geri alınamaz ve
          tüm verileriniz kalıcı olarak silinecektir.
        </p>
        <div className="flex justify-start">
          <Button
            type="button"
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6 px-8 rounded-lg cursor-pointer"
            onClick={() => {
              // Handle account deletion request
              console.log("Hesap silme talebi");
            }}
          >
            HESABIMI SİL
          </Button>
        </div>
      </div>
    </>
  );
};

export default AccountForm;
