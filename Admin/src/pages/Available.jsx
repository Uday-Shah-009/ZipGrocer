import React from "react";
import { useGetProducts } from "../shared/Queries/product.query";

const Available = () => {
  const { data, isLoading } = useGetProducts();
  console.log(data);
  return (
    <div className="w-full h-full mr-2">
      <h1 className="text-3xl font-semibold">Available Products</h1>

      <div className="flex items-center justify-between m-2 rounded-md p-3 bg-[#19191FFF] mt-7 border-b-2 border-[#3D3D3DFF]">
        <p className="text-[18px] text-[#8C8D8BFF]">
          total Products: {isLoading ? 0 : data.products.length}
        </p>
        <button className="bg-[#3D3D3DFF] px-4 py-2 text-white rounded-md font-semibold">
          Add new Product
        </button>
      </div>

      <div className="w-[99%] m-2 py-3 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
        <div className="grid grid-cols-7 place-items-center">
          <p className="text-[#8C8D8BFF]">image</p>
          <p className="text-[#8C8D8BFF]">product name</p>
          <p className="text-[#8C8D8BFF]">category</p>
          <p className="text-[#8C8D8BFF]">price</p>
          <p className="text-[#8C8D8BFF]">quantity</p>
          <p className="text-[#8C8D8BFF]">status</p>
          <p className="text-[#8C8D8BFF]">actions</p>
        </div>
        <hr className="w-full mt-4 border-[#393D47B3]" />

        {isLoading ? (
          <div className="flex justify-center items-center my-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          data.products.map((item) => {
            const last = data.products[data.products.length - 1];
            return (
            <React.Fragment key={item._id}>
              <div className="grid grid-cols-7 place-items-center mt-3">
                <img
                  width="40"
                  className="rounded-md object-fill h-9"
                  src={item.image}
                  alt="product"
                />
                <p className="font-semibold">{item.name}</p>
                <p className="text-[#8C8D8BFF]">{item.category}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p
                  className={
                    item.status === "available"
                      ? "text-[#22C55EFF]"
                      : "text-[red]"
                  }
                >
                  {item.status}
                </p>
                <div className="flex items-center gap-5">
                  <img src="edit.svg" alt="edit" />
                  <img
                    onClick={() => handleDelete(item._id)}
                    src="delete.svg"
                    alt="delete"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {item === last ? "" : <hr className="w-full mt-4 border-[#393D47B3]" /> }
            </React.Fragment>
          )})
        )}
      </div>
    </div>
  );
};

export default Available;
