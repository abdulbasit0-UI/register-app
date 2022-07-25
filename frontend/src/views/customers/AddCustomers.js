import React, { useState, useRef } from "react";
import { CCard, CCardBody, CFormInput, CButton, CAlert } from "@coreui/react";
import axios from "axios";

const AddCustomers = () => {
  const [customers, setCustomers] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
  });

  const formRef = useRef();

  const [success, setSuccess] = useState("");

  const onChange = (e) => {
    setCustomers({ ...customers, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/customers",
        customers
      );
      setSuccess(response.data.message);
      setCustomers({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        customerAddress: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    formRef.current.reset();
  };

  return (
    <>
      <CCard>
        <CCardBody>
          {success && (
            <CAlert color="success" dismissible>
              {success}
            </CAlert>
          )}
          <form onSubmit={onSubmit} ref={formRef}>
            <div className="mb-3">
              <CFormInput
                type="text"
                name="customerName"
                id="CustomerName"
                label="Customer Name"
                onChange={onChange}
                placeholder="Customer Name"
                aria-describedby="CustomerName"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="email"
                name="customerEmail"
                id=""
                onChange={onChange}
                label="Customer Email"
                placeholder="Customer Email"
                aria-describedby="customerEmail"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="number"
                onChange={onChange}
                name="customerPhone"
                id="customerPhone"
                label="Customer Phone"
                placeholder="Customer Phone"
                aria-describedby="customerPhone"
              />
            </div>
            <div className="mb-3">
              <CFormInput
                type="text"
                name="customerAddress"
                id="customerAddress"
                label="Customer Address"
                onChange={onChange}
                placeholder="Customer Address"
                aria-describedby="customerAddress"
              />
            </div>
            <div className="mb-3"></div>
            <CButton color="primary" onClick={clearForm} type="submit">
              Add Customer
            </CButton>
          </form>
        </CCardBody>
      </CCard>
    </>
  );
};

export default AddCustomers;
