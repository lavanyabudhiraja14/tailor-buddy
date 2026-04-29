import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chest: Number,
  waist: Number,
  hips: Number,
  shoulder: Number,
});

export default mongoose.model("Measurement", measurementSchema);