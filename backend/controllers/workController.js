import expressAsyncHandler from "express-async-handler";
import Order from "../models/workModel.js";
export const registerWork = expressAsyncHandler(async (req, res) => {
  const {
    itemName,
    itemDescription,
    itemPrice,
    itemQuantity,
    itemDepositAmount,
    paymentType,
    customerName,
    customerID,
  } = req.body;

  if (
    !itemName ||
    !itemDescription ||
    !itemPrice ||
    !itemQuantity ||
    !paymentType ||
    !customerName ||
    !customerID
  ) {
    return res.status(400).json({
      error: "Please provide all the required fields",
    });
  }

  const work = await Order.create({
    itemName,
    itemDescription,
    itemPrice,
    itemQuantity,
    itemDepositAmount,
    paymentType,
    customerName,
    customerID,
  });

  if (work) {
    return res.status(201).json({
      message: "Order created successfully",
      work,
    });
  } else {
    return res.status(400).json({
      error: "Unable to create order",
    });
  }
});
