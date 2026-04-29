import mongoose from "mongoose";



const bookingSchema = new mongoose.Schema(
  {
    tailorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tailor",
      required: true,
    },
    style: String,
    date: String,
    
   

    status: {
      type: String,
      default: "Pending", // 🔥 important
    },
  },
  { timestamps: true } // 🔥 gives createdAt
);

export default mongoose.model("Booking", bookingSchema);