import axiosInstance from "../axiosIntercept.js";

export const userLogin = async (data) => {
  try {
    console.log("entered", data);
    const res = await axiosInstance.post("/auth/login", data); 
    console.log("logged in", res.data);
  } catch (err) {
    console.error("Login failed:", err);
  }
};