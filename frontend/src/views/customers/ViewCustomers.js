import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CModal,
  CModalBody,
  CButton,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";

import axios from "axios";

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/customers")
      .then((res) => {
        setCustomers(res.data.customers);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteCustomer = (id) => {
    axios
      .delete(`http://localhost:8000/api/customers/delete/${id}`)
      .then((res) => {
        console.log(res);
        setCustomers(customers.filter((customer) => customer._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <CButton
            onClick={() => setModal(true)}
            className="btn btn-danger text-white"
          >
            Delete
          </CButton>
          <CModal show={modal} onClose={() => setModal(true)}>
            <CModalHeader closeButton>Modal title</CModalHeader>
            <CModalBody>Lorem ipsum dolor...</CModalBody>
            <CModalFooter>
              <button className="btn btn-primary">Do Something</button>{" "}
              <button
                className="btn btn-secondary"
                onClick={() => setModal(true)}
              >
                Cancel
              </button>
            </CModalFooter>
          </CModal>
          <table className="table" responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Phone</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => {
                return (
                  <>
                    <tr>
                      <td>{customer._id}</td>
                      <td>{customer.customerName}</td>
                      <td>{customer.customerEmail}</td>
                      <td>{customer.customerPhone}</td>
                      <td></td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  );
};

export default ViewCustomers;
