import React, {Component} from "react"

/**
 * The presentational component is only responsible for displaying data
 */
export default class TODO extends Component {
    render(){
        return (
            <li 
                onClick={this.props.toggle} 
                style={ {textDecoration: this.props.isDone? 'line-through' : 'none' }}
            >
                {this.props.title}
                <button 
                    onClick={this.props.remove}
                >
                    Remove
                </button>
            </li>
        );
    }
}

TODO.defaultProps = {
    title : "todo",
    isDone : false
}