/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPosts, getPostsBySearch } from '@/services/getPosts';

type PostsState = {
  posts: any[];
  loading: boolean;
  hasError: boolean;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
  hasError: false,
};

export const initPosts = createAsyncThunk(
  'posts/initFetch',
  () => getAllPosts(),
);

export const searchPosts = createAsyncThunk(
  'posts/searchFetch',
  (value: string) => getPostsBySearch(value),
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clear: (state) => {
      state.posts = [];
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initPosts.pending, (state) => {
      state.hasError = false;
      state.loading = true;
    });

    builder.addCase(initPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });

    builder.addCase(initPosts.rejected, (state) => {
      state.hasError = true;
      state.loading = false;
    });

    builder.addCase(searchPosts.pending, (state) => {
      state.hasError = false;
      state.loading = true;
    });

    builder.addCase(searchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });

    builder.addCase(searchPosts.rejected, (state) => {
      state.hasError = true;
      state.loading = false;
    });
  },
});

export default postsSlice.reducer;
export const { clear } = postsSlice.actions;
