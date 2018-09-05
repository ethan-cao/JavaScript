import {ADD, REMOVE, TOGGLE} from '../actions/index';

const todoReducer = (state=[], action) => {
    switch(action.type){
        case ADD : 
            return [...state, {id : action.id, title: action.title, isDone:false}];
        case REMOVE :
            return state.splice(action.payload, 1);
        case TOGGLE :
            const tobeUpdated = state.find(todo => todo.id === action.id);
            if (tobeUpdated){
                tobeUpdated.isDone = !tobeUpdated.isDone;
            }
            return state;
        default :return state;
    }
}

export default todoReducer;