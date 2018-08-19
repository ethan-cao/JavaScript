import React, {Component} from "react"

export default class TODO extends Component {
    constructor(props){
        super(props);

        this.state = {
            title : "",
            isDone : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    }
    
    render(){
        return (
            <li onClick={this.handleClick}>{this.props.title}</li>
        );
    }
}

TODO.defaultProps = {
    title : "todo",
    isDone : false
}