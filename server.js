require("./Utils/db");
const express = require("express");
const cors = require("cors");
const port = 2013;

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome...",
  });
});

app.listen(port, () => {
  console.log("Port running on: ", port);
});
