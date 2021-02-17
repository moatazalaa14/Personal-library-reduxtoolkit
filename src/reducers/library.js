import { createReducer } from '@reduxjs/toolkit';
//import {bookState} from "../store/store"
import { addBook, deleteBook } from '../actions/libraryActions';
import {uniId} from "../slice/bookSlice"

const initialState = [{
  id:uniId(),
  title:"moataz",
  author:"mohmed",
  rating:10
},
{
  id:uniId(),
  title:"moataz",
  author:"mohmed",
  rating:10
},
{
  id:uniId(),
  title:"moataz",
  author:"mohmed",
  rating:10
}] 

/*const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      return state.library.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      console.log(state)
      return state.library.filter((book) => book.id !== action.payload.id);
    });
});
*/
export default booksReducer;