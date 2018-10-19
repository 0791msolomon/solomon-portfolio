const mongoose = require("mongoose");

const Todo = mongoose.model("todos", {
  task: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedOn: {
    type: Number,
    default: null
  }
});

module.exports = { Todo };
