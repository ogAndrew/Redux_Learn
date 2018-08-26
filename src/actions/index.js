export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action, 
    // an object with a type property. 
   return {
       type: 'BOOK_SELECTED', //action always contains a type
       payload: book
   };
} //this is an action creator function 