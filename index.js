require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const medicineRoutes=require("./routes/medicineRoutes.js")
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
  origin: ['http://localhost:3000', 'https://sports-ecommerce-frontend.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


//router
app.use("/api/products",medicineRoutes)



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on  http://localhost:${process.env.PORT}`)
    });
  })
 .catch((error) => {
  console.error("Connection failed:", error.message);
});

// Global Error Handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred!' });
});
