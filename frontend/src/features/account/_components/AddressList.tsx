"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import AddressForm from "./AddressForm";
import type { Address } from "@/types/account";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// API Address type
interface ApiAddress {
  id: string;
  title: string;
  first_name?: string;
  last_name?: string;
  full_address: string;
  city?: string;
  district?: string;
  phone_number: string;
}

const AddressList = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<Address | null>(null);

  // Fetch addresses
  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/account/addresses");

      if (!res.ok) {
        throw new Error("Adresler yüklenemedi");
      }

      const json = await res.json();

      const results = json.results || json.data?.results || json.data || [];

      if (Array.isArray(results)) {
        const mappedAddresses = results.map((item: ApiAddress) => ({
          id: item.id,
          title: item.title,
          name: item.first_name || "Kullanıcı",
          surname: item.last_name || "",
          address: item.full_address,
          city: item.city || "İstanbul",
          district: item.district || "Kadıköy",
          // Phone display: remove country code for cleaner UI
          phone: item.phone_number?.replace(/^\+90/, "0") || "",
          phoneCountryCode: "",
          apartment: "", // API doesn't return apartment separately
          originalData: item,
        }));
        setAddresses(mappedAddresses);
      } else {
        console.warn("Beklenen formatta adres verisi bulunamadı.");
        setAddresses([]);
      }
    } catch (error) {
      console.error("Adresler çekilemedi:", error);
      toast.error("Adresler yüklenirken bir hata oluştu");
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDeleteClick = (address: Address) => {
    setAddressToDelete(address);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!addressToDelete) return;

    try {
      const res = await fetch(`/api/account/addresses/${addressToDelete.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Adres başarıyla silindi");
        fetchAddresses();
      } else {
        const error = await res.json();
        toast.error(error.message || "Silme işlemi başarısız");
      }
    } catch (error) {
      console.error("Adres silme hatası:", error);
      toast.error("Bir hata oluştu");
    } finally {
      setDeleteDialogOpen(false);
      setAddressToDelete(null);
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
          fetchAddresses();
        }}
      />
    );
  }

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-8">
        <div className="animate-pulse">Yükleniyor...</div>
      </div>
    );
  }

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
          <p className="mb-4">Henüz bir adresiniz yok.</p>
          <Button
            onClick={handleAddNew}
            className="bg-black hover:bg-black/90 text-white"
          >
            <Plus className="size-5 mr-2" /> İlk Adresinizi Ekleyin
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {addresses.map((address) => (
            <Card
              key={address.id}
              className="border border-gray-400 shadow-sm rounded-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-bold mb-4">{address.title}</p>
                  <p className="text-sm font-medium">
                    {address.name} {address.surname}
                  </p>
                  <p className="text-sm font-medium">{address.address}</p>
                  <p className="text-sm font-medium">
                    {address.district}, {address.city}
                  </p>
                  <p className="text-sm font-medium mb-4">{address.phone}</p>
                </div>
                {/* Edit and Delete Buttons */}
                <div className="flex flex-row justify-between gap-2">
                  <Button
                    onClick={() => handleDeleteClick(address)}
                    className="bg-white hover:bg-white text-red-600 hover:text-red-700 border-0 hover:underline cursor-pointer"
                  >
                    <Trash2 className="size-4 mr-1" /> Sil
                  </Button>
                  <Button
                    onClick={() => handleEdit(address)}
                    className="bg-white hover:bg-white text-black border-0 hover:underline cursor-pointer"
                  >
                    <Pencil className="size-4 mr-1" /> Adresi Düzenle
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Adresi Silmek İstediğinize Emin Misiniz?
            </AlertDialogTitle>
            <AlertDialogDescription>
              {addressToDelete && (
                <>
                  <span className="font-semibold">
                    &quot;{addressToDelete.title}&quot;
                  </span>{" "}
                  adlı adresi silmek üzeresiniz. Bu işlem geri alınamaz.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              İptal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddressList;
