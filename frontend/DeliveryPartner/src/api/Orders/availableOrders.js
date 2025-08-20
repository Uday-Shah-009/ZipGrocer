import axiosInstance from "../axiosIntercept";

export const availableOrders = async(lat,lon) => {
    const res = await axiosInstance.post("/delivery/available",{lat,lon} );
    return res.data.result
} 