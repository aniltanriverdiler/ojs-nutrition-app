import { create } from "zustand";

interface UserState {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (user: { name: string }) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
