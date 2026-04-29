import express from "express";
import { addTailor, getTailors, deleteTailor } from "../controllers/tailorController.js";

const router = express.Router();

router.post("/", addTailor);     // add tailor
router.get("/", getTailors);     // get all tailors
router.delete("/:id", deleteTailor); 

export default router;