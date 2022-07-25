import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CTable,
  CButton,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CModal,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CModalBody,
} from "@coreui/react";

import axios from "axios";

const ViewCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [visible, setVisible] = useState(false);

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
        setVisible(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Customer Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Customer Phone</CTableHeaderCell>
                <CTableHeaderCell scope="col">
                  Customer Address
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {customers.map((customer, index) => {
                return (
                  <>
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">
                        {customer._id}
                      </CTableHeaderCell>
                      <CTableDataCell>{customer.customerName}</CTableDataCell>
                      <CTableHeaderCell scope="row">
                        {customer.customerEmail}
                      </CTableHeaderCell>
                      <CTableDataCell>{customer.customerPhone}</CTableDataCell>
                      <CTableDataCell>
                        {customer.customerAddress}
                      </CTableDataCell>
                      <CTableDataCell>
                        <button
                          className="btn btn-danger"
                          onClick={() => setVisible(true)}
                        >
                          Delete
                        </button>
                      </CTableDataCell>
                    </CTableRow>
                    <CModal visible={visible} onClose={() => setVisible(false)}>
                      <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Modal title</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        Are you sure you want delete this customer ?
                      </CModalBody>
                      <CModalFooter>
                        <CButton
                          color="secondary"
                          onClick={() => setVisible(false)}
                        >
                          Close
                        </CButton>
                        <CButton
                          color="primary"
                          onClick={() => deleteCustomer(customer._id)}
                        >
                          Delete Customer
                        </CButton>
                      </CModalFooter>
                    </CModal>
                  </>
                );
              })}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  );
};

export default ViewCustomers;
