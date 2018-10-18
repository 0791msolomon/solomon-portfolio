import { combineReducers } from "redux";
import Test from "./Test";
import ActiveVote from "./voting";
import selectOptions from "./votingOptions";
import todoList from "./todoList";

const rootReducer = combineReducers({
  Test,
  ActiveVote,
  selectOptions,
  todoList
});
export default rootReducer;
