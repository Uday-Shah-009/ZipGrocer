import axiosInstance from "./axiosIntercept";

export const getAllOrders = async() => {
   const res = await axiosInstance.get("/order/all");
   return res.data
}

export const updateStatus = async(id, status) => {
   const res = await axiosInstance.patch(`/update/${id}/status`);
   return res.data
}