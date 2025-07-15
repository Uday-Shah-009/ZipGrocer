import { useAuthStore } from "../store/authState";
import { redirect } from "@tanstack/react-router";

export const requireAuth = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated;
  if (!isAuthenticated) {
     throw redirect({ to: "/" });
  }
};
