import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage"


export const AuthState = create(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      login: (user) => set({ isAuth: true, user }),
      logout: async() => {
        console.log("logout called");
        await AsyncStorage.clear();
        set({isAuth: false, user: null})
      },
    }),
    {
      name: "auth-token",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
