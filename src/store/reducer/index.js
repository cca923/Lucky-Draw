import { combineReducers } from "redux";
import listReducer from "./listReducer";
import actInfoReducer from "./actInfoReducer";

const allReducers = combineReducers({
  list: listReducer,
  actInfo: actInfoReducer,
});

export default allReducers;
