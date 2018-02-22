//1. Import Statements
//a. Libraries
import React from "react";
import { Component } from "react";
//b. Containers
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

//2. Component Dev

//3. Export App (including containers)
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
