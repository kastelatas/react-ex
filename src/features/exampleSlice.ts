import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ExampleState {
  data: string;
  loading: boolean;
  error: string | null;
}

const initialState: ExampleState = {
  data: '',
  loading: false,
  error: null,
};

export const fetchDataAsync = createAsyncThunk('example/fetchData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return response.data.title;
});

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

export default exampleSlice.reducer;
