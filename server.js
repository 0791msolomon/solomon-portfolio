const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const { User } = require("./mongoose");
require("dotenv").config();
// const router = require("./app/routes/index");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;

app.get("/users", (req, res) => {
  User.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
});
app.post("/users", (req, res) => {
  let user = new User({ text: req.body.text });
  user
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
});
// app.use(router);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
  { useNewUrlParser: true }
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
