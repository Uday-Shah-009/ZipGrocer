import { Product } from "../Models/product.model.js";

export const createProduct = async (product) => {
  const newProduct = await Product.create({
    image: product.image,
    name: product.name,
    description: product.description,
    brand: product.brand,
    quantity: product.quantity,
    price: product.price,
    category: product.category,
    subcategory: product.subcategory,
  });
  return newProduct;
};

export const findProductByName = async (name) => {
  const product = Product.findOne({ name });
  return product;
};

export const findProductById = async (id) => {
  const product = await Product.find(id);
  return product;
};

export const DeleteByID = async (id) => {
  const deleted = await Product.findByIdAndUpdate(id, { isActive: false });
  return deleted;
};

export const updateById = async (id, updateData) => {
  return await Product.findByIdAndUpdate(id, updateData);
};

export const allProducts = async () => {
  const products = await Product.find({ isActive: true });
  return products;
};

export const quantityManager = async (id, quantity) => {
  return await Product.findByIdAndUpdate(
    id,
    { $inc: { quantity: -quantity } },
    { new: true }
  );
};
