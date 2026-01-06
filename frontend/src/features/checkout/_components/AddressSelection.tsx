"use client";

import React, { useEffect, useState } from "react";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Address } from "@/types/account";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddressSelection = () => {
  const {
    selectedAddress,
    setSelectedAddress,
    completeStep,
    setAddresses,
    addresses,
    updateAddress,
    deleteAddress,
    addAddress,
  } = useCheckoutStore();

  const [localSelectedId, setLocalSelectedId] = useState<string>(
    selectedAddress?.id || ""
  );
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [editFormValues, setEditFormValues] = useState<Address | null>(null);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [saveForNextOrder, setSaveForNextOrder] = useState(false);
  const [newAddressFormValues, setNewAddressFormValues] = useState<
    Partial<Address>
  >({
    title: "",
    name: "",
    surname: "",
    address: "",
    apartment: "",
    city: "",
    district: "",
    phone: "",
    phoneCountryCode: "+90",
  });
  const formatPhoneNumber = (value: string) => {
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
    }
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
      4,
      7
    )} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
  };

  const fetchAddresses = useUserStore((state) => state.fetchAddresses);
  const userAddresses = useUserStore((state) => state.addresses);
  const [isLoadingAddresses, setIsLoadingAddresses] = React.useState(false);

  useEffect(() => {
    // Fetch addresses from backend on component mount
    const loadAddresses = async () => {
      setIsLoadingAddresses(true);
      try {
        await fetchAddresses();
      } catch (error) {
        console.error("Failed to load addresses:", error);
      } finally {
        setIsLoadingAddresses(false);
      }
    };
    loadAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Sync userStore addresses to checkoutStore whenever they change
  useEffect(() => {
    setAddresses(userAddresses);
  }, [userAddresses, setAddresses]);

  const handleConfirm = () => {
    // If adding a new address, save it first
    if (isAddingNewAddress && saveForNextOrder) {
      const newAddress: Address = {
        id: Date.now().toString(), // Generate unique ID
        title: newAddressFormValues.title || "Yeni Adres",
        name: newAddressFormValues.name || "",
        surname: newAddressFormValues.surname || "",
        address: newAddressFormValues.address || "",
        apartment: newAddressFormValues.apartment || "",
        city: newAddressFormValues.city || "",
        district: newAddressFormValues.district || "",
        phone: newAddressFormValues.phone || "",
        phoneCountryCode: newAddressFormValues.phoneCountryCode || "+90",
      };
      addAddress(newAddress);
      setSelectedAddress(newAddress);
      setIsAddingNewAddress(false);
      setSaveForNextOrder(false);
      setNewAddressFormValues({
        title: "",
        name: "",
        surname: "",
        address: "",
        apartment: "",
        city: "",
        district: "",
        phone: "",
        phoneCountryCode: "+90",
      });
      completeStep("address");
    } else if (isAddingNewAddress && !saveForNextOrder) {
      // Use the new address for this order only
      const tempAddress: Address = {
        id: "temp-" + Date.now().toString(),
        title: newAddressFormValues.title || "Yeni Adres",
        name: newAddressFormValues.name || "",
        surname: newAddressFormValues.surname || "",
        address: newAddressFormValues.address || "",
        apartment: newAddressFormValues.apartment || "",
        city: newAddressFormValues.city || "",
        district: newAddressFormValues.district || "",
        phone: newAddressFormValues.phone || "",
        phoneCountryCode: newAddressFormValues.phoneCountryCode || "+90",
      };
      setSelectedAddress(tempAddress);
      setIsAddingNewAddress(false);
      setNewAddressFormValues({
        title: "",
        name: "",
        surname: "",
        address: "",
        apartment: "",
        city: "",
        district: "",
        phone: "",
        phoneCountryCode: "+90",
      });
      completeStep("address");
    } else {
      // Use existing selected address
      const address = addresses.find((addr) => addr.id === localSelectedId);
      if (address) {
        setSelectedAddress(address);
        completeStep("address");
      }
    }
  };

  const handleEdit = (address: Address) => {
    if (editingAddressId === address.id) {
      setEditingAddressId(null);
      setEditFormValues(null);
      return;
    }
    setEditingAddressId(address.id);
    setEditFormValues({ ...address });
  };

  const handleSave = () => {
    if (editFormValues) {
      updateAddress(editFormValues);
      setEditingAddressId(null);
      setEditFormValues(null);
    }
  };

  const handleDelete = (addressId: string) => {
    deleteAddress(addressId);
    setEditingAddressId(null);
    setEditFormValues(null);
    if (localSelectedId === addressId) {
      setLocalSelectedId("");
    }
  };

  return (
    <div className="space-y-4 mt-5 ml-15">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">
          {editingAddressId ? "Adres Düzenle" : "Teslimat Adresi"}
        </h2>
        {editingAddressId && (
          <Button
            variant="ghost"
            type="button"
            onClick={() => {
              setEditingAddressId(null);
              setEditFormValues(null);
            }}
            className="text-base font-medium cursor-pointer hover:bg-transparent"
          >
            Vazgeç
          </Button>
        )}
      </div>

      {/* Delivery Addresses */}
      {editingAddressId ? (
        // Edit mode - show only the editing form
        addresses
          .filter((addr) => addr.id === editingAddressId)
          .map((address) => (
            <div key={address.id} className="space-y-4 w-full pb-2 pr-2">
              {/* Address Title Section */}
              <div className="grid grid-cols-1 gap-4">
                <Input
                  value={editFormValues?.title ?? ""}
                  onChange={(e) =>
                    setEditFormValues((prev) =>
                      prev ? { ...prev, title: e.target.value } : prev
                    )
                  }
                  placeholder="Adres Başlığı"
                  className="p-6 border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                />
              </div>

              {/* Name and Surname Section */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  value={editFormValues?.name ?? ""}
                  onChange={(e) =>
                    setEditFormValues((prev) =>
                      prev ? { ...prev, name: e.target.value } : prev
                    )
                  }
                  placeholder="Ad"
                  className="p-6 border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                />
                <Input
                  value={editFormValues?.surname ?? ""}
                  onChange={(e) =>
                    setEditFormValues((prev) =>
                      prev ? { ...prev, surname: e.target.value } : prev
                    )
                  }
                  placeholder="Soyad"
                  className="p-6 border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                />
              </div>

              {/* Address Section */}
              <Input
                value={editFormValues?.address ?? ""}
                onChange={(e) =>
                  setEditFormValues((prev) =>
                    prev ? { ...prev, address: e.target.value } : prev
                  )
                }
                placeholder="Adres"
                className="p-6 border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
              />
              <Input
                value={editFormValues?.apartment ?? ""}
                onChange={(e) =>
                  setEditFormValues((prev) =>
                    prev ? { ...prev, apartment: e.target.value } : prev
                  )
                }
                placeholder="Apartman, Daire"
                className="p-6 border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
              />

              {/* City and District Section */}
              <div className="grid grid-cols-2 gap-4">
                <Select
                  value={editFormValues?.city ?? ""}
                  onValueChange={(value) =>
                    setEditFormValues((prev) =>
                      prev ? { ...prev, city: value } : prev
                    )
                  }
                >
                  <SelectTrigger className="w-full p-6 border border-gray-300 focus-visible:border-black focus-visible:ring-0 data-[state=open]:border-2 data-[state=open]:border-black data-[state=open]:ring-0 rounded-sm text-left">
                    <SelectValue
                      placeholder="Şehir seçiniz"
                      defaultValue={editFormValues?.city ?? ""}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="İstanbul">İstanbul</SelectItem>
                      <SelectItem value="Ankara">Ankara</SelectItem>
                      <SelectItem value="İzmir">İzmir</SelectItem>
                      <SelectItem value="Bursa">Bursa</SelectItem>
                      <SelectItem value="Antalya">Antalya</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select
                  value={editFormValues?.district ?? ""}
                  onValueChange={(value) =>
                    setEditFormValues((prev) =>
                      prev ? { ...prev, district: value } : prev
                    )
                  }
                >
                  <SelectTrigger className="w-full p-6 border border-gray-300 focus-visible:border-black focus-visible:ring-0 data-[state=open]:border-2 data-[state=open]:border-black data-[state=open]:ring-0 rounded-sm text-left">
                    <SelectValue
                      placeholder="İlçe seçiniz"
                      defaultValue={editFormValues?.district ?? ""}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Ataşehir">Ataşehir</SelectItem>
                      <SelectItem value="Kadıköy">Kadıköy</SelectItem>
                      <SelectItem value="Beşiktaş">Beşiktaş</SelectItem>
                      <SelectItem value="Şişli">Şişli</SelectItem>
                      <SelectItem value="Üsküdar">Üsküdar</SelectItem>
                      <SelectItem value="Beyoğlu">Beyoğlu</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone Section */}
              <Input
                type="tel"
                maxLength={14}
                value={editFormValues?.phone ?? ""}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setEditFormValues((prev) =>
                    prev ? { ...prev, phone: formatted } : prev
                  );
                }}
                placeholder="0XXX XXX XX XX"
                className="p-6 border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
              />

              {/* Save and Delete Button Section */}
              <div className="flex flex-row gap-3 justify-center items-center w-full pl-1.5">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleDelete(address.id)}
                  className="bg-white font-semibold cursor-pointer w-1/2 px-5 py-7 text-base"
                >
                  Adresi Sil
                </Button>
                <Button
                  variant="default"
                  type="button"
                  onClick={() => handleSave()}
                  className="bg-black hover:bg-black/90 text-white font-semibold cursor-pointer w-1/2 px-5 py-7 text-base"
                >
                  Kaydet
                </Button>
              </div>
            </div>
          ))
      ) : (
        // Normal mode - show all addresses and continue button
        <>
          {addresses.map((address) => (
            <div key={address.id}>
              <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-sm border p-5 has-aria-checked:border-2 has-aria-checked:border-black has-aria-checked:bg-gray-100 cursor-pointer">
                <Checkbox
                  id={address.id}
                  checked={localSelectedId === address.id}
                  onCheckedChange={() => setLocalSelectedId(address.id)}
                  className="rounded-full size-5 data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:rounded-full data-[state=checked]:size-5 cursor-pointer"
                />
                <div className="flex flex-col w-full gap-1">
                  <div className="flex flex-row justify-between gap-2 w-full">
                    <p className="text-lg leading-none font-medium">
                      {address.title}
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleEdit(address);
                      }}
                      className="cursor-pointer text-gray-700 hover:text-black font-medium"
                    >
                      Düzenle
                    </button>
                  </div>
                  <p className="mt-3 text-gray-500 text-base font-normal">
                    {address.name} {address.surname}
                  </p>
                  <p className="text-gray-500 text-base font-normal">
                    {address.address}, {address.apartment}
                  </p>
                  <p className="text-gray-500 text-base font-normal">
                    {address.district}, {address.city}
                  </p>
                </div>
              </Label>
            </div>
          ))}

          {/* New Address Section */}
          <div className="mt-6">
            <Label
              className={`hover:bg-accent/50 flex flex-col gap-3 items-start rounded-sm border p-5 cursor-pointer ${
                isAddingNewAddress
                  ? "border-black bg-gray-50 border-2"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <Checkbox
                  id="new-address"
                  checked={isAddingNewAddress}
                  onCheckedChange={(checked) => {
                    setIsAddingNewAddress(checked as boolean);
                    if (!checked) {
                      // Reset form when closing
                      setNewAddressFormValues({
                        title: "",
                        name: "",
                        surname: "",
                        address: "",
                        apartment: "",
                        city: "",
                        district: "",
                        phone: "",
                        phoneCountryCode: "+90",
                      });
                      setSaveForNextOrder(false);
                    }
                  }}
                  className="rounded-full size-5 data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:rounded-full data-[state=checked]:size-5 cursor-pointer"
                />
                <p className="text-lg leading-none font-medium">Yeni Adres</p>
              </div>

              {/* New Address Form */}
              {isAddingNewAddress && (
                <div className="mt-2 space-y-4 w-full">
                  {/* Name and Surname Section */}
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      value={newAddressFormValues.name ?? ""}
                      onChange={(e) =>
                        setNewAddressFormValues((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Ad"
                      className="p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                    />
                    <Input
                      value={newAddressFormValues.surname ?? ""}
                      onChange={(e) =>
                        setNewAddressFormValues((prev) => ({
                          ...prev,
                          surname: e.target.value,
                        }))
                      }
                      placeholder="Soyad"
                      className="p-6 border bg-white border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                    />
                  </div>

                  {/* Address Section */}
                  <Input
                    value={newAddressFormValues.address ?? ""}
                    onChange={(e) =>
                      setNewAddressFormValues((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    placeholder="Adres"
                    className="p-6 border bg-white border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                  />

                  {/* Apartment Section */}
                  <Input
                    value={newAddressFormValues.apartment ?? ""}
                    onChange={(e) =>
                      setNewAddressFormValues((prev) => ({
                        ...prev,
                        apartment: e.target.value,
                      }))
                    }
                    placeholder="Apartman, daire, vb."
                    className="p-6 border bg-white border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                  />

                  {/* City and District Section */}
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      value={newAddressFormValues.city ?? ""}
                      onValueChange={(value) =>
                        setNewAddressFormValues((prev) => ({
                          ...prev,
                          city: value,
                        }))
                      }
                    >
                      <SelectTrigger className="w-full p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:ring-0 data-[state=open]:border-2 data-[state=open]:border-black data-[state=open]:ring-0 rounded-sm text-left">
                        <SelectValue placeholder="İl" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="İstanbul">İstanbul</SelectItem>
                          <SelectItem value="Ankara">Ankara</SelectItem>
                          <SelectItem value="İzmir">İzmir</SelectItem>
                          <SelectItem value="Bursa">Bursa</SelectItem>
                          <SelectItem value="Antalya">Antalya</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Select
                      value={newAddressFormValues.district ?? ""}
                      onValueChange={(value) =>
                        setNewAddressFormValues((prev) => ({
                          ...prev,
                          district: value,
                        }))
                      }
                    >
                      <SelectTrigger className="w-full p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:ring-0 data-[state=open]:border-2 data-[state=open]:border-black data-[state=open]:ring-0 rounded-sm text-left">
                        <SelectValue placeholder="İlçe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Ataşehir">Ataşehir</SelectItem>
                          <SelectItem value="Kadıköy">Kadıköy</SelectItem>
                          <SelectItem value="Beşiktaş">Beşiktaş</SelectItem>
                          <SelectItem value="Şişli">Şişli</SelectItem>
                          <SelectItem value="Üsküdar">Üsküdar</SelectItem>
                          <SelectItem value="Beyoğlu">Beyoğlu</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Phone Section */}
                  <Input
                    type="tel"
                    maxLength={14}
                    value={newAddressFormValues.phone ?? ""}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setNewAddressFormValues((prev) => ({
                        ...prev,
                        phone: formatted,
                      }));
                    }}
                    placeholder="+90"
                    className="p-6 border bg-white border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                  />

                  {/* Save for Next Order Checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="save-for-next"
                      checked={saveForNextOrder}
                      onCheckedChange={(checked) =>
                        setSaveForNextOrder(checked as boolean)
                      }
                      className="bg-white mt-1 data-[state=checked]:bg-black data-[state=checked]:black"
                    />
                    <label
                      htmlFor="save-for-next"
                      className="text-gray-500 cursor-pointer mt-1"
                    >
                      Bir sonraki işlem için bu adresi kaydet.
                    </label>
                  </div>

                  {/* Address Title Section */}
                  <Input
                    value={newAddressFormValues.title ?? ""}
                    onChange={(e) =>
                      setNewAddressFormValues((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Adres Başlığı"
                    className="p-6 border bg-white border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                  />
                </div>
              )}
            </Label>
          </div>

          <div className="flex justify-center items-center pt-4">
            <Button
              onClick={handleConfirm}
              disabled={
                (!isAddingNewAddress && !localSelectedId) ||
                (isAddingNewAddress &&
                  (!newAddressFormValues.name ||
                    !newAddressFormValues.surname ||
                    !newAddressFormValues.address ||
                    !newAddressFormValues.city ||
                    !newAddressFormValues.district ||
                    !newAddressFormValues.phone))
              }
              className="bg-black text-white hover:bg-black/90 w-full px-9 py-7 text-lg font-semibold cursor-pointer"
            >
              Kargo ile Devam Et
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddressSelection;
