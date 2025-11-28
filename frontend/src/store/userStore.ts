import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  isAuthenticated: boolean;
  user: { name: string; email?: string } | null;
  login: (user: { name: string; email?: string }) => void;
  logout: () => Promise<void>; // Async logout to handle API call
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (user) => set({ isAuthenticated: true, user }),
      logout: async () => {
        // Call the Logout API (removes the cookie)
        try {
          await fetch("/api/auth/logout", { method: "POST" });
        } catch (error) {
          console.error("Logout Error:", error);
        }
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: "user-storage", // localStorage key (only for user information)
    }
  )
);
