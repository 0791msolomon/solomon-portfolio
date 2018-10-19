import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1 className="portfolio">Matthew Solomon Portfolio</h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Examples
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  data-toggle="tooltip"
                  data-placement="top"
                  title="utilizes API to retrieve weather for given location"
                  className="nav-link"
                  to="/weather"
                >
                  Weather App
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-toggle="tooltip"
                  data-placement="top"
                  className="nav-link"
                  to="/votingApp"
                  title="voting example which uses redux for state management"
                >
                  Voting App
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/todo"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Todo list showcasing CRUD operations"
                >
                  Todo List
                </Link>
              </li>
            </ul>
            <li className="form-inline my-2 my-lg-0, nav-item">
              <a className="nav-link" href="/">
                Resume
              </a>
            </li>
          </div>
        </nav>
        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          <strong>Hover</strong> over nav bar links for brief description.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
