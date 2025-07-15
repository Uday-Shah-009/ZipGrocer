import React, { useEffect } from "react";
import { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails,setOrderDetails] = useState({})
 
  const handleDetials = (order) => {
    setOrderDetails(order);
    console.log(orderDetails);
  }

  useEffect(() => {
    setOrders([
      {
        orderId: "ORD12345",
        customerName: "Aarav Mehta",
        date: "2025-07-10",
        total: "₹1250",
        status: "Delivered",
        deliveryPartner: "Ravi Kumar",
      },
      {
        orderId: "ORD12346",
        customerName: "Nikita Sharma",
        date: "2025-07-11",
        total: "₹870",
        status: "Out for Delivery",
        deliveryPartner: "Anjali Singh",
      },
      {
        orderId: "ORD12347",
        customerName: "Rahul Verma",
        date: "2025-07-09",
        total: "₹1550",
        status: "assigning partner",
        deliveryPartner: "Not Assigned",
      },
      {
        orderId: "ORD12349",
        customerName: "Imran Khan",
        date: "2025-07-12",
        total: "₹940",
        status: "Packing",
        deliveryPartner: "Not Assigned",
      },
    ]);
  }, []);

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-semibold">Orders Overview</h1>
      <div className="flex p-2 gap-2 items-center">
        <div className="w-[75%] mt-7 py-3 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
          <div className="grid grid-cols-7 place-items-center">
            <p className="text-[#FFFFFF] font-semibold">Order_ID</p>
            <p className="text-[#FFFFFF] font-semibold">Customer name</p>
            <p className="text-[#FFFFFF] font-semibold">date</p>
            <p className="text-[#FFFFFF] font-semibold">total</p>
            <p className="text-[#FFFFFF] font-semibold">status</p>
            <p className="text-[#FFFFFF] font-semibold">Delivery Partner</p>
            <p className="text-[#FFFFFF] font-semibold">actions</p>
          </div>
          <hr className="w-full mt-4 border-[#393D47B3]" />
          {orders.map((item) => (
            <>
              <div className="py-2 grid grid-cols-7 place-items-center mt-3">
                <p>{item.orderId}</p>
                <p>{item.customerName}</p>
                <p className="text-[#8C8D8BFF]">{item.date}</p>
                <p>{item.total}</p>
                <p
                  className={`
                font-semibold
                ${
                  item.status === "Delivered"
                    ? "text-[#22C55EFF]"
                    : item.status === "Out for Delivery"
                    ? "text-[#3B82F6FF]"
                    : item.status === "assigning partner"
                    ? "text-[#6366F1FF]"
                    : item.status === "Packing"
                    ? "text-[#EAB308FF] "
                    : "text-white"
                }
                `}
                >
                  {item.status}
                </p>
                <p>{item.deliveryPartner}</p>
                <img
                  onClick={() => handleDetials({item})}
                  className="cursor-pointer"
                  src="productAction.svg"
                  alt=""
                />
              </div>
              <hr className="w-full mt-4 border-[#393D47B3]" />
            </>
          ))}
        </div>
        <div className="w-[25%] mt-7 py-3 px-2 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
          <h1 className="text-2xl font-semibold">Order Details</h1>
          <hr className="w-full mt-4 border-[#393D47B3]" />
           <div className="mt-3 flex flex-col items-center justify-center">

           </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
