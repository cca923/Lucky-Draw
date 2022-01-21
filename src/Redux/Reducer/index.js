import { combineReducers } from "redux";
import listReducer from "./listReducer";
import totalSecondsReducer from "./totalSecondsReducer";
import timerStatusReducer from "./timerStatusReducer";

const allReducers = combineReducers({
  list: listReducer,
  totalSeconds: totalSecondsReducer,
  timerStatus: timerStatusReducer,
});

export default allReducers;
