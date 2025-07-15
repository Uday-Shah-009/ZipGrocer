import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import { LoginUser } from "../shared/apis/userLogin";
import { useAuthStore } from "../shared/store/authState";
import { toast } from "react-toastify";

const Login = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  
  useEffect(() => {
    isAuthenticated ? navigate({to: "/dashboard"}) : navigate({to: "/"})
  },[])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  const onSubmit = async (userData) => {
    try {
      const data = await LoginUser(userData);
      login(data);
      reset();
      if(data.message === "login Success"){
        navigate({ to: "/dashboard"});
        toast.success(`Welcome back ${data.user.name} 😊`)
      }
      
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="min-h-[85vh] w-full bg-black flex items-center justify-center">
      <div className="p-6.5 bg-[#19191FFF] w-[25%] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-[#FFFFFF] mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#FFFFFF] mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#FFFFFF] mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
