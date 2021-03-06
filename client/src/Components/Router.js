import React from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";
import Voting from "./Voting";
import Todo from "./TodoList";
import AboutMe from "./AboutMe";

const Router = props => {
  return (
    <div>
      <Route exact path="/" component={AboutMe} />
      <Route path="/weather" component={Weather} />
      <Route path="/votingApp" component={Voting} />
      <Route path="/todo" component={Todo} />
    </div>
  );
};
export default Router;
