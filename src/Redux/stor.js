import { applyMiddleware, combineReducers, createStore } from "redux";

import postReducer from "./posts/postReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  postsState: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
