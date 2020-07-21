// https://youtu.be/sNyXE35liAE
// https://codepen.io/ethan-cao/pen/mdVmJeR


const { createStore } = Redux;

const initialState = {
    todos: ["todo1"]
};

const reducer = (state = initialState, action) => {
    if (action.type === "ADD") {
        return {
            todos: [...state.todos, action.payload]
        }
    }

    return { ...initialState };
};



const store = createStore(reducer);

// callback will be called when an action has been dispatched
// just to notify an action was dispatched
store.subscribe(() => {
    console.log("state updated");
    console.log(store.getState());
});

const todoAction = { type: "ADDED", payload: "new todo" };

store.dispatch(todoAction); 
// there is not a corresponding store.unsubscribe() method. Instead, store.subscribe() returns a function that you can call to cancel the subscription.