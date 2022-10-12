const express = require("express");

const config = require("./config");

const db = require("./utils/database");

const productsRouter = require("./products/products.router");

const initModels = require("./models/initModels");

const app = express();

db.authenticate()
  .then(res => console.log("DB Authentication succesfully"))
  .catch(err => console.log(err));

db.sync()
  .then(res => console.log("DB Synced"))
  .catch(err => console.log(err));

initModels();

app.use(express.json());

app.get("/", (req, res) => {

  res.status(200).json({message: "OK!"});

});

app.use("/products", productsRouter);

app.listen(config.port, () => {

  console.log(`Server started at ${config.port}`);
  
});