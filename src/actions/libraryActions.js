import { createAction } from '@reduxjs/toolkit';

export const addBook = createAction('library/addBook');
export const deleteBook = createAction('library/deleteBook');