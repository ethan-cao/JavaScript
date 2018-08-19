// Since strings are prone to typos and duplicates it’s better to have action types declared as constants.
export const ADD = "add todo";
export const REMOVE = "remove todo"


export const addTodo = (todo) => {
    return {
        type : ADD,
        payload :  todo
    }
};

export const removeTodo = (todoIndex) => {
    return {
        type : REMOVE,
        payload : todoIndex    
    }
}