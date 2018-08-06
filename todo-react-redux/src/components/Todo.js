import React, {Component} from "react"

export default class TODO extends Component {
    constructor(props){
        super(props);

        this.state = {
            title : "",
            isDone : false
        }
    }

    render(){
        return (
            <div>{this.props.title}</div>
        );
    }
}

TODO.defaultProps = {
    title : "todo",
    isDone : false
}