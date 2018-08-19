import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {newTodo:"newTodo"};

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value})        
    }

    handleAddTodo(event){
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
    }

    render() {
        return (
            <div id="header">
                <form onSubmit = {this.handleAddTodo} >
                    <input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </div>    
        );
    }
}

export default connect(null,actions)(Header);