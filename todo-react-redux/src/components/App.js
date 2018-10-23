import React, { Component } from "react";
import Header from "./Header";
import VisibleTodoList from "../container/VisibilityTodoList";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}