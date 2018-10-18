import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Router from "./Components/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers/Index.js";

class App extends Component {
  state = {
    response: ""
  };

  render() {
    const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
    return (
      <React.Fragment>
        <Provider store={createStoreWithMiddleware(rootReducer)}>
          <BrowserRouter>
            <div className="bodyDiv">
              <Header />

              <div className="container routerContent">
                <Router />
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
