import {combineReducers} from "redux";
import todoReducer from "./todoReducer";
import visibilityfilter  from "./visibilityFilter";

// each reducer manages independetn parts of the state 
// state key name is set here
export default combineReducers({
    todo : todoReducer, 
    visibilityfilter
});