import { TEST } from "../actions";

export default function(state = "matt", action) {
  switch (action.type) {
    case TEST:
      return action.payload;

    default:
      return state;
  }
}
