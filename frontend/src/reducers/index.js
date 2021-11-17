/*import { combineReducers } from "redux";
import allEventsReducer from "../reducers/allEvents.reducer";

export default combineReducers({
  allEventsReducer,
});
*/
import axios from "axios";

const reducer = (initialState = "", action) => {
  switch (action.type) {
    case "ISLOGED":
      return axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          initialState = res.data;
        })

        .catch((err) => console.log("No Token"));

    default:
      return initialState;
  }
};
export default reducer;
