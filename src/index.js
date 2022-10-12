const express = require("express");

const config = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

  res.status(200).json({message: "OK!"});

});

app.listen(9000, () => {

  console.log(`Server started at ${port}`);
  
});