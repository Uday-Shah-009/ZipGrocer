import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-[#FFFFFF] font-semibold">
        Dashboard OverView
      </h1>
      <div className="mt-7 flex gap-10">
        <div className="bg-[#19191FFF] px-5 py-3 w-[290px] h-[130px] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#8C8D8BFF] text-[14px]">Total Users</p>
            <img width="16" height="16" src="users.svg" alt="" />
          </div>
          <p className="text-white font-bold text-2xl">50</p>
        </div>
        <div className="bg-[#19191FFF] px-5 py-3 w-[290px] h-[130px] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#8C8D8BFF] text-[14px]">Total Orders</p>
            <img width="16" height="16" src="orders.svg" alt="" />
          </div>
          <p className="text-white font-bold text-2xl">130</p>
        </div>
        <div className="bg-[#19191FFF] px-5 py-3 w-[290px] h-[130px] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#8C8D8BFF] text-[14px]">Delivery Partners</p>
            <img width="16" height="16" src="delivery.svg" alt="" />
          </div>
          <p className="text-white font-bold text-2xl">24</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
