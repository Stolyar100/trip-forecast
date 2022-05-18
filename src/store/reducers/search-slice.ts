import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeocodingIndexed } from '../../types';
import { fetchSearchCity } from './search-action-creators';

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
  reducers: {
    clearSearchResult(state) {
      state.citySearchResult = [];
    },
  },
  extraReducers: {
    [fetchSearchCity.fulfilled.type]: (
      state,
      action: PayloadAction<IGeocodingIndexed[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.citySearchResult = action.payload;
    },
    [fetchSearchCity.pending.type]: (
      state,
      action: PayloadAction<IGeocodingIndexed[]>
    ) => {
      state.isLoading = true;
    },
    [fetchSearchCity.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.citySearchResult = [];
    },
  },
});

export const { clearSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
