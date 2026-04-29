import mongoose from "mongoose";

const styleSchema = new mongoose.Schema({
  title: String,
  image: String,
  category: String, // ethnic, formal etc
});

export default mongoose.model("Style", styleSchema);