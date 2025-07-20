import axiosInstance from "./axiosIntercept";

export const addProduct = async(formData) => {
     const res = await axiosInstance.post("/product/add", formData)
     return res.data
}

export const getAllProducts = async() => {
   const res = await axiosInstance.get("/product/all");
   return res.data
}

export const updateProduct = async(payload) => {
   const {id , updated} = payload
   console.log(updated);
   const res =  await axiosInstance.put(`/product/update/${id}`, updated);
   return res.data
}

export const deleteProduct = async(id) => {
   const res = await axiosInstance.patch(`/product/delete/${id}`);
   return res.data
}