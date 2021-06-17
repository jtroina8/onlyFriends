import { combineReducers } from "redux";
import gameContent from "./gameDataReducer";
import signUpReducer from "./signUpReducer";
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ gameContent, signUpReducer });

export default rootReducer;
