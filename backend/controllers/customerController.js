import expressAsyncHandler from "express-async-handler";
import Customer from "../models/customerModel.js";

export const createCustomer = expressAsyncHandler(async (req, res, next) => {
  const { customerName, customerEmail, customerPhone, customerAddress } =
    req.body;
  if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
    return res.status(400).json({
      error: "Please provide all the required fields",
    });
  }

  const customer = await Customer.create({
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
  });

  if (customer) {
    return res.status(201).json({
      message: "Customer created successfully",
      customer,
    });
  } else {
    return res.status(400).json({
      error: "Unable to create customer",
    });
  }
});

export const getCustomers = expressAsyncHandler(async (req, res) => {
  const customers = await Customer.find();
  if (customers) {
    return res.status(200).json({
      message: "Customers fetched successfully",
      customers,
    });
  } else {
    return res.status(400).json({
      error: "Unable to fetch customers",
    });
  }
});

export const deleteCustomer = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;

  const customer = await Customer.findById(id);

  if (customer) {
    customer.remove();
    res.status(200).json({
      message: "Customer Deleted successfully",
    });
  } else {
    res.status(404).json({
      error: "Customer Not Found",
    });
  }
});
