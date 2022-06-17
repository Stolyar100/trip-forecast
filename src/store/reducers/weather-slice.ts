import { createSlice } from '@reduxjs/toolkit';
import { IGeocodingIndexed, ITripDay } from '../../types';
import * as Actions from './weather-action-creators';

export interface WeatherState {
  cities: { [id: IGeocodingIndexed['id']]: IGeocodingIndexed };
  tripDays: ITripDay[];
  isLoading: boolean;
  error: string;
}

const initialState: WeatherState = {
  cities: {},
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
        const { dayIndex, location } = action.payload;
        state.isLoading = false;
        state.error = '';
        state.tripDays[dayIndex].cityIds.push(action.payload.location.id);
        state.cities[location.id] = location;
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
        state.cities[action.payload.id] = action.payload;
      })
      .addCase(Actions.updateCityWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(Actions.deleteLocation.fulfilled, (state, action) => {
        state.tripDays[action.payload.dayIndex].cityIds = state.tripDays[
          action.payload.dayIndex
        ].cityIds.filter((cityId) => cityId !== action.payload.cityId);
      })
      .addCase(Actions.addDay.fulfilled, (state) => {
        state.tripDays.push({ cityIds: [] });
      })
      .addCase(Actions.deleteDay.fulfilled, (state, action) => {
        state.tripDays.splice(action.payload, 1);
      })
      .addCase(Actions.deleteCity.fulfilled, (state, action) => {
        typeof action.payload === 'string' &&
          delete state.cities[action.payload];
      });
  },
});

export default weatherSlice.reducer;
