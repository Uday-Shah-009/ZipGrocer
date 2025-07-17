import { getAllOrders } from "../apis/Orders";
import { useQuery } from "@tanstack/react-query";

export const useAllOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
};
