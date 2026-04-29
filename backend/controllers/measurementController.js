import Measurement from "../models/measurementModel.js";

// 🔹 SAVE / UPDATE measurements
export const saveMeasurements = async (req, res) => {
  try {
    const { userId, ...data } = req.body;

    let measurement = await Measurement.findOne({ userId });

    if (measurement) {
      // update existing
      measurement = await Measurement.findOneAndUpdate(
        { userId },
        data,
        { new: true }
      );
    } else {
      // create new
      measurement = await Measurement.create({ userId, ...data });
    }

    res.status(200).json(measurement);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔹 GET measurements
export const getMeasurements = async (req, res) => {
  try {
    const { userId } = req.params;

    const measurement = await Measurement.findOne({ userId });

    res.status(200).json(measurement);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};