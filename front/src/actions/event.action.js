import axios from "axios";

export const GET_EVENT = "GET_EVENT";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const ADD_EVENT = "ADD_EVENT";

export const GET_EVENT_ERRORS = "GET_EVENT_ERRORS";

export const getEvents = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/event/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_EVENT, payload: array });
        dispatch({ type: GET_ALL_EVENTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addEvent = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/event/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_EVENT_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_EVENT_ERRORS, payload: "" });
        }
      });
  };
};
