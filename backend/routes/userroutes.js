import express from "express";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ message: "Signup successful" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error signing up" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "Please sign up first" });
    }

    if (user.password !== password) {
      return res.json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
});

// GET USER
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
    });

  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
});

export default router;