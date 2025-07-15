import axiosInstance from "./axiosIntercept"

export const addCategory = async(formData) => {
    const res = await axiosInstance.post("/category/add" , formData);
    return res.data
}

export const getAllCategories = async() => {
    const res = await axiosInstance.get("/category/getAll");
    return res.data.categories.categories
}