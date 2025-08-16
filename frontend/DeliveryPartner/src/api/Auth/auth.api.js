import axiosInstance from "../axiosIntercept.js";

export const userLogin = async (data) => {
  try {
    const res = await axiosInstance.post("/auth/login", data); 
    return res.data
  } catch (err) {
    console.error("Login failed:", err);
  }
};

export const userRegister = async (data) => {
    try{
      const res = await axiosInstance.post("/auth/register" ,data);
      return res.data
    }catch(err){
      console.error("registration failed",err)
    }
}