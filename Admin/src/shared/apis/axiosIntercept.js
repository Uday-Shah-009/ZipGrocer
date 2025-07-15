import axios from "axios";
import { useAuthStore } from "../store/authState.js"; 



const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", 
  withCredentials: true,                
});


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
