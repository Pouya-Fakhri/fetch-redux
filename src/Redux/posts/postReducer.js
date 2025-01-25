import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./typo";

const initialState = {
  loading: false,
  post: [],
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, past: action.payload };
    case FETCH_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
