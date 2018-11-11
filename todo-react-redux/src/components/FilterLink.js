import React from "react";

export default class FilterLink extends React.Component{
    render(){
        return (
            <button onClick={this.props.onClick} 
                    disabled={this.props.active}>
                {this.props.children} 
            </button>
        );
    }
}