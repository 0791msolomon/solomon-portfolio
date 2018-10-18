import { TODOS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case TODOS:
      return action.payload;

    default:
      return state;
  }
}
