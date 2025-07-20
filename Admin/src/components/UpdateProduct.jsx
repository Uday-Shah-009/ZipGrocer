import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateProduct } from "../shared/Queries/product.query";
import { toast } from "react-toastify";

const UpdateProduct = ({ product, edit }) => {
  const { mutate: useUpdateMutate, isPending } = useUpdateProduct(edit);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const updated = {
      "name" : data.name,
      "price": data.price,
      "quantity": data.stock,
      "description": data.description,
      "brand": data.brand
    }
    try {
      useUpdateMutate({id: product._id, updated});
    } catch (err) {
      toast.error(err);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full min-h-screen">
      <div className="p-5 bg-[#19191FFF] w-full rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col ">
        <h1 className="text-2xl font-semibold">Update product</h1>
        <p className="text-[#8C8D8BFF] mt-3">
          Update product information here{" "}
        </p>
        <div>
          <div className="flex flex-col mt-5">
            <label htmlFor="name" className="text-[#FFFFFF] text-[18px]">
              Product Name
            </label>
            <input
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
              type="text"
              placeholder="Eg. wheat"
              {...register("name", {
                required: "Product name is required",
              })}
              defaultValue={product.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}

            <label
              htmlFor="description"
              className="text-[#FFFFFF] text-[18px] mt-2"
            >
              Description
            </label>
            <textarea
              className="mt-2 w-full p-3 border border-[#393D47] rounded-[6px] bg-[#000000] text-white outline-none"
              {...register("description", {
                required: "description required",
                minLength: {
                  value: 15,
                  message: "minimum 15 characters are required",
                },
              })}
              defaultValue={product.description}
              placeholder="enter Description here eg. pure from farms perfectly refined"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
            <label htmlFor="name" className="text-[#FFFFFF] text-[18px] mt-2">
              brand Name
            </label>
            <input
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
              type="text"
              placeholder="Eg. ashrivad"
              {...register("brand", {
                required: "brand is required",
              })}
              defaultValue={product.brand}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
            )}
          </div>
        </div>
        <div className="p-6.5 bg-[#19191FFF] w-[38%] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center mt-4 mb-2">
          <h1 className="text-2xl font-semibold">Pricing and Stocking</h1>
          <p className="text-[#8C8D8BFF] mt-1">
            Set prices and manage stock levels.
          </p>
          <hr className="w-full mt-2 border-[#393D47B3]" />
          <div className="flex flex-col mt-5">
            <label
              htmlFor="price"
              className="text-[#FFFFFF] text-[18px] flex items-center gap-1"
            >
              <img src="priceSign.svg" alt="" />
              <p className="text-[16px]">Price</p>
            </label>
            <input
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
              type="number"
              step="0.01"
              placeholder="Eg. 20"
              {...register("price", {
                required: "Price is required",
                validate: {
                  notZero: (value) => value > 0 || "price must be more than 0",
                },
              })}
              defaultValue={product.price}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}

            <label
              htmlFor="stock"
              className="text-[#FFFFFF] text-[18px] flex items-center gap-1 mt-2"
            >
              <img src="priceSign.svg" alt="" />
              <p className="text-[16px]">Stock</p>
            </label>
            <input
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
              type="number"
              step="0.01"
              placeholder="Eg. 20"
              {...register("stock", {
                required: "stock is required",
                validate: {
                  notZero: (value) => value > 5 || "stock must be more than 5",
                },
              })}
              defaultValue={product.quantity}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm mt-1">
                {errors.stock.message}
              </p>
            )}
          </div>
        </div>
        <input
          type="submit"
          value={isPending ? "Updating..." : "Update Product"}
          className="border px-3 py-2 text-[#FFFFFF] font-semibold rounded-md hover:bg-[#3D3D3DFF] m-2"
          disabled={isPending}
        />
      </div>
    </form>
  );
};

export default UpdateProduct;
