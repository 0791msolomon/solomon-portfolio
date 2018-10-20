import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as todoServices from "../services/todo.services";
import { getTodoList } from "../actions";
import moment from "moment";
import TodoTemplate from "./TodoTemplate";
import BreadCrumbs from "./BreadCrumbs";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, newTodo: "", task: null, listAll: false };
  }

  componentDidMount = () => {
    todoServices
      .getTodos(4)
      .then(response => this.setState({ todoList: response }))
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
  submit = data => {
    let count = "";
    this.state.listAll ? (count = "") : (count = 4);
    todoServices.updateTodo(data).then(() => {
      this.fetchAllTodos(count);
    });
  };
  delete = id => {
    let count = 0;
    this.state.listAll ? (count = "") : (count = 4);
    todoServices.deleteTodo(id).then(() => {
      this.fetchAllTodos(count);
    });
  };
  createTodo = () => {
    todoServices
      .createTodo({ task: this.state.newTodo })
      .then(() => {
        return todoServices.getTodos();
      })
      .then(response =>
        this.setState({
          todoList: response,
          modal: false,
          newTodo: ""
        })
      )
      .catch(err => console.log(err));
  };
  fetchAllTodos = limit => {
    todoServices
      .getTodos(limit)
      .then(response => this.setState({ todoList: response }))
      .catch(err => console.log(err));
  };
  displayAllTodos = () => {
    todoServices
      .getTodos()
      .then(response => this.setState({ todoList: response, listAll: true }))
      .catch(err => console.log(err));
  };
  renderTodoList = () => {
    if (!this.state.todoList) {
      return;
    }
    return this.state.todoList.map(task => {
      let text = null;
      let background = null;
      let date = null;
      task.completedOn
        ? (date = moment(task.completedOn).format("DD/MM/YYYY"))
        : (date = "INCOMPLETE");
      if (task.completed) {
        text = "white";
        background = "#00ff00";
      }
      return (
        <div
          key={task._id}
          onClick={() => this.setState({ task })}
          className="individualTodo col-lg-3 col-md-4 col-sm-6 col-xs-12"
        >
          <TodoTemplate
            color={text}
            backgroundColor={background}
            task={task.task}
            completed={task.completed}
            date={date}
            info={task}
            submit={this.submit}
            delete={this.delete}
            checked={"checked"}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div id="container ">
        <BreadCrumbs breadCrumb={"To Do List"} />
        <div className="todoButtonDiv">
          <button
            style={{ marginRight: "2%" }}
            className=" btn-sm btn-info todoButton"
            onClick={() => this.displayAllTodos()}
          >
            List All
          </button>
          <button
            className=" btn-sm btn-success todoButton"
            onClick={() => this.open()}
          >
            Add Todo
          </button>
        </div>
        <br />
        <div className="todoContainer">
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
            <Button color="primary" onClick={() => this.createTodo()}>
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
