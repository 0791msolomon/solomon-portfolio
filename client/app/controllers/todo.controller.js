const { Todo } = require("../models/todo");

const getAll = (req, res) => {
  let limit = parseInt(req.query.amount) || "";
  Todo.find()
    .limit(limit)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const findById = (req, res) => {
  let id = req.params.id;
  Todo.findById(id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const createTodo = (req, res) => {
  let todo = new Todo({
    task: req.body.task
  });
  todo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const deleteTodo = (req, res) => {
  let id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(500).send();
    });
};

const updateTodo = (req, res) => {
  let id = req.params.id;
  let taskCompleted = !req.body.completed;
  if (taskCompleted) {
    Todo.findByIdAndUpdate(
      id,
      { $set: { completed: true, completedOn: new Date() } },
      { new: true }
    )
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  } else {
    Todo.findByIdAndUpdate(
      id,
      { $set: { completed: false, completedOn: null } },
      { new: true }
    )
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
module.exports = { createTodo, getAll, updateTodo, findById, deleteTodo };
