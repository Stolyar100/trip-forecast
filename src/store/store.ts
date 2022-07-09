import { combineReducers, configureStore } from '@reduxjs/toolkit';
import debounce from 'lodash.debounce';
import weatherReducer, { WeatherState } from './reducers/weather-slice';
import searchReducer from './reducers/search-slice';
import LsService from '../services/ls-service';
import { useRef } from 'react';

const debouncedSaveState = useRef(
  debounce((state: WeatherState) => {
    console.log('SaveState');
    LsService.saveWeatherState(state);
  }, 1000)
);

const rootReducer = combineReducers({
  weatherReducer,
  searchReducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  store.subscribe(() =>
    debouncedSaveState.current(store.getState().weatherReducer)
  );

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
