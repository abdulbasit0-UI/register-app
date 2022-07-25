import express from "express";
import { registerWork } from "../controllers/workController.js";
const router = express.Router();

router.post("/", registerWork);

export default router;
