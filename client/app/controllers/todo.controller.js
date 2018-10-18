const { Todo } = require("../models/todo");

const getAll = (req, res) => {
  Todo.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
};

const createTodo = (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
};
module.exports = { createTodo, getAll };
