import React from "react";

const TodoTemplate = props => {
  return (
    <div
      className="card card-outline-secondary mb-3 text-center"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <div className="card-block">
        <blockquote className="card-blockquote">
          <div style={{ float: "left" }}>
            {" "}
            <p>
              <strong>
                <u>Task:</u>{" "}
              </strong>
              {props.task}
            </p>
          </div>
          <div style={{ float: "left" }}>
            {" "}
            <footer>
              <strong style={{ float: "left" }}>Completed: </strong>
              <p style={{ float: "left" }}> {props.completed.toString()}</p>
              <br />
              <br />
              {props.date === null ? null : (
                <p>
                  <strong>
                    <u>Completed On:</u>
                  </strong>{" "}
                  {props.date}
                </p>
              )}
            </footer>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
export default TodoTemplate;
