import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetCategories } from "../shared/Queries/category.query";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { data, isLoading, isError } = useGetCategories();
  const [SubCategory, setSub] = useState([]);
  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      setSub(data[0].subcategory);
    }
  },[data , isLoading]);
  return (
    <div className="w-full">
      <h1 className="text-3xl text-[#FFFFFF] font-semibold">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 flex items-center gap-2">
          {/* Left Panel */}
          <div className="p-5 bg-[#19191FFF] w-[60%] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
            <h1 className="text-2xl font-semibold">Product Details</h1>
            <p className="text-[#8C8D8BFF] mt-1">
              Provide essential information about the product
            </p>
            <hr className="w-full mt-2 border-[#393D47B3]" />
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
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
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
                placeholder="enter Description here eg. pure from farms perfectly refined"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <div className="p-6.5 bg-[#19191FFF] w-[38%] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">Product Media</h1>
            <p className="text-[#8C8D8BFF] mt-1">
              Upload images or videos of your product
            </p>
            <hr className="w-full mt-2 border-[#393D47B3]" />
            <div className="flex justify-center items-center flex-col mt-3">
              <label
                htmlFor="image"
                className="border-dashed border-2 flex justify-center items-center border-[#393D47FF] mt-3 rounded-lg w-[279px] h-[176px] flex-col"
              >
                <img src="imagePlace.svg" alt="" />
                <p className="mt-3 text-[#8C8D8BFF]">click to add image here</p>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  {...register("image", {
                    required: "one image is must for a product",
                  })}
                  className="hidden"
                />
              </label>
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Pricing Panel */}
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
                    notZero: (value) =>
                      value > 0 || "price must be more than 0",
                  },
                })}
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
                    notZero: (value) =>
                      value > 5 || "stock must be more than 5",
                  },
                })}
              />
              {errors.stock && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.stock.message}
                </p>
              )}
            </div>
          </div>

          {/* Category Panel */}
          <div className="p-6.5 bg-[#19191FFF] w-[38%] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center mt-4 mb-2">
            <h1 className="text-2xl font-semibold">Category management</h1>
            <p className="text-[#8C8D8BFF] mt-1">
              select the category of product
            </p>
            <hr className="w-full mt-2 border-[#393D47B3]" />
            <div className="flex flex-col mt-4">
              <label htmlFor="category" className="text-[#FFFFFF] text-[18px]">
                Category
              </label>
              <select
                className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
                name="category"
                {...register("category", {
                  required: "Please select a category",
                })}
                onChange={(e) => {
                  const value = e.target.value;
                  console.log(value);
                  const category = data.find((item) => item.name === value);
                  setSub(category.subcategory);
                }}
              >
                {isLoading ? (
                  <option value="loading">Loading Category</option>
                ) : (
                  data.map((item) => (
                    <option key={item._id} value={item.name}>
                      {item.name}
                    </option>
                  ))
                )}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}

              {SubCategory.length > 0 ? (
                <>
                  <label className="text-[#FFFFFF] text-[18px] mt-2">
                    SubCategory
                  </label>
                  <select
                    name="subcategory"
                    className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
                    {...register("subcategory", {
                      required: "Please select a subcategory",
                    })}
                  >
                    {SubCategory.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.subcategory && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subcategory.message}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-[#8C8D8BFF] mt-2">
                  No subcategories available
                </p>
              )}
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Add Product"
          className="border px-3 py-2 text-[#FFFFFF] font-semibold rounded-md hover:bg-[#3D3D3DFF] m-2"
        />
      </form>
    </div>
  );
};

export default AddProduct;
