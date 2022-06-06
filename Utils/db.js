const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.ATLAS;

mongoose
  .connect(url)
  .then(() => {
    console.log("Hala Mongo");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
