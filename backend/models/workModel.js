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
      default: 1,
    },
    itemDepositAmount: {
      type: Number,
      default: 0,
    },
    paymentType: {
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
