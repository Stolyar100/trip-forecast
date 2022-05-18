import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGeocodingIndexed } from '../../types';

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
});

export const { clearSearchResult } = searchSlice.actions;
export default searchSlice.reducer;
