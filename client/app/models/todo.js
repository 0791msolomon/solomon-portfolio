const mongoose = require("mongoose");

const Todo = mongoose.model("todos", {
  text: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  }
});

module.exports = { Todo };
