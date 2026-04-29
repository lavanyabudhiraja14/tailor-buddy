import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  neck: Number,
  chest: Number,
  waist: Number,
  sleeve: Number,
  arm: Number,
  thigh: Number,
  ankle: Number,
  wrist: Number
}, { timestamps: true });

export default mongoose.model("Measurement", measurementSchema);