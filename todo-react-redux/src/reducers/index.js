import {combineReducers} from "redux";
import todoReducer from "./todoReducer";

// each reducer manages independetn parts of the state 
// state key name is set here
export default combineReducers({
    todo : todoReducer, 
});