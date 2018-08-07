import {ADD, REMOVE} from '../actions/types';

const todoReducer = (state=[], action) => {
    switch(action.type){
        case ADD : 
            return state;
        case REMOVE :
            return state;
        default :return state;
    }
}

export default todoReducer;