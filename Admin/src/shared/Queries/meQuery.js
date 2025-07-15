import { useQuery } from "@tanstack/react-query";
import { getMe } from "../apis/userLogin.js";
import { useAuthStore } from "../store/authState.js";

export const useMeQuery = () => {
  const { login, logout } = useAuthStore();

  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
    onSuccess: (user) => {
      console.log("fetched")
      login(user);
    },
    onError: () => {
      logout();
    },
  });
};
