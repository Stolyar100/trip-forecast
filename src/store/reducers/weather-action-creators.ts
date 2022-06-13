import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import OwmService from '../../services/owm-service';
import {
  IAddLocation,
  IGeocoding,
  IGeocodingIndexed,
  ITripDay,
} from '../../types';
import { IDeleteLocation } from '../../types/IReduxParams';
import { WeatherState } from './weather-slice';

export const addDay = createAsyncThunk(
  'weather/addDay',
  async (payload) => payload
);

export const deleteDay = createAsyncThunk(
  'weather/deleteDay',
  async (dayIndex: number) => dayIndex
);

export const addLocation = createAsyncThunk(
  'weather/addLocation',
  async ({ dayIndex, location }: IAddLocation, thunkAPI) => {
    const { lat, lon } = location;
    return OwmService.getForecast(lat, lon)
      .then((locationWeather) => {
        const locationWithWeather: IAddLocation['location'] = {
          ...location,
          weather: locationWeather,
        };
        const addLocationParams: IAddLocation = {
          dayIndex,
          location: locationWithWeather,
        };
        return addLocationParams;
      })
      .catch((e: AxiosError) => thunkAPI.rejectWithValue(e.message));
  }
);

export const deleteLocation = createAsyncThunk(
  'weather/deleteLocation',
  async (params: IDeleteLocation) => params
);

export const deleteCity = createAsyncThunk(
  'weather/deleteCity',
  async (cityId: IGeocodingIndexed['id'], { getState }) => {
    const { weatherReducer } = getState() as { weatherReducer: WeatherState };
    const tripDayUsingCity = weatherReducer.tripDays.find((tripDay) =>
      tripDay.cityIds.includes(cityId)
    );
    if (!tripDayUsingCity) {
      return cityId;
    }
  }
);

export const updateCityWeather = createAsyncThunk(
  'weather/updateCityWeather',
  async (cityToUpdate: IGeocodingIndexed, thunkAPI) => {
    const { lat, lon } = cityToUpdate;
    return OwmService.getForecast(lat, lon)
      .then((cityWeather) => {
        const updatedCity: IGeocodingIndexed = {
          ...cityToUpdate,
          weather: cityWeather,
        };
        return updatedCity;
      })
      .catch((e: AxiosError) => thunkAPI.rejectWithValue(e.message));
  }
);
