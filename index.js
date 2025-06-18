require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const medicineRoutes=require("./routes/medicineRoutes.js")
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));



//router
app.use("/api/products",medicineRoutes)



//API updated

app.get("/", (req, res) => {
  res.send("Welcome to the Medicial API");
});



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

