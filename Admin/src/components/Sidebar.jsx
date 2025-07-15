import React, { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const Sidebar = () => {
  const { location } = useRouterState();
  const [active, setActive] = useState("dashboard"); 

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard.svg",
      path: "/dashboard",
    },
    {
      id: "add-product",
      label: "Add Product",
      icon: "addProducts.svg",
      path: "/addproducts",
    },
    {
      id: "add-category",
      label: "Add Category",
      icon: "addCategory.svg",
      path: "/category",
    },
    {
      id: "available-products",
      label: "Available Products",
      icon: "products.svg",
      path: "/products",
    },
    {
      id: "orders",
      label: "Orders",
      icon: "orders.svg",
      path: "/Orders",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-[20%] px-3">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            to={item.path}
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer transition-all
              ${
                isActive
                  ? "bg-[#ced0f83a] text-white" // selected
                  : "text-[#8C8D8B] hover:bg-[#2c2c2c]/10"
              }`}
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            <h3>{item.label}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
