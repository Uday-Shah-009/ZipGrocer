import axiosInstance from "./axiosIntercept";

export const getAllOrders = async() => {
   const res = await axiosInstance.get("/order/all");
   return res.data
}