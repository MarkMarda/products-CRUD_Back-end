const express = require("express");

const config = require("./config");

const db = require("./utils/database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

  res.status(200).json({message: "OK!"});

});

app.listen(config.port, () => {

  console.log(`Server started at ${config.port}`);
  
});