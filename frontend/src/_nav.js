import React from "react";
import CIcon from "@coreui/icons-react";
import { cilCursor, cilSpeedometer } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    component: CNavGroup,
    name: "Customers",
    to: "/customers",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Add Customers",
        to: "/add-customers",
      },
      {
        component: CNavItem,
        name: "View Customers",
        to: "/view-customers",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Work Orders",
    to: "/customers",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Make Work Order",
        to: "/add-customers",
      },
      {
        component: CNavItem,
        name: "Order History",
        to: "/view-customers",
      },
    ],
  },
];

export default _nav;
