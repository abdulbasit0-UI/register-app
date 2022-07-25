import mongoose from "mongoose";

const WorkSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
    itemDepositAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    paymentType: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Orders", WorkSchema);
