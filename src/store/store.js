import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import {LibraryReducer} from "../slice/bookSlice"
const middleware = [
  ...getDefaultMiddleware(),

  ];





  const store = configureStore({
    reducer: {
      library: LibraryReducer,
    },
    middleware,
  });

  export default store