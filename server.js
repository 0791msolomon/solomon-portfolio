const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
// const router = require("./app/routes/index");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// const generatePassword = require("password-generator");

// app.use(router);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
  { useNewUrlParser: true }
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
