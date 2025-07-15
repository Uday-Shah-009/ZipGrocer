// steps to setup tanstack router
//1. create a root route using createRootRoute
//2. create routes with 3 paramters 1.path 2.parentRoute 3.component to load
//3. create a routeTree from create routes
//4. create a router using routeTree

import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Dashboard from "../../pages/Dashboard";
import AddProduct from "../../pages/AddProduct";
import AddCategory from "../../pages/AddCategory";
import Available from "../../pages/Available";
import Orders from "../../pages/Orders";
import Login from "../../pages/Login";
import { useAuthStore } from "../store/authState";
import { requireAuth } from "../utils/requireAuth";
import { useMeQuery } from "../Queries/meQuery";

//route root for routing
const rootRoute = createRootRoute({
  component: () => {
    const { isAuthenticated } = useAuthStore();
    const { isLoading } = useMeQuery();

    if (isLoading) {
      return (
        <div className="bg-black min-h-screen flex items-center justify-center">
          <div className="w-[70px] h-[70px] rounded-full border-t-2 border-b-blue-600 animate-spin"></div>
        </div>
      );
    }

    return (
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="flex w-full mt-4 gap-4">
          {isAuthenticated && <Sidebar />}
          <Outlet />
        </div>
      </div>
    );
  },
});

//create routes using createRoute

const LoginRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: Login,
});

const dashboardRoute = createRoute({
  path: "/dashboard",
  getParentRoute: () => rootRoute,
  component: Dashboard,
  beforeLoad: requireAuth,
});

const addProductRoute = createRoute({
  path: "/addproducts",
  getParentRoute: () => rootRoute,
  component: AddProduct,
  beforeLoad: requireAuth,
});

const categoryRoute = createRoute({
  path: "/category",
  getParentRoute: () => rootRoute,
  component: AddCategory,
  beforeLoad: requireAuth,
});

const availableRoute = createRoute({
  path: "/products",
  getParentRoute: () => rootRoute,
  component: Available,
  beforeLoad: requireAuth,
});

const orderRoute = createRoute({
  path: "/Orders",
  getParentRoute: () => rootRoute,
  component: Orders,
  beforeLoad: requireAuth,
});

//create a routeTree to create a router
const routeTree = rootRoute.addChildren([
  LoginRoute,
  dashboardRoute,
  addProductRoute,
  categoryRoute,
  availableRoute,
  orderRoute,
]);

//router created using routeTree with instance route to use router
export const route = createRouter({ routeTree });
