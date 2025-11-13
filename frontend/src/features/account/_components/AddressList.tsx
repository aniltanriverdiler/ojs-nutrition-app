"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { getAllAddresses } from "@/lib/dummy/addresses";
import AddressForm from "./AddressForm";
import type { Address } from "@/types/account";
import { Card, CardContent } from "@/components/ui/card";

const AddressList = () => {
  const addresses = getAllAddresses();
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    // API call will be placed here
    console.log("Delete address:", id);
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
        }}
      />
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
          Henüz bir adresiniz yok. Yeni adres ekleyiniz.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
