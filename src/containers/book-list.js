//1. Import 
import React, { Component } from "react";
import { connect } from "react-redux";

import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

//2. Component Dev
class BookList extends Component {

  //just JS(X), like in the calculator code
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//Below: where state is being set, eventually to the store
//if state in store changes, BookList will automatically re-render
//3. Mapping functions
function mapStateToProps(state) {
  // Whatever is returned will show up as props in BookLists
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
//There are two separate calls here, in two sets of parentheses. 


//takes a function and a component and creates a container (smart component/component always aware of state)
// 4. Export as Container 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


/*
Then we have to say which component in our application we are providing this data to : you can see that we write connect(mapStateToProps)(App)to specify that we are connecting this state to the App component.Finally this entire connect()method returns a new component,
it looks like the App component we wrote,
but now it also receives the correct data.This is the component we wish to export.So at the bottom of the file,
you see :
*/