const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT | 4000, () => {
  console.log("Server is running on port {process.env.PORT}");
});
