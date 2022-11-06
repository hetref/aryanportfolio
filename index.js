const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();

const mainRoute = require("./routes/mainRoute");
app.use("/aryandeveloper/api", mainRoute);

// app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  //   console.log("Connected DB");
});

app.listen(PORT);
