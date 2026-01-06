import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAddresses } from "@/lib/api/address";
import type { Address } from "@/types/account";

interface UserState {
  isAuthenticated: boolean;
  user: { name: string; email?: string } | null;
  addresses: Address[];
  login: (user: { name: string; email?: string }) => void;
  logout: () => Promise<void>; // Async logout to handle API call
  fetchAddresses: () => Promise<void>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      addresses: [],
      login: (user) => set({ isAuthenticated: true, user }),
      logout: async () => {
        try {
          await fetch("/api/auth/logout", { method: "POST" });
        } catch (error) {
          console.error("Logout Error:", error);
        }
        set({ isAuthenticated: false, user: null, addresses: [] });
      },
      // Function to fetch addresses from the API
      fetchAddresses: async () => {
        try {
          const addresses = await getAddresses();
          set({ addresses });
          if (addresses.length === 0) {
            console.warn("No addresses found");
          }
        } catch (error) {
          console.error("Adresler yüklenemedi:", error);
          set({ addresses: [] });
        }
      },
    }),
    {
      name: "user-storage",
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);
