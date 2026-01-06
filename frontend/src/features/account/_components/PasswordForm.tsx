"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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

// Password validation schema
const passwordFormSchema = z
  .object({
    oldPassword: z.string().min(1, "Mevcut şifre alanı boş bırakılamaz."),
    newPassword: z
      .string()
      .min(8, "Yeni şifre en az 8 karakter olmalıdır.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]/,
        "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
      ),
    confirmPassword: z.string().min(1, "Şifre tekrar alanı boş bırakılamaz."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Şifreler eşleşmiyor.",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

const PasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: PasswordFormValues) {
    setLoading(true);
    try {
      const payload = {
        old_password: values.oldPassword,
        password: values.newPassword,
        password2: values.confirmPassword,
      };

      const res = await fetch("/api/account/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        // If detailed error messages are available, capture them
        if (data.reason) {
          const reasons = Object.entries(data.reason)
            .map(([key, msgs]) => `${key}: ${(msgs as string[]).join(", ")}`)
            .join(" | ");
          throw new Error(reasons);
        }
        throw new Error(data.error || "Şifre değiştirilemedi.");
      }

      toast.success("Şifreniz başarıyla değiştirildi.");
      form.reset(); // Clear form
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Bir hata oluştu.";
      console.error("Şifre değiştirme hatası:", error);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 pt-8 border-t border-gray-300">
      <h3 className="text-start text-xl text-gray-800 font-bold mb-8">
        Şifre Değiştir
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Current Password */}
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-semibold mb-1">
                  *Mevcut Şifre
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="Mevcut şifrenizi giriniz"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* New Password */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-semibold mb-1">
                  *Yeni Şifre
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="Yeni şifrenizi giriniz"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm New Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-semibold mb-1">
                  *Yeni Şifre (Tekrar)
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="Yeni şifrenizi tekrar giriniz"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              variant="outline"
              className="text-lg font-semibold bg-black hover:bg-black/90 text-white hover:text-white p-7 cursor-pointer"
            >
              {loading ? "DEĞİŞTİRİLİYOR..." : "ŞİFREYİ DEĞİŞTİR"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PasswordForm;
