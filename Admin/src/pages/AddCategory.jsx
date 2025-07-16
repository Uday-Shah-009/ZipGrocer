import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { addCategory } from "../shared/apis/Category";
import { toast } from "react-toastify";
import { useGetCategories } from "../shared/Queries/category.query";
import { useAddCategory } from "../shared/Queries/category.query";

const AddCategory = () => {
  const { data, isLoading, isError } = useGetCategories();
  const [image, setImage] = useState(null);
  const { mutate: addCategoryMutate, isPending } = useAddCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const file = image;
    const formData = new FormData();
    formData.append("name", data.category);
    formData.append("subcategory[]", data.sub1);
    formData.append("subcategory[]", data.sub2);
    formData.append("subcategory[]", data.sub3);
    formData.append("image", file);
    console.log(data)
    try {
      addCategoryMutate(formData);
    } catch (error) {
      toast.error(error);
    } finally {
      setImage(null);
      reset();
    }
  };

  return (
    <div className="text-white w-full h-full">
      <h1 className="text-3xl font-bold">Add Category</h1>
      <p className="text-[16px] text-[#8C8D8BFF] mt-4">
        Define new product categories to organize your inventory effectively.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center h-full gap-2 w-full mt-6">
          <div className="w-[70%]  p-13 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Add New Product Category</h1>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="category"
                className="text-[#FFFFFF] text-[18px] font-semibold"
              >
                Category Name
              </label>
              <input
                className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2"
                type="text"
                placeholder="Eg. Electronics"
                {...register("category", {
                  required: "category is required",
                })}
              />
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
              <label
                htmlFor="description"
                className="text-[#FFFFFF] text-[18px] mt-2 font-semibold"
              >
                Description
              </label>
              <textarea
                className="mt-2 w-full p-3 border border-[#393D47] rounded-[6px] bg-[#000000] text-white outline-none"
                {...register("description", {
                  required: "description required",
                  minLength: {
                    value: 8,
                    message: "minimum 8 characters are required",
                  },
                })}
                placeholder="elctronic devices and gadget"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-[30%]  bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center mr-2 items-center min-h-[350px]">
            <h1 className="text-3xl font-semibold">Available Categories</h1>
            <div className="p-2 w-[70%]">
              {isLoading ? (
                <div className="animate-spin border-t-2 w-[60px] h-[60px] border-b-blue-600 rounded-[50%]"></div>
              ) : (
                data.map((item) => (
                  <div key={item._id}>
                    <div className="flex items-center justify-between mt-3 w-full">
                      <div>
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                      </div>
                      <img className="cursor-pointer" src="edit.svg" alt="" />
                    </div>
                    <hr className="w-full mt-2 border-[#393D47B3]" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="mr-2">
          <div className="p-5 mt-2 bg-[#19191FFF] w-full rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">Product Media</h1>
            <p className="text-[#8C8D8BFF] mt-1">
              Upload images or videos of your product
            </p>
            <hr className="w-full mt-2 border-[#393D47B3]" />
            <div className="flex justify-center items-center flex-col mt-3">
              <label
                htmlFor="image"
                className="border-dashed border-2 flex justify-center items-center border-[#393D47FF] mt-3 rounded-lg w-[60%] h-[176px] flex-col"
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <>
                    <img src="imagePlace.svg" alt="" />
                    <p className="mt-3 text-[#8C8D8BFF]">
                      click to add image here
                    </p>
                  </>
                )}
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  {...register("image", {
                    required: "one image is must for a product",
                  })}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImage(file);
                    }
                  }}
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
        <div className="mr-2 mt-2">
          <div className="w-full p-6 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
            <h2 className="font-semibold text-2xl">SubCategories</h2>
            <input
              {...register("sub1")}
              placeholder="Subcategory 1"
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2 w-[60%]"
            />
            <input
              {...register("sub2")}
              placeholder="Subcategory 2"
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2 w-[60%]"
            />
            <input
              {...register("sub3")}
              placeholder="Subcategory 3"
              className="bg-[#000000] rounded-[6px] border border-[#393D47] outline-none mt-2 px-3 py-2 w-[60%]"
            />
          </div>
        </div>
        <div className="flex items-baseline gap-3 mb-3">
          <input
            className={`border border-[#3D3D3DFF] px-3 py-2 text-[#FFFFFF] font-semibold rounded-md mt-3 cursor-pointer flex items-center justify-center gap-2 ${
              isPending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#3D3D3DFF]"
            }`}
            type="submit"
            value={isPending ? "Saving..." : "Save Category"}
            disabled={isPending}
          />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
