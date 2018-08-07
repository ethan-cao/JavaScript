import React, { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TodoList/>
      </div>
    );
  }
}