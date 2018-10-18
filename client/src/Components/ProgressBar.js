import React from "react";

const ProgressBar = props => {
  return (
    <div className="progress col-sm-9">
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated ${
          props.color
        }`}
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={props.style}
      />
    </div>
  );
};
export default ProgressBar;
