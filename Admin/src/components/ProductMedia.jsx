import React from "react";
import { useForm } from "react-hook-form";

const ProductMedia = () => {
  const AddProduct = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    return (
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
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
      </div>
    );
  };
};
export default ProductMedia;
