import axiosInstance from "./axiosIntercept";


export const LoginUser = async(formData) => {
      const res = await axiosInstance.post("/auth/login", formData);
      return res.data
}

export const getMe = async() => {
  const res = await axiosInstance.get("/auth/user")
  return res.data
}