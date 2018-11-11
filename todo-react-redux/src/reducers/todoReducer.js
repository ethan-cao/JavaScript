import * as actions from "../actions/index";
// import {ADD, REMOVE, TOGGLE} from '../actions/index';

const todoReducer = (state=[], action) => {
    switch(action.type){
        case actions.ADD : 
            return [...state, {id : action.id, title: action.title, isDone:false}];
        case actions.REMOVE :
            return state.filter( todo => todo.id !== action.id);
        case actions.TOGGLE :
            // Change data: must return a new object, only update a property does not trigger re-rendering
            return state.map(todo => 
                todo.id === action.id ? {...todo, isDone:!todo.isDone} : todo
            );
        default :
            return state;
    }
}

export default todoReducer;