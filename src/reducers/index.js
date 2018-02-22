import { combineReducers } from "redux";

import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";


//3. Combine the state
//the 'key' is books (named here), 'value' is whatever is returned by the reducer. BooksReducer is the object from reducer, with a key of books
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
