import {VisibilityFilters} from "../actions";
import {SET_FILTER} from "../actions";

const visibilityFilter = (filterState=VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type){
        case SET_FILTER:
            return action.filter;
        default:
            return filterState;
    }
};

export default visibilityFilter;