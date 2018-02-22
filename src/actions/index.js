export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property. Below is the actual action.
  //Actions have two values: 

  console.log('Yeah! I love ' + book.pages +' I mean what a great book');

  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}


