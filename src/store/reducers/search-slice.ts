import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeocodingIndexed } from '../../types';
import {
  clearSearchResult,
  fetchSearchCity,
  hideSearch,
  showSearch,
} from './search-action-creators';

interface SearchState {
  showSearch: boolean;
  destinationDay: number;
  citySearchResult: IGeocodingIndexed[];
  isLoading: boolean;
  error: string;
}

const initialState: SearchState = {
  showSearch: true,
  destinationDay: 0,
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
      })
      .addCase(showSearch.fulfilled, (state) => {
        state.showSearch = true;
      })
      .addCase(hideSearch.fulfilled, (state) => {
        state.showSearch = false;
        state.citySearchResult = [];
        state.error = '';
      });
  },
});

export default searchSlice.reducer;
