import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import tailorRoutes from "./routes/tailorRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js"; 
import userRoutes from "./routes/userroutes.js";
import measurementRoutes from "./routes/measurementRoutes.js";

dotenv.config();

const app = express();


connectDB();


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);


app.use("/api/tailors", tailorRoutes);


app.use("/api/bookings", bookingRoutes);
app.use("/api/tailors", tailorRoutes);

app.use("/api/users", userRoutes);
app.use("/api/measurements", measurementRoutes);

app.get("/", (req, res) => {
  res.send("API is running ");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});