import {createSlice} from "@reduxjs/toolkit"
import booksReducer from "../reducers/reducers"
export function uniId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
export const bookState = [
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
    },
    {
      id:uniId(),
      title:"moataz",
      author:"mohmed",
      rating:10
    }
]
  


  const BookSlice = createSlice({
    name: "library",
    initialState: bookState,
    reducers: {
      addBook: (state, action) => {
        state.push(action.payload)
      },
      deleteBook: (state, action) => {
        console.log(action)
        
       return state.filter((book) =>book.id !== action.payload.id);
      },
    },
  });
  

console.log(booksReducer)
export const { addBook, deleteBook } = BookSlice.actions;
export const LibraryReducer = BookSlice.reducer;
  

