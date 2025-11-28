"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import type { Address } from "@/types/account";
import { X } from "lucide-react";
import { toast } from "sonner";

const addressFormSchema = z.object({
  title: z.string().min(1, "Adres başlığı boş bırakılamaz."),
  name: z.string().min(1, "Ad alanı boş bırakılamaz."),
  surname: z.string().min(1, "Soyad alanı boş bırakılamaz."),
  address: z.string().min(1, "Adres alanı boş bırakılamaz."),
  apartment: z.string().min(1, "Apartman adı ve numarası boş bırakılamaz."),
  city: z.string().min(1, "Şehir alanı boş bırakılamaz."),
  district: z.string().min(1, "İlçe alanı boş bırakılamaz."),
  phone: z.string().min(1, "Telefon alanı boş bırakılamaz."),
});

type AddressFormValues = z.infer<typeof addressFormSchema>;

interface AddressFormProps {
  address?: Address;
  onCancel: () => void;
  onSuccess: () => void;
}

const AddressForm = ({ address, onCancel, onSuccess }: AddressFormProps) => {
  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      title: address?.title || "",
      name: address?.name || "",
      surname: address?.surname || "",
      address: address?.address || "",
      apartment: address?.apartment || "",
      city: address?.city || "",
      district: address?.district || "",
      phone: address?.phone || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: AddressFormValues) {
    try {
      // Format the phone number to E.164 before sending to the server
      let rawPhone = values.phone.replace(/[^0-9]/g, "");

      // Remove the '0' at the beginning
      if (rawPhone.startsWith("0")) {
        rawPhone = rawPhone.substring(1);
      }

      // If it doesn't start with '90', add it
      if (!rawPhone.startsWith("90")) {
        rawPhone = "90" + rawPhone;
      }

      // Finally add '+' at the beginning
      const formattedPhone = "+" + rawPhone;

      // We are creating the payload that the API expects
      const payload = {
        title: values.title,
        first_name: values.name,
        last_name: values.surname,
        country_id: 226, // Turkey
        region_id: 3495, // Istanbul
        subregion_id: 39395, // Kadıkoy
        full_address: `${values.address} ${values.apartment}`,
        phone_number: formattedPhone,
      };

      console.log("Data sent to the server:", payload);

      let res;

      if (address?.id) {
        // UPDATE (PUT) request
        res = await fetch(`/api/account/addresses/${address.id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
      } else {
        // NEW ADDRESS (POST)
        res = await fetch("/api/account/addresses", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        // Read the error message from the backend
        const errorData = await res.json();
        console.error("API Error Details:", errorData);

        // Process the error message to display it to the user
        if (errorData.reason) {
          // Combine the detailed errors from the backend
          const reasons = Object.entries(errorData.reason)
            .map(([key, msgs]) => `${key}: ${(msgs as any[]).join(", ")}`)
            .join(" | ");
          throw new Error(reasons);
        }
        throw new Error(errorData.message || "İşlem başarısız.");
      }

      toast.success(address ? "Adres güncellendi" : "Adres eklendi");
      onSuccess(); // Return to list and refresh
    } catch (error) {
      console.error("Submit Hatası:", error);
      toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  }

  return (
    <>
      <div>
        {/* Title and Cancel Button Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-6">
            {address ? "Adresi Düzenle" : "Adres Oluştur"}
          </h2>
          <Button
            onClick={onCancel}
            className="bg-white hover:bg-white text-black border-0 hover:underline cursor-pointer"
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* Form Section */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Address Title Section */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full md:w-[49%]">
                  <FormLabel className="mb-1.5">*Adres Başlığı</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="ev,iş vb..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Section */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="mb-1.5">*Ad</FormLabel>
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
                  <FormItem className="">
                    <FormLabel className="mb-1.5">*Soyad</FormLabel>
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

            {/* Address Section */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="mb-1.5">*Adres</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="Adres"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Apartment Name and Number Section */}
            <FormField
              control={form.control}
              name="apartment"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="mb-1.5">Apartman, Daire</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="Apartman adı ve numarası"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City and District Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* City Section */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-1.5">*Şehir</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="p-6 bg-gray-50 border border-gray-300 rounded-sm h-auto w-full">
                          <SelectValue placeholder="Şehir seçiniz" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="istanbul">İstanbul</SelectItem>
                          <SelectItem value="ankara">Ankara</SelectItem>
                          <SelectItem value="izmir">İzmir</SelectItem>
                          <SelectItem value="bursa">Bursa</SelectItem>
                          <SelectItem value="antalya">Antalya</SelectItem>
                          <SelectItem value="adana">Adana</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* District Section */}
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-1.5">*İlçe</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="p-6 bg-gray-50 border border-gray-300 rounded-sm h-auto w-full">
                          <SelectValue placeholder="İlçe seçiniz" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="kadikoy">Kadıköy</SelectItem>
                          <SelectItem value="besiktas">Beşiktaş</SelectItem>
                          <SelectItem value="sisli">Şişli</SelectItem>
                          <SelectItem value="uskudar">Üsküdar</SelectItem>
                          <SelectItem value="beyoglu">Beyoğlu</SelectItem>
                          <SelectItem value="bakirkoy">Bakırköy</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                    <FormLabel className="mb-1.5">*Telefon</FormLabel>
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

            {/* Save Button Section */}
            <div className="flex justify-end mb-10">
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
      </div>
    </>
  );
};

export default AddressForm;
