import React from "react";
import Todo from "./Todo";

/**
 * The container component is responsible for
 *  1. Prepare data to be displayed
 *  2. handle event
 */
export default class TodoContainer extends React.Component {
    render() {
        // extract toggle value from this.props, results in  toogle = this.props.toggle, remove = this.props.remove
        const {toggle, remove} = this.props;  

        return (
            <div id="todoList">
                <ul>
                    {this.props.todos.map( 
                        todo => <Todo key={todo.id} 
                                      title={todo.title} 
                                      toggle={()=>toggle(todo.id)} 
                                      remove={()=>{remove(todo.id)}} 
                                      isDone={todo.isDone}
                                />
                    , this)}
                </ul>    
            </div>
        );
    }
}

TodoContainer.defaultProps = {
    todos : []
}