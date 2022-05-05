import { combineReducers } from "redux";
import userReducer from "./user";
import homeReducer from "./home";
const rootReducer = combineReducers({
  userReducer,
  homeReducer,
});
export default rootReducer;
