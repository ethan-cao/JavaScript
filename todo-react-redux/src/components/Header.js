import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {newTodo:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value});
    }

    handleAddTodo(event){
        event.preventDefault();

        if (this.state.newTodo === ""){
            return;
        }

        this.props.addTodo(this.state.newTodo);

        this.setState({newTodo: ""});
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

// use connect() so this.props has access to action
export default connect(null, actions)(Header);

// just call connect(), this.props.dispatch is accessible,   this.props.dispatch === store.dispatch // true
// export default connect()(Header);