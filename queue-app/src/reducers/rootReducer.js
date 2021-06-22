import { combineReducers } from "redux";
import gameContent from "./gameDataReducer";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({ gameContent, signUpReducer });

export default rootReducer;
