import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {deleteBook} from "../../slice/bookSlice"
const Library = () => {
  const books=useSelector(state=> state.library)
const dispatch=useDispatch()

  const deleteHandling=(id)=>{
   dispatch(deleteBook(id))
    //console.log(e.target.id)
  }
  return (
    <div className='library'>
      <h2>Library</h2>
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Rating</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          books.map(book=>{
            return(
              <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.rating}</td>
          <td>
            <button onClick={()=>deleteHandling({ id: book.id })} className='delete' id={book.id}>x</button>
          </td>
        </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  );
  
};

export default Library;
