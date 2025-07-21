import React, { useEffect } from "react";
import { useState } from "react";
import { useAllOrders, useUpdateStatus } from "../shared/Queries/orders.query";
import { useForm } from "react-hook-form";

const Orders = () => {
  const { data, isLoading } = useAllOrders();
  const { mutate: useStatusMutate, isPending } = useUpdateStatus();
  const [orderDetails, setOrderDetails] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleDetails = (order) => {
    setOrderDetails(order);
  };
  const handleUpdate = (id, status) => {
    console.log(id);
    useStatusMutate({ id, status });
  };

  useEffect(() => {
    if (orderDetails) {
      console.log("Order Details Updated:", orderDetails);
      reset({ status: orderDetails.status });
    }
  }, [orderDetails, reset]);

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-semibold">Orders Overview</h1>
      <div className="flex p-2 gap-2 items-center">
        <div className=" mt-7 py-3 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
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
          {isLoading ? (
            <div className="loading-bars"></div>
          ) : data.orders.length > 0 ? (
            data.orders.map((item) => {
              const date = new Date(item.createdAt).toLocaleDateString("en-IN");
              return (
                <div key={item._id}>
                  <div className="py-2 grid grid-cols-7 place-items-center mt-3">
                    <p className="ml-5">{item._id}</p>
                    <p>{item.userId.name}</p>
                    <p className="text-[#8C8D8BFF]">{date}</p>
                    <p>₹{item.totalAmount}</p>
                    <p
                      className={`
                font-semibold
                ${
                  item.status === "delivered"
                    ? "text-[#22C55EFF]"
                    : item.status === "picked for delivery"
                    ? "text-[#3B82F6FF]"
                    : item.status === "assigning partner"
                    ? "text-[#6366F1FF]"
                    : item.status === "packing"
                    ? "text-[#EAB308FF] "
                    : "text-white"
                }
                `}
                    >
                      {item.status}
                    </p>
                    <p>
                      {item.deliveryPartnerId === null
                        ? "Not Assigned"
                        : item.deliveryPartnerId.name}
                    </p>
                    <img
                      onClick={() => handleDetails(item)}
                      className="cursor-pointer"
                      src="productAction.svg"
                      alt=""
                    />
                  </div>
                  <hr className="w-full mt-4 border-[#393D47B3]" />
                </div>
              );
            })
          ) : (
            <div className="flex items-center justify-center p-5 mt-3">
              <p className="text-[16px] text-[#8C8D8BFF]">no orders yet</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-[25%] mt-5 py-3 px-2 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center mb-3">
        <h1 className="text-2xl font-semibold">Order Details</h1>
        <hr className="w-full mt-4 border-[#393D47B3]" />
        <div className="mt-3 flex flex-col">
          {orderDetails && (
            <>
              <div key={orderDetails._id} className="flex items-center gap-2 ">
                <p className="text-[#8C8D8BFF]">OrderID: </p>
                <p className="text-white font-semibold">{orderDetails._id}</p>
              </div>
              <hr className="w-full mt-4 border-[#393D47B3]" />
              <div className="flex items-center gap-2">
                <p className="text-[#8C8D8BFF]">Customer: </p>
                <p className="text-white font-semibold">
                  {orderDetails.userId.name}
                </p>
              </div>
              <hr className="w-full mt-4 border-[#393D47B3]" />
              <div className="flex items-center gap-2">
                <p className="text-[#8C8D8BFF]">Status: </p>

                <div key={orderDetails._id}>
                  <select
                    name="status"
                    className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
                    {...register("status")}
                    onChange={(e) => {
                      handleUpdate(orderDetails._id, e.target.value);
                    }}
                  >
                    <option value="delivered" className="text-[#22C55EFF]">
                      delivered
                    </option>
                    <option
                      value="picked for delivery"
                      className="text-[#3B82F6FF]"
                      disabled
                    >
                      picked for delivery
                    </option>
                    <option
                      value="assigning partner"
                      className="text-[#6366F1FF]"
                    >
                      assigning partner
                    </option>
                    <option value="packing" className="text-[#EAB308FF]">
                      packing
                    </option>
                  </select>
                </div>
              </div>
              <hr className="w-full mt-4 border-[#393D47B3]" />
              <div className="flex items-center gap-2">
                <p className="text-[#8C8D8BFF]">Order Date: </p>
                <p className="text-white font-semibold">
                  {new Date(orderDetails.createdAt).toLocaleDateString("en-IN")}
                </p>
              </div>
              <hr className="w-full mt-4 border-[#393D47B3]" />
              <div className="flex items-center gap-2">
                <p className="text-[#8C8D8BFF]">Total: </p>
                <p className="text-white font-semibold">
                  {orderDetails.totalAmount}
                </p>
              </div>
              <hr className="w-full mt-4 border-[#393D47B3]" />
              <div className="mt-5">
                <h1 className="font-semibold text-2xl">Items Details</h1>
                <hr className="w-full mt-4 border-[#393D47B3]" />
                <div className="flex flex-col mt-7 items-center w-full ">
                  {orderDetails.snapshot.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center gap-5">
                        <div className="w-[60px] h-[60px] rounded-md">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full rounded-md object-cover"
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="flex flex-col gap-1">
                            <p className="text-1xl font-bold">{item.name}</p>
                            <p className="text-[#8C8D8BFF]">
                              {item.quantity} x ₹{item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#FFFFFF] font-semibold">
                            ₹{item.quantity * item.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
