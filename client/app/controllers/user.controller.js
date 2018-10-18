// const userService = require("../services/user.services");
const { User } = require("../models/user");

const getAll = (req, res) => {
  User.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
};

module.exports = { getAll };
