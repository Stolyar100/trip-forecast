import { createSlice } from '@reduxjs/toolkit';
import { IGeocodingIndexed } from '../../types';

interface WeatherState {
  cities: IGeocodingIndexed[];
  schedule: Array<string[]>;
}

const initialState: WeatherState = {
  cities: [],
  schedule: [],
};

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

  }
})

export default WeatherSlice.reducer;