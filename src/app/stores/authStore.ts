import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { api } from "../services/api";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  fetchUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (token) => {
        set({  token, isAuthenticated: true });
      },

      fetchUser: async () => {
        try {
          const raw = localStorage.getItem("auth-store");
          if (!raw) return;

          const parsed = JSON.parse(raw);
          const token: string | null = parsed?.state?.token ?? null;

          if (!token) return;

          const res = await api.get<User>("/user/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set({ user: res.data, isAuthenticated: true, token });
        } catch (err) {
          console.error("Erro ao buscar usuário:", err);
          set({ user: null, token: null, isAuthenticated: false });
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
