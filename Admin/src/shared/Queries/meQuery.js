import { useQuery } from "@tanstack/react-query";
import { getDeliveryPartners, getMe, getUsers } from "../apis/userLogin.js";
import { useAuthStore } from "../store/authState.js";

export const useMeQuery = () => {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    enabled: !!token, 
    retry: false,
  });
};

export const useAllusers = () => {
  return useQuery({
    queryKey: ["allusers"],
    queryFn: getUsers,
  })
}

export const useAllDelivery = () => {
  return useQuery({
    queryKey: ["allDelivery"],
    queryFn: getDeliveryPartners,
  })
}