import { GET_EVENT_ERRORS } from "../actions/EVENT.actionS";


const initialState = { eventError: []};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_ERRORS:
      return {
        eventError: action.payload,
        eventError: []
      }

    default: 
      return state;
  }
}