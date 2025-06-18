const express = require("express");
const router = express.Router();
const {
  getMedicines,
  getMedicine,
  createMedicine,
  updatedMedicine,
  deleteMedicine
} = require("../controller/medicineController");

// Import middleware
const protect = require("../middleware/authMiddleware");  // checks if user is logged in
const adminOnly = require("../middleware/roleMiddleware"); // checks if user is admin

// Public routes (accessible to all)
router.get("/", getMedicines);
router.get("/:id", getMedicine);

// Admin-only routes (must be logged in and role must be admin)
router.post("/", protect, adminOnly, createMedicine);
router.put("/:id", protect, adminOnly, updatedMedicine);
router.delete("/:id", protect, adminOnly, deleteMedicine);

module.exports = router;
