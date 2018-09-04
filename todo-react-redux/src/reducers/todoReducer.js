import {ADD, REMOVE, TOGGLE} from '../actions/index';

const todoReducer = (state=[], action) => {
    switch(action.type){
        case ADD : 
            return [...state, action.payload];
        case REMOVE :
            return state.splice(action.payload, 1);
        case TOGGLE :

            return state;
        default :return state;
    }
}

export default todoReducer;