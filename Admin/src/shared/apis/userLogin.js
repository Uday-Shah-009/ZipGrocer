import axiosInstance from "./axiosIntercept";

export const LoginUser = async (formData) => {
  const res = await axiosInstance.post("/auth/login", formData);
  return res.data;
};

export const getMe = async () => {
  const res = await axiosInstance.get("/auth/user");
  return res.data;
};

export const getUsers = async () => {
  const res = await axiosInstance.get("/auth/alluser");
  return res.data;
};

export const getDeliveryPartners = async () => {
  try {
    const res = await axiosInstance.get("/auth/allpartner");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
