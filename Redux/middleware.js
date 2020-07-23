import redux from "redux";
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'

const { createStore, applyMiddleware } = redux;
const { logger } = reduxLogger;
const { thunk } = reduxThunk;

const rootReducer = (state = {}, action) => {

    return state;
}


// enhancer applyMiddleware() injects functionality into dispatch by writing a function, that returns a function, that returns a function
const store = createStore(rootReducer, applyMiddleware(logger, thunk))
