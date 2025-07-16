import axiosInstance from "./axiosIntercept";

export const addProduct = async(formData) => {
     const res = await axiosInstance.post("/product/add", formData)
     return res.data
}

export const getAllProducts = async() => {
   const res = await axiosInstance.get("/product/all");
   return res.data
}