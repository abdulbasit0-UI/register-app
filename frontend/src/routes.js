import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const AddCustomers = React.lazy(() => import("./views/customers/AddCustomers"));
const ViewCustomers = React.lazy(() =>
  import("./views/customers/ViewCustomers")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/add-customers", name: "Add Customers", element: AddCustomers },
  { path: "/view-customers", name: "View Customers", element: ViewCustomers },
];

export default routes;
