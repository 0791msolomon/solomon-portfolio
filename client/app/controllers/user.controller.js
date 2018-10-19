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

const createUser = (req, res) => {
  let user = new User({
    text: req.body.text
  });
  user
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
};

module.exports = { getAll, createUser };
