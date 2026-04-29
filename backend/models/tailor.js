import mongoose from "mongoose";

const tailorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  shopName: String,
  experience: Number,
  rating: {
    type: Number,
    default: 4.0
  },
  priceRange: String,
  image: String,
});

export default mongoose.model("Tailor", tailorSchema);