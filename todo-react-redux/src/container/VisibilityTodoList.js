import {connect} from 'react-redux';
import * as actions from "../actions";
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case actions.VisibilityFilters.SHOW_ALL:
            return todos;
        case actions.VisibilityFilters.SHOW_COMPLETED :
            return todos.filter( todo => todo.isDone);
        case actions.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter( todo => !todo.isDone);
        default:
            throw new Error("Unknown filter : " + filter);
    }
}

//this component will subscribe to Redux store updates. 
//when the store is updated,  mapStateToProps will be called.
// mapStateToProps returns a plain object, which will be merged into the component’s props.
// state is the global state (state = store.getState())
// state.todo, key "todo" is set by reducers/index.js
const mapStateToProps = state => (
    { todos: getVisibleTodos(state.todo, state.visibilityfilter) }
);

// https://gist.github.com/markerikson/6c7608eee5d2421966d3df5edbb8f05c
const mapDispatchToProps = dispatch => (
    // bindActionCreator return function, which makes the action creator be able to be invoked directly
    bindActionCreators({toggle: actions.toggle, remove: actions.remove}, dispatch)
    // alternatively, check Header mapDispatchToProps
);

// https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// use connect() so this.props has access to action toggle
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);