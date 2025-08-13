import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", 
  withCredentials: true,                
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
       throw new Error("something went wrong")
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
