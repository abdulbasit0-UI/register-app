import React, { useState, useEffect, useRef } from "react";
import { CCard, CCardBody } from "@coreui/react";
import axios from "axios";

const CreateOrder = () => {
  const [customers, setCustomers] = useState([]);
  const formRef = useRef();

  const [orders, setOrders] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemQuantity: "",
    itemDepositAmount: "",
    paymentType: "",
    customerID: "",
  });

  const {
    itemName,
    itemDescription,
    itemPrice,
    itemQuantity,
    itemDepositAmount,
    paymentType,
    customerID,
  } = orders;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/customers")
      .then((res) => {
        setCustomers(res.data.customers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (e) => {
    setOrders({ ...orders, [e.target.name]: e.target.value });
  };

  console.log(orders.itemName);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/api/orders", {
        itemName,
        itemDescription,
        itemPrice,
        itemQuantity,
        itemDepositAmount,
        paymentType,
        customerID,
      })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const clearForm = () => {
    formRef.current.reset();
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <form onSubmit={onSubmit} ref={formRef}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="mb-3" htmlFor="itemName">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    onChange={onChange}
                    placeholder="Product Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="mb-3" htmlFor="customerID">
                    Customer Name
                  </label>
                  <select
                    name="customerID"
                    onChange={onChange}
                    className="form-select"
                    id="customerID"
                  >
                    <option value="">Select Customer</option>
                    {customers.map((customer, index) => {
                      return (
                        <option key={index} value={customer._id}>
                          {customer.customerName}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-3" htmlFor="itemDescription">
                Product Description
              </label>
              <textarea
                className="form-control"
                name="itemDescription"
                id="itemDescription"
                onChange={onChange}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3">
                  <label className="mb-3" htmlFor="itemPrice">
                    Product Price
                  </label>
                  <input
                    type="number"
                    id="itemPrice"
                    name="itemPrice"
                    onChange={onChange}
                    placeholder="Product Price"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label className="mb-3" htmlFor="itemDepositAmount">
                    Deposit Amount
                  </label>
                  <input
                    type="text"
                    name="itemDepositAmount"
                    id="itemDepositAmount"
                    onChange={onChange}
                    placeholder="Deposit"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label className="mb-3" htmlFor="itemQuantity">
                    Product Quantity
                  </label>
                  <input
                    type="number"
                    id="itemQuantity"
                    name="itemQuantity"
                    onChange={onChange}
                    placeholder="Product Quantity"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label className="mb-3" htmlFor="paymentType">
                    Payment Type
                  </label>
                  <select
                    name="paymentType"
                    className="form-select"
                    id="paymentType"
                    onChange={onChange}
                  >
                    <option value="">Select Payment Type</option>
                    <option value="Cash">Cash</option>
                    <option value="Credit">Credit</option>
                    <option value="Check">Check</option>
                    <option value="eft">eft</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button onClick={clearForm} className="btn btn-primary">
                Make Order
              </button>
            </div>
          </form>
        </CCardBody>
      </CCard>
    </>
  );
};

export default CreateOrder;
