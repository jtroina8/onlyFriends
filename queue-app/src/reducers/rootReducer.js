import { combineReducers } from "redux";
import gameContent from "./gameDataReducer";
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ gameContent });

export default rootReducer;
