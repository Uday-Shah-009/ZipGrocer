import { useQuery,useMutation } from "@tanstack/react-query";
import {queryClient} from "../configs/QueryClient.js"
import { getAllCategories,addCategory } from "../apis/Category.js";
import { toast } from "react-toastify";

export const useAddCategory = () => {

 return useMutation({
     mutationFn: addCategory,
     onSuccess: () => {
      toast.success("category added successfully!")
      queryClient.invalidateQueries({queryKey: ["categories"]})
     },
     onError: (err) => {
      toast.error("failed to add category");
      console.error(err.message || "something went worng");
     }
  })
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    onSuccess: (data) => {
      console.log("✅ onSuccess called with:", data);
    },
    onError: (err) => {
      console.error("❌ React Query caught error:", err.message);
    },
  });
};

