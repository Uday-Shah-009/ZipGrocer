import { getAllOrders, updateStatus } from "../apis/Orders";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../configs/QueryClient";
import { toast } from "react-toastify";
export const useAllOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
  });
};

export const useUpdateStatus = () => {
  return useMutation({
    mutationKey: ["updateOrder"],
    mutationFn: updateStatus,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
