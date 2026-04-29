import Booking from "../models/Booking.js";

// ✅ CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const { userId, tailorId, name, phone, style, date } = req.body;

    // 🔥 validation
    if (!tailorId || !name || !phone || !style || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      
      tailorId,
      name,
      phone,
      style,
      date,
    });

    await booking.save();

    res.status(201).json({
      message: "Booking successful ",
      booking,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET BOOKINGS (WITH TAILOR DETAILS)
export const getBookings = async (req, res) => {
  try {
    
    const { email } = req.params;
    const bookings = await Booking.find({userEmail:email})
      .populate("tailorId", "name shopName")
      .sort({ createdAt: -1 }); // latest first 🔥

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await Booking.find({ userId })
      .populate("tailorId", "name shopName")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};