import React, {Component}  from "react";

export default class Header extends Component{
    constructor(props){
        super(props);

        this.handleAddItem = this.handleAddTodo.bind(this);
    }

    handleAddTodo(){
        console.log("handleAdd");
    }

    render() {
        return (
            <div id="header">
                <form onSubmit = {this.handleAddTodo} >
                    <input>
                    </input>
                    <button type="submit">
                        Add todo
                    </button>
                </form>
            </div>    
        );
    }
}