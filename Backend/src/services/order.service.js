import {
  acceptedOrder,
  createOrderDoa,
  GetAllOrdersDoa,
  getOrderById,
  getOrderByuser,
  GetProductsDetailsDao,
  orderStatus,
} from "../DOA/order.doa.js";
import { getCartDetails } from "./cart.service.js";
import { clearCart } from "../DOA/user.doa.js";
import { quantityManager } from "../DOA/product.doa.js";

export const createOrderService = async (userId) => {
  const { cartItems, Total } = await getCartDetails(userId);

  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty");
  }
  
  await Promise.all(
    cartItems.map(async (item) => {
      return await quantityManager(item.productId, item.quantity);
    })
  );

  const orderData = {
    userId,
    snapshot: cartItems.map((item) => ({
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    })),
    totalAmount: Total,
    quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
  };

  const order = await createOrderDoa(orderData);
  await clearCart(userId);
  return order;
};

export const getAllOrders = async () => {
  const orders = await GetAllOrdersDoa();
  if (!orders || orders.length === 0) {
    return { message: "No orders for now" };
  }
  return orders;
};

export const userOrders = async (id) => {
  const orders = await getOrderByuser(id);
  return orders;
};

export const updateOrderStatus = async (id, status) => {
  const updated = await orderStatus(id, status);
  return updated;
};

export const acceptOrderService = async (id, partnerid, status) => {
  const order = await getOrderById(id);
  if (!order) return null;
  if (order.status !== "assigning partner")
    return { message: "be Quick next time!!" };
  const accepted = await acceptedOrder(id, partnerid, status);
  return { accepted, message: "accepted pick the order from store" };
};

export const GetProductDetails = async (id) => {
  const order = await GetProductsDetailsDao(id);
  return order.snapshot.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));
};
