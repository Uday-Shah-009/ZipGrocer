import axiosInstance from "./axiosIntercept";

export const getAllOrders = async() => {
   const res = await axiosInstance.get("/order/all");
   return res.data
}

export const updateStatus = async(payload) => {
   const {id , status} = payload
   const res = await axiosInstance.patch(`/order/update/${id}/status`, {status});
   return res.data
}