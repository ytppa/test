import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLastnews } from './lastnewsAPI';

const initialState = {
  items: [0,1,2,3,4],
  status: 'idle',
};

export const updateAsync = createAsyncThunk(
  'lastnews/fetchLastnews',
  async () => {
    const response = await fetchLastnews();
    console.log(`updating`, response);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const lastNewsSlice = createSlice({
  name: 'lastnews',
  initialState,
  reducers: {
    update: (state) => {
      state.items.pop();
    },
  },
  
  /* Отлавливание статусов асинхронного апдейта */
  extraReducers: (builder) => {
    builder
      .addCase(updateAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(updateAsync.rejected, (state) => {
        state.status = 'error';
      });
  }, 
});

export const selectItems = (state) => state.lastnews.items;
export const selectStatus = (state) => state.lastnews.status;


export default lastNewsSlice.reducer;