import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: Number,
      required: true,
    },
    customerAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", CustomerSchema);
