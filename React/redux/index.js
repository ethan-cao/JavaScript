// https://youtu.be/sNyXE35liAE
// https://codepen.io/ethan-cao/pen/mdVmJeR

const {createStore} = Redux;

const initialState = {
    todos: ["todo1"]
};

const reducer = (state = initialState, action) => {
   if (action.type === "ADD") {
        return {
            todos: [...state.todos, action.payload]
        }
    } 

    return {...initialState};
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log("state updated");
    console.log(store.getState());
});

const todoAction = {type: "ADD", payload: "new todo"};

store.dispatch(todoAction); 
