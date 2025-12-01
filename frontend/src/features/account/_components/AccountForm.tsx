"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

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
import PasswordForm from "./PasswordForm";

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
  const [loading, setLoading] = useState(false);

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

  // Helper function to convert backend phone format to UI format
  const formatPhoneForDisplay = (phone: string): string => {
    if (!phone) return "";
    // Backend format: +905XXXXXXXXX -> UI format: 0XXX XXX XX XX
    const digits = phone.replace(/\D/g, "");
    const localPhone = digits.startsWith("90") ? "0" + digits.slice(2) : digits;
    
    // Format: 0XXX XXX XX XX
    if (localPhone.length === 11) {
      return `${localPhone.slice(0, 4)} ${localPhone.slice(4, 7)} ${localPhone.slice(7, 9)} ${localPhone.slice(9, 11)}`;
    }
    return localPhone;
  };

  // Fetch profile data when component mounts
  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/account/profile");
      const json = await res.json();

      // Ensure response shape matches form field names
      const userData = json.data || json; 

      if (userData) {
        form.reset({
          name: userData.first_name || "",
          surname: userData.last_name || "",
          phone: formatPhoneForDisplay(userData.phone_number || ""),
          email: userData.email || "",
        });
      }
    } catch (error) {
      console.error("Profil bilgileri yüklenemedi", error);
      toast.error("Profil bilgileri yüklenemedi.");
    }
  };

  // Fetch profile data when component mounts
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Define a submit handler.
  async function onSubmit(values: AccountFormValues) {
    setLoading(true);
    try {
      // Format phone number as (+905...)
      let rawPhone = values.phone.replace(/[^0-9]/g, "");
      if (rawPhone.startsWith("0")) rawPhone = rawPhone.substring(1);
      else if (!rawPhone.startsWith("90")) rawPhone = "90" + rawPhone;
      const formattedPhone = "+" + rawPhone;

      // Expected format by backend
      const payload = {
        first_name: values.name,
        last_name: values.surname,
        phone_number: formattedPhone,
      };

      const res = await fetch("/api/account/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json(); // Yanıtı oku

      if (!res.ok) {
        console.error("Profil Güncelleme Hatası:", data); // Detayı konsola bas

        // Varsa detaylı hata mesajlarını yakala
        if (data.reason) {
            const reasons = Object.entries(data.reason)
                .map(([key, msgs]) => `${key}: ${(msgs as any[]).join(", ")}`)
                .join(" | ");
            throw new Error(reasons);
        }
        
        throw new Error(data.error || data.message || "Güncelleme başarısız");
      }

      toast.success("Bilgileriniz güncellendi.");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Bir hata oluştu.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
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
                const phoneNumber = value.replace(/\D/g, "");
                if (phoneNumber.length <= 4) return phoneNumber;
                if (phoneNumber.length <= 7) return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
                if (phoneNumber.length <= 9) return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
                return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
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
                    disabled
                    className="p-6 bg-gray-100 border border-gray-300 rounded-sm cursor-not-allowed text-gray-500"
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
                metnini okudum, onaylıyorum.
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              variant="outline"
              className="text-lg font-semibold bg-black hover:bg-black/90 text-white hover:text-white p-7 cursor-pointer"
            >
              {loading ? "KAYDEDİLİYOR..." : "KAYDET"}
            </Button>
          </div>
        </form>
      </Form>

      {/* Password Change Section */}
      <PasswordForm />

      {/* Account Deletion Section */}
      <div className="mt-10 pt-8 border-t border-gray-300 mb-10">
        <h3 className="text-start text-xl text-gray-800 font-bold mb-4">
          Hesap Silme Talebi
        </h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed mr-10">
          Hesabınızı silmek istiyorsanız, aşağıdaki butona tıklayarak hesap
          silme talebinde bulunabilirsiniz.
        </p>
        <div className="flex justify-start">
          <Button
            type="button"
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6 px-8 rounded-lg cursor-pointer"
            onClick={() => {
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
