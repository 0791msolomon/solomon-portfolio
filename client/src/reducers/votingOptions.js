import { VOTING_OPTIONS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case VOTING_OPTIONS:
      return action.payload;

    default:
      return state;
  }
}
