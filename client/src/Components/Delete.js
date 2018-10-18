import React, { Component } from "react";
import * as todoServices from "../services/todo";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    todoServices
      .getTodos()
      .then(response => {
        this.setState({ todos: response });
      })
      .catch(err => console.log(err));
  };
  renderTodos = () => {
    return this.state.todos.map(todo => {
      return (
        <div key={todo._id}>
          <h1>{todo.text}</h1>
        </div>
      );
    });
  };
  render() {
    return <div>{this.state.todos ? this.renderTodos() : null}</div>;
  }
}
export default Delete;
