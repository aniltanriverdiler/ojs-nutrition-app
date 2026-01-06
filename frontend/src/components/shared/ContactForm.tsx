"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactPageFormSchema = z.object({
  name: z.string().min(1, "İsim alanı boş bırakılamaz."),
  surname: z.string().min(1, "Soyisim alanı boş bırakılamaz."),
  email: z
    .string()
    .min(1, "Email alanı boş bırakılamaz.")
    .email("Lütfen geçerli bir email adresi giriniz."),
  message: z.string().min(1, "Mesaj alanı boş bırakılamaz."),
});

type ContactPageFormValues = z.infer<typeof contactPageFormSchema>;

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<ContactPageFormValues>({
    resolver: zodResolver(contactPageFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: ContactPageFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <p className="text-start text-lg text-gray-600 mb-8">
        Bize aşağıdaki iletişim formundan ulaşabilirsiniz.
      </p>

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
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="İsim *"
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

          {/* Email Section */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
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

          {/* Message Section */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="h-36 pt-4 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="Mesaj"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              variant="outline"
              className="text-lg font-semibold bg-black hover:bg-black/90 text-white hover:text-white p-7 cursor-pointer"
            >
              GÖNDER
            </Button>
          </div>
        </form>
      </Form>

      {/* Informational Texts */}
      <div className="max-w-2xl mx-auto mt-10 space-y-4 text-center text-sm text-gray-700 mb-5">
        <p className="font-semibold">
          *Aynı gün kargo hafta içi <span className="font-bold">16:00</span>,
          Cumartesi ise
          <span className="font-bold"> 11:00</span>&apos;a kadar verilen
          siparişler için geçerlidir. Siparişler kargoya verilince e‑posta ve
          sms ile bilgilendirme yapılır.
        </p>
        <p className="font-semibold">
          Telefon ile <span className="font-bold">0850 303 29 89</span>{" "}
          numarasını arayarak da bizlere sesli mesaj bırakabilirsiniz. Sesli
          mesajlarınıza hafta içi saat{" "}
          <span className="font-bold">09:00‑17:00</span> arasında dönüş
          sağlanmaktadır.
        </p>
      </div>
    </>
  );
};

export default ContactForm;
