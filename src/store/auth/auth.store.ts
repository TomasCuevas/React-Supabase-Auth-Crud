import { create } from "zustand";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* STORE INTERFACE *//
interface AuthState {
  signInWithEmail(email: string): void;
  signInWithGoogle(): void;
}

export const useAuthStore = create<AuthState>(() => ({
  async signInWithEmail(email) {
    const { error, data } = await supabase.auth.signInWithOtp({ email });
    if (error) throw error;

    return data;
  },
  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_REDIRECT,
      },
    });

    if (error) throw error;
    return data;
  },
}));
