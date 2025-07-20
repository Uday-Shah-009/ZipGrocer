import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllProducts, addProduct, updateProduct } from "../apis/Product";
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

export const useUpdateProduct = (edit) => {
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
        toast.success(data.message || "Product updated SuccessFully 🥳!");
        queryClient.invalidateQueries({queryKey: ["allproducts"]});
        if(edit) edit(false)
    },
    onError: (err) => {
        toast.error("failed to update Product ❌");
        console.error(err.message || "someting went wrong");
    }
  })
}