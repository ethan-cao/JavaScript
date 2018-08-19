import React, {Component} from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
    componentDidMount(){
    }
    
    render() {
        return (
            <div id="todoList">
                <ul>
                    {/* {this.props.todos.map( 
                        todo => <Todo title={todo.title}/>
                    )} */}
                </ul>    
            </div>
        );
    }
}