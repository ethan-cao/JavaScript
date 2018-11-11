// Since strings are prone to typos and duplicates it’s better to have action types declared as constants.
// Action type
export const ADD = "add todo";
export const REMOVE = "remove todo";
export const TOGGLE = "toggle todo";
export const SET_FILTER = "set visibility filter";

export const VisibilityFilters = {
    SHOW_ALL : "SHOW_ALL",
    SHOW_COMPLETED : "SHOW_COMPLETED",
    SHOW_ACTIVE : "SHOW_ACTIVE"
}

let todoId = 0;

export const addTodo = (todo) => {
    return {
        type : ADD,
        title: todo,
        id: ++todoId
    }
};

export const remove = (id) => {
    return {
        type : REMOVE,
        id
    }
}

export const toggle = id => (
    {
        type : TOGGLE,
        id
    }
);

export const setVisibilityFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    }
}