require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API updated");
});

// Use the MongoDB URI from the .env file
const mongoURI = process.env.MONGO_URI;

// why he added Node-API in the url ??
// ayqw8vr.mongodb.net/Node-API
mongoose
  .connect(
    mongoURI
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Connection to MongoDb failed"));