import {ADD, REMOVE} from '../actions/index';

const todoReducer = (state=[], action) => {
    switch(action.type){
        case ADD : 
            return [...state, action.payload];
        case REMOVE :
            return state.splice(action.payload, 1);
        default :return state;
    }
}

export default todoReducer;