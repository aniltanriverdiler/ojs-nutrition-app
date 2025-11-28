"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import AddressForm from "./AddressForm";
import type { Address } from "@/types/account";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const AddressList = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch addresses
  const fetchAddresses = async () => {
    try {
      // We are making a request to our custom API route
      const res = await fetch("/api/account/addresses");
      const json = await res.json();

      console.log("Adres API Yanıtı:", json);

      // Check possible data array paths in API response
      const results = json.results || json.data?.results || json.data || [];

      // According to the data structure returned from the API, we are setting the data
      if (Array.isArray(results)) {
        const mappedAddresses = results.map((item: any) => ({
          id: item.id,
          title: item.title,
          // If the first_name and last_name are available from the backend, use them, otherwise use "User"
          name: item.first_name || "Kullanıcı",
          surname: item.last_name || "",
          address: item.full_address,
          city: "İstanbul", // For now, it is fixed
          district: "Kadıköy", // For now, it is fixed
          phone: item.phone_number,
          phoneCountryCode: "",
          originalData: item,
        }));
        setAddresses(mappedAddresses);
      } else {
        console.warn("Beklenen formatta adres verisi bulunamadı.", results);
        setAddresses([]);
      }
    } catch (error) {
      console.error("Adresler çekilemedi", error);
    } finally {
      setLoading(false);
    }
  };

  // When the page is opened, fetch the data
  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu adresi silmek istediğinize emin misiniz?")) return;

    try {
      const res = await fetch(`/api/account/addresses/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Adres başarıyla silindi");
        fetchAddresses();
      } else {
        toast.error("Silme işlemi başarısız.");
      }
    } catch (error) {
      toast.error("Bir hata oluştu");
    }
  };

  const handleAddNew = () => {
    setEditingAddress(null);
    setShowForm(true);
  };

  if (showForm) {
    return (
      <AddressForm
        address={editingAddress || undefined}
        onCancel={() => {
          setShowForm(false);
          setEditingAddress(null);
        }}
        onSuccess={() => {
          setShowForm(false);
          setEditingAddress(null);
          fetchAddresses(); // When the form is closed, refresh the list
        }}
      />
    );
  }

  if (loading)
    return <div className="text-center text-gray-500 py-8">Yükleniyor...</div>;

  return (
    <div>
      {/* Address Title and Add New Button Section */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-bold">Adreslerim ({addresses.length})</h3>
        <Button
          onClick={handleAddNew}
          className="bg-white hover:bg-white text-black border-0 hover:underline cursor-pointer"
        >
          <Plus className="size-5" /> Yeni Adres Ekle
        </Button>
      </div>

      {/* Address List Section */}
      {addresses.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          Henüz bir adresiniz yok. Yeni adres ekleyiniz.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {addresses.map((address) => (
            <Card
              key={address.id}
              className="border border-gray-400 shadow-sm rounded-sm"
            >
              <CardContent>
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold mb-4">{address.title}</p>
                  <p className="text-sm font-medium">
                    {address.name} {address.surname}
                  </p>
                  <p className="text-sm font-medium">{address.address}</p>
                  <p className="text-sm font-medium">
                    {address.district}, {address.city}
                  </p>
                  <p className="text-sm font-medium mb-4">
                    {address.phoneCountryCode} {address.phone}
                  </p>
                </div>
                {/* Edit and Delete Buttons */}
                <div className="flex flex-row justify-between gap-2">
                  <Button
                    onClick={() => handleDelete(address.id)}
                    className="bg-white hover:bg-white text-black border-0 hover:underline cursor-pointer"
                  >
                    <Trash2 /> Sil
                  </Button>
                  <Button
                    onClick={() => handleEdit(address)}
                    className="bg-white hover:bg-white text-black border-0 hover:underline cursor-pointer"
                  >
                    <Pencil /> Adresi Düzenle
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressList;
