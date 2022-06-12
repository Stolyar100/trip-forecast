import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeocodingIndexed } from '../../types';
import { clearSearchResult, fetchSearchCity } from './search-action-creators';

interface SearchState {
  citySearchResult: IGeocodingIndexed[];
  isLoading: boolean;
  error: string;
}

const initialState: SearchState = {
  citySearchResult: [],
  isLoading: false,
  error: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.citySearchResult = action.payload;
      })
      .addCase(fetchSearchCity.rejected, (state, action) => {
        state.isLoading = false;
        state.citySearchResult = [];
        typeof action.payload === 'string' && (state.error = action.payload);
      })
      .addCase(fetchSearchCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearSearchResult.fulfilled, (state) => {
        state.citySearchResult = [];
      });
  },
});

export default searchSlice.reducer;
