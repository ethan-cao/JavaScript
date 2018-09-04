import React, {Component} from "react"

/**
 * The presentational component is only responsible for displaying data
 */
export default class TODO extends Component {
    render(){
        return (
            <li onClick={this.props.onClick}>{this.props.title}</li>
        );
    }
}

TODO.defaultProps = {
    title : "todo",
    isDone : false
}