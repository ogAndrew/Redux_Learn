// State argument is not application state, only the state 
// this reducer is responsible for
// if the state comes in undefined es6 knows to set it null so the app won't crash
export default function(state =null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }

    return state
}