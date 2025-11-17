import type { Address } from "@/types/account";

export const mockAddresses: Address[] = [
  {
    id: "1",
    title: "Ev",
    name: "Anıl",
    surname: "Tanrıverdiler",
    address: "Ahmet Mah. Mehmetoğlu Sk., No: 1 Daire: 2",
    apartment: "OnlyJS Apt., No: 2",
    city: "İstanbul",
    district: "Ataşehir",
    phone: "5551234567",
    phoneCountryCode: "+90",
  },
  {
    id: "2",
    title: "Ofis",
    name: "Ayşe",
    surname: "Tanrıverdiler",
    address: "Ayşe Mah. Fatmaoğlu Cad., No: 4 D: 4",
    apartment: "OnlyJS Apt., No: 4",
    city: "İstanbul",
    district: "Ataşehir",
    phone: "5551234567",
    phoneCountryCode: "+90",
  },
];

export function getAllAddresses(): Address[] {
  return mockAddresses;
}

export function getAddressById(id: string): Address | undefined {
  return mockAddresses.find((addr) => addr.id === id);
}
