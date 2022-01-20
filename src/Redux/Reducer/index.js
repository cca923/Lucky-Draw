import { combineReducers } from "redux";
import listReducer from "./listReducer";
import totalSecondsReducer from "./totalSecondsReducer";

const allReducers = combineReducers({
  list: listReducer,
  totalSeconds: totalSecondsReducer,
});

export default allReducers;
