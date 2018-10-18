import { ACTIVE_VOTE } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case ACTIVE_VOTE:
      return action.payload;

    default:
      return state;
  }
}
