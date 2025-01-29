import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
  "data/fetchData",
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const postSlise = createSlice({
  name: "data",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchPost.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload || action.error.message;
        });
},
});

export default postSlise.reducer;
