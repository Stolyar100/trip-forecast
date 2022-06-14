import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import OwmService from '../../services/owm-service';

export const fetchSearchCity = createAsyncThunk(
  'search/fetchSearchCity',
  async (cityName: string, thunkAPI) => {
    const searchResult = await OwmService.searchCity(cityName).catch(
      (e: AxiosError) => thunkAPI.rejectWithValue(e.message)
    );
    return searchResult;
  }
);

export const clearSearchResult = createAsyncThunk(
  'search/clearSearchResult',
  async (payload, thunkAPI) => payload
);

export const showSearch = createAsyncThunk(
  'search/showSearch',
  async (payload: number, thunkAPI) => payload
);

export const hideSearch = createAsyncThunk(
  'search/hideSearch',
  async (payload, thunkAPI) => payload
);
