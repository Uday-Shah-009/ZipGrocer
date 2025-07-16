import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllProducts, addProduct } from "../apis/Product";
import { toast } from "react-toastify";
import { queryClient } from "../configs/QueryClient";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["allproducts"],
    queryFn: getAllProducts,
  });
};

export const useAddProduct = () => {
  return useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
        toast.success(data.message || "Product added SuccessFully 🥳!");
        queryClient.invalidateQueries({queryKey: ["allproducts"]})
    },
    onError: (err) => {
        toast.error("failed to Add Product ❌");
        console.error(err.message || "someting went wrong");
    }
  })
}