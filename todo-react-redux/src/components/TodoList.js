import React, {Component} from "react";
import Todo from "./Todo";
import {connect} from "react-redux";

class TodoList extends Component {
    componentDidMount(){
    }
    
    render() {
        return (
            <div id="todoList">
                <ul>
                    {this.props.todos.map( 
                        (todo, index) => <Todo key={index} title={todo}/>
                    )}
                </ul>    
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todo
    }
}

export default connect(mapStateToProps)(TodoList);