import React from "react";

const TodoTemplate = props => {
  return (
    <div
      className="card text-center "
      style={{
        backgroundColor: props.backgroundColor
      }}
    >
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <strong>Completed- </strong>
          {props.completed.toString()}
        </h5>
        <p className="card-text">
          <strong>Task- </strong>
          {props.task}
        </p>
        <p className="card-text">
          <strong>
            {props.completed ? `Completed on- ${props.date}` : null}
          </strong>
        </p>
        <div className="addTodoBtn  btn-sm  mt-auto mb-0">
          <button
            className="btn-secondary"
            onClick={() => props.submit(props.info)}
          >
            <strong>Completed</strong>
          </button>
          <button
            className="btn-danger"
            onClick={() => props.delete(props.info._id)}
          >
            <strong>
              <span /> Delete <span />
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoTemplate;
