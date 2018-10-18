import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as todoServices from "../services/todo";
import { getTodoList } from "../actions";
import TodoTemplate from "./TodoTemplate";
import BreadCrumbs from "./BreadCrumbs";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, newTodo: "", task: null };
  }

  componentDidMount = () => {
    this.props.getTodoList();
    console.log(this.props.todoList);
    todoServices
      .getTodos()
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  open = () => {
    this.setState({ modal: true });
  };
  close = () => {
    this.setState({ modal: false, newTodo: "" });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  renderTodoList = () => {
    return this.props.todoList.map(task => {
      let text = null;
      let background = null;
      if (task.completed) {
        text = "white";
        background = "#b5fcb0";
      }
      return (
        <div key={task.task} onClick={() => this.setState({ task })}>
          <TodoTemplate
            color={text}
            backgroundColor={background}
            task={task.task}
            completed={task.completed}
            date={task.date}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div id="container">
        <BreadCrumbs breadCrumb={"To Do List"} />

        <button
          className="btn-sm btn-success todoButton"
          onClick={() => this.open()}
        >
          Add Todo
        </button>
        <div className="col-6">
          {this.props.todoList
            ? this.renderTodoList()
            : "There are currently no tasks on your to do list."}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.close}>
          <ModalHeader toggle={this.close}>Create New To Do!</ModalHeader>
          <ModalBody>
            <input
              placeholder="New Task"
              className="form-control"
              type="text"
              name="newTodo"
              value={this.state.newTodo}
              onChange={this.onChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => console.log(this.state)}>
              Add to List
            </Button>{" "}
            <Button color="secondary" onClick={this.close}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps({ todoList }) {
  return {
    todoList
  };
}
export default connect(
  mapStateToProps,
  { getTodoList }
)(TodoList);
