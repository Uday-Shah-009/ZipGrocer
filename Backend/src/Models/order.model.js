import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    snapshot: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String },
        description: { type: String },
      },
    ],
    quantity: { type: Number, required: true, default: 1 },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "packing",
        "assigning partner",
        "picked for delivery",
        "delivered",
      ],
      default: "packing",
    },
    deliveryPartnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);
