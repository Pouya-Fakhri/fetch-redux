import axios from "axios";
import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./typo";

export const fetchPost = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POST_REQUEST });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);

      dispatch({ type: FETCH_POST_FAILURE, payload: error.massege });
    }
  };
};
