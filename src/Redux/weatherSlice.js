import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../api/apiConfig';

export const fetchPosts = createAsyncThunk('api/fetchPosts', async () => {
  const response = await instance.get('/weather');
  return response.data;
});

const weatherSlice = createSlice({
  name: 'api',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
