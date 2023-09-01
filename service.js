const express = require("express");
const mongoes = require("mongoose");
const productRoutes =require("./routes/productsRoute")
const app = express();

//routes
app.use('/api/products',productRoutes);

mongoes
  .connect(
    "mongodb+srv://admin:admin12345@cluster0.hhubga3.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("Connected to mongodb successfully");
    app.listen(3002, () => {
      console.log("Hello world");
    });
  })
  .catch((error) => {
    console.log("Failed connect " + error);
  });
