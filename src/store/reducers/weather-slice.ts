import { createSlice } from '@reduxjs/toolkit';
import { IGeocodingIndexed, ITripDay } from '../../types';
import * as Actions from './weather-action-creators';

export interface WeatherState {
  cities: IGeocodingIndexed[];
  tripDays: ITripDay[];
  isLoading: boolean;
  error: string;
}

const initialState: WeatherState = {
  cities: [],
  tripDays: [],
  isLoading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Actions.addLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Actions.addLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.tripDays[action.payload.dayIndex].cityIds.push(
          action.payload.location.id
        );
      })
      .addCase(Actions.addLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(Actions.updateCityWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Actions.updateCityWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.cities
          .filter((city) => city.id !== action.payload.id)
          .push(action.payload);
      })
      .addCase(Actions.updateCityWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(Actions.deleteLocation.fulfilled, (state, action) => {
        state.tripDays[action.payload.dayIndex].cityIds.filter(
          (cityId) => cityId !== action.payload.cityId
        );
      })
      .addCase(Actions.addDay.fulfilled, (state) => {
        state.tripDays.push({ cityIds: [] });
      })
      .addCase(Actions.deleteDay.fulfilled, (state, action) => {
        state.tripDays.splice(action.payload, 1);
      })
      .addCase(Actions.deleteCity.fulfilled, (state, action) => {
        typeof action.payload === 'string' &&
          state.cities.filter((city) => city.id !== action.payload);
      });
  },
});

export default weatherSlice.reducer;
