import { configureStore } from "@reduxjs/toolkit";
import postReducer from './posts/postSlise';

const store = configureStore({
  reducer:{
    post: postReducer
  }
})

export default store