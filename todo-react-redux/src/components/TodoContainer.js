import React from "react";
import Todo from "./Todo";
import {connect} from "react-redux";
import {toggle, remove} from "../actions/index";
import {bindActionCreators} from "redux";

/**
 * The container component is responsible for
 *  1. Prepare data to be displayed
 *  2. handle event
 */
class TodoContainer extends React.Component {
    render() {
        // extract toggle value from this.props, results in  toogle = this.props.toggle, remove = this.props.remove
        const {toggle, remove} = this.props;  

        return (
            <div id="todoList">
                <ul>
                    {this.props.todos.map( 
                        todo => <Todo key={todo.id} title={todo.title} toggle={()=>toggle(todo.id)} remove={()=>{remove(todo.id)}} isDone={todo.isDone}/>
                    , this)}
                </ul>    
            </div>
        );
    }
}

TodoContainer.defaultProps = {
    todos : []
}

//this component will subscribe to Redux store updates. 
//when the store is updated (state has updated value) mapStateToProps will be called.
// mapStateToProps returns a plain object, which will be merged into the component’s props.
// state.todo, key "todo" is set by reducers/index.js
const mapStateToProps = state => (
    { todos: state.todo }
)

// use connect() so this.props has access to action toggle
// alternatively, check Header mapDispatchToProps
// https://gist.github.com/markerikson/6c7608eee5d2421966d3df5edbb8f05c
const mapDispatchToProps = (dispatch, ownProps) => (
    // bindActionCreator make the action creator be able to be invoked directly
    bindActionCreators({toggle, remove}, dispatch)
);

// https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);