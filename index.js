require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const medicineRoutes = require("./routes/medicineRoutes.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", medicineRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to database!");
  })
  .catch((error) => {
    console.error("❌ Connection failed:", error.message);
  });

// ✅ Export app for Vercel
module.exports = app;
