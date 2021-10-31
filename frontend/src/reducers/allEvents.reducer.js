import { GET_ALL_EVENTS } from "../actions/event.action";

const initialState = {};

export default function allEventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return action.payload;

    default:
      return state;
  }
}
