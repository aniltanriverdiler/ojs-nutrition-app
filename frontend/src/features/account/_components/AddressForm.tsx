"use client";

import { useEffect, useState } from "react";
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
import {
  Country,
  getCountries,
  getRegions,
  getSubregions,
  Region,
  Subregion,
} from "@/lib/api/location";

const addressFormSchema = z.object({
  title: z.string().min(1, "Adres başlığı boş bırakılamaz."),
  name: z.string().min(1, "Ad alanı boş bırakılamaz."),
  surname: z.string().min(1, "Soyad alanı boş bırakılamaz."),
  address: z.string().min(1, "Adres alanı boş bırakılamaz."),
  apartment: z.string().optional(),
  country: z.string().min(1, "Ülke seçimi zorunludur."),
  city: z.string().min(1, "Şehir alanı boş bırakılamaz."),
  district: z.string().min(1, "İlçe alanı boş bırakılamaz."),
  phone: z
    .string()
    .min(10, "Telefon numarası en az 10 haneli olmalıdır.")
    .regex(
      /^0[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/,
      "Geçerli bir telefon numarası giriniz."
    ),
});

type AddressFormValues = z.infer<typeof addressFormSchema>;

interface AddressFormProps {
  address?: Address;
  onCancel: () => void;
  onSuccess: () => void;
}

const AddressForm = ({ address, onCancel, onSuccess }: AddressFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // location states
  const [countries, setCountries] = useState<Country[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [subregions, setSubregions] = useState<Subregion[]>([]);

  // Default Turkey values
  const DEFAULT_COUNTRY_ID = "226";

  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      title: address?.title || "",
      name: address?.name || "",
      surname: address?.surname || "",
      address: address?.address || "",
      apartment: address?.apartment || "",
      country: DEFAULT_COUNTRY_ID,
      city: "",
      district: "",
      phone: address?.phone || "",
    },
  });

  // Fetch countries when component mounts
  useEffect(() => {
    async function initLocationData() {
      try {
        const countryList = await getCountries();
        setCountries(countryList);

        // By default, fetch Turkey's cities
        const turkeyRegions = await getRegions("Turkey");
        setRegions(turkeyRegions);

        // IF EDIT MODE:
        if (address) {
          // 1. Find the current city's ID and set it to the form
          const currentRegion = turkeyRegions.find(
            (r) => r.name === address.city
          );
          if (currentRegion) {
            form.setValue("city", currentRegion.id.toString());

            // 2. Fetch the cities of the current city
            const subregionList = await getSubregions(currentRegion.name);
            setSubregions(subregionList);

            // 3. Find the current subregion's ID and set it to the form
            const currentSubregion = subregionList.find(
              (s) => s.name === address.district
            );
            if (currentSubregion) {
              form.setValue("district", currentSubregion.id.toString());
            }
          }
        }
      } catch (error) {
        console.error("Lokasyon verileri yüklenemedi:", error);
      }
    }

    initLocationData();
  }, [address, form]);

  // Handle city and district changes
  const handleCityChange = async (regionId: string) => {
    form.setValue("city", regionId);
    form.setValue("district", "");

    // Find the selected city's name (required for API request)
    const selectedRegion = regions.find((r) => r.id.toString() === regionId);
    if (selectedRegion) {
      try {
        const data = await getSubregions(selectedRegion.name);
        setSubregions(data);
      } catch (error) {
        console.error("İlçe verileri yüklenemedi:", error);
        setSubregions([]);
      }
    }
  };

  // Format phone number to E.164 format
  const formatPhoneToE164 = (phone: string): string => {
    let rawPhone = phone.replace(/[^0-9]/g, "");
    if (rawPhone.startsWith("0")) rawPhone = rawPhone.substring(1);
    if (!rawPhone.startsWith("90")) rawPhone = "90" + rawPhone;
    return "+" + rawPhone;
  };

  async function onSubmit(values: AddressFormValues) {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const formattedPhone = formatPhoneToE164(values.phone);

      // Build full address string
      const fullAddress = values.apartment
        ? `${values.address}, ${values.apartment}`
        : values.address;

      const payload = {
        title: values.title,
        first_name: values.name,
        last_name: values.surname,
        country_id: Number(values.country),
        region_id: Number(values.city),
        subregion_id: Number(values.district),
        full_address: fullAddress,
        phone_number: formattedPhone,
      };

      const url = address?.id
        ? `/api/account/addresses/${address.id}`
        : "/api/account/addresses";

      const method = address?.id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();

        // Handle validation errors from backend
        if (errorData.reason && typeof errorData.reason === "object") {
          const errorMessages = Object.entries(errorData.reason)
            .map(([field, messages]) => {
              const msgArray = Array.isArray(messages) ? messages : [messages];
              return `${field}: ${msgArray.join(", ")}`;
            })
            .join(" | ");
          throw new Error(errorMessages);
        }

        throw new Error(errorData.message || "İşlem başarısız");
      }

      toast.success(
        address ? "Adres başarıyla güncellendi" : "Adres başarıyla eklendi"
      );
      onSuccess();
    } catch (error) {
      console.error("Adres kaydetme hatası:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Bir hata oluştu, lütfen tekrar deneyin.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Format phone number for display
  const formatPhoneNumber = (value: string): string => {
    const phoneNumber = value.replace(/\D/g, "");

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
    <div>
      {/* Title and Cancel Button Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {address ? "Adresi Düzenle" : "Yeni Adres Ekle"}
        </h2>
        <Button
          onClick={onCancel}
          disabled={isSubmitting}
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
                    placeholder="Örn: Ev, İş"
                    disabled={isSubmitting}
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
                <FormItem>
                  <FormLabel className="mb-1.5">*Ad</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="Ad"
                      disabled={isSubmitting}
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
                  <FormLabel className="mb-1.5">*Soyad</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                      placeholder="Soyad"
                      disabled={isSubmitting}
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
              <FormItem>
                <FormLabel className="mb-1.5">*Adres</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="Sokak, Cadde, No"
                    disabled={isSubmitting}
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
              <FormItem>
                <FormLabel className="mb-1.5">Apartman, Daire</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="Apartman adı ve daire numarası"
                    disabled={isSubmitting}
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
                    onValueChange={handleCityChange}
                    value={field.value}
                    disabled={isSubmitting || regions.length === 0}
                  >
                    <FormControl>
                      <SelectTrigger className="p-6 bg-gray-50 border border-gray-300 rounded-sm h-auto w-full">
                        <SelectValue placeholder="Şehir seçiniz" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {regions.map((region) => (
                          <SelectItem
                            key={region.id}
                            value={region.id.toString()}
                          >
                            {region.name}
                          </SelectItem>
                        ))}
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
                    value={field.value}
                    disabled={isSubmitting || subregions.length === 0}
                  >
                    <FormControl>
                      <SelectTrigger className="p-6 bg-gray-50 border border-gray-300 rounded-sm h-auto w-full">
                        <SelectValue placeholder="İlçe seçiniz" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {subregions.map((sub) => (
                          <SelectItem key={sub.id} value={sub.id.toString()}>
                            {sub.name}
                          </SelectItem>
                        ))}
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
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1.5">*Telefon</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    className="p-6 bg-gray-50 border border-gray-300 rounded-sm"
                    placeholder="0XXX XXX XX XX"
                    maxLength={14}
                    disabled={isSubmitting}
                    {...field}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      field.onChange(formatted);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Save Button Section */}
          <div className="flex justify-end mb-10">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-lg font-semibold bg-black hover:bg-black/90 text-white hover:text-white p-7 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "KAYDEDİLİYOR..." : "KAYDET"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddressForm;
