import express from "express";
import {
  saveMeasurements,
  getMeasurements
} from "../controllers/measurementController.js";

const router = express.Router();

// save/update
router.post("/", saveMeasurements);

// get by user
router.get("/:userId", getMeasurements);

export default router;