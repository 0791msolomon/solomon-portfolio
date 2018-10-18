import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = props => {
  return (
    <ol className="breadcrumb" style={{ marginBottom: "0" }}>
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>

      <li className="breadcrumb-item active">{props.breadCrumb}</li>
    </ol>
  );
};
export default BreadCrumbs;
