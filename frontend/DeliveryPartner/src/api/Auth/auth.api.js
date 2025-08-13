import axiosInstance from "../axiosIntercept.js";

export const userLogin = async(data) => {
   console.log("entered", data)
   const res = await axiosInstance.post("/auth/login",data);
   console.log("logged in",res.data)
}
