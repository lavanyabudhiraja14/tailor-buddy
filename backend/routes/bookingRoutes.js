import express from "express";
import { createBooking, getBookings,getUserBookings } from "../controllers/bookingController.js";

const router = express.Router();
router.get("/user/:userId", getUserBookings);
router.post("/", createBooking);
router.get("/", getBookings);


export default router;