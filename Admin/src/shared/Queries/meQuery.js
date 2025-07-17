import { useQuery } from "@tanstack/react-query";
import { getMe } from "../apis/userLogin.js";
import { useAuthStore } from "../store/authState.js";

export const useMeQuery = () => {
  const { login, logout } = useAuthStore();
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!token, 
    retry: false,
  });
};
