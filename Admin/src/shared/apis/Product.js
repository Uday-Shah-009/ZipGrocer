import axiosInstance from "./axiosIntercept";

export const addProduct = async(formData) => {
     const res = await axios.post("/product/add", formData)
     return res.data
}