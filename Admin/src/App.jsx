import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import { route } from "./shared/router/routeTree";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/configs/QueryClient.js"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={route} />
      <ToastContainer theme="dark" />
    </QueryClientProvider>
  );
};

export default App;
