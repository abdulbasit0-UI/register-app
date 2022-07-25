import express from "express";
import cors from "cors";
import connectDB from "./config/Database.js";
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import customerRouter from "./routers/customer.routes.js";
import workOrders from "./routers/work.routes.js";
app.use("/api/customers", customerRouter);
app.use("/api/orders", workOrders);

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
