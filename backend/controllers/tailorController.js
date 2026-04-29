import Tailor from "../models/tailor.js";

// ➕ ADD TAILOR
export const addTailor = async (req, res) => {
  try {
    const tailor = new Tailor(req.body);
    await tailor.save();

    res.status(201).json({
      message: "Tailor added",
      tailor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 GET ALL TAILORS
export const getTailors = async (req, res) => {
  try {
    const tailors = await Tailor.find();
    res.status(200).json(tailors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//del tailor
export const deleteTailor = async (req, res) => {
    try {
      const deleted = await Tailor.findByIdAndDelete(req.params.id);
  
      if (!deleted) {
        return res.status(404).json({ message: "Tailor not found" });
      }
  
      res.status(200).json({ message: "Tailor deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };