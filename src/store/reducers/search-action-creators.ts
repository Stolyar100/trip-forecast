import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import OwmService from '../../services/owm-service';

export const fetchSearchCity = createAsyncThunk(
  'search/fetchSearchCity',
  async (cityName: string, thunkAPI) => {
    const searchResult = await OwmService.searchCity(cityName).catch(
      (e: AxiosError) => thunkAPI.rejectWithValue(e.message)
    );
    console.log(searchResult);
    return searchResult;
  }
);
