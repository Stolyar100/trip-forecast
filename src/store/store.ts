import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weather-slice';
import searchReducer from './reducers/search-slice';

const rootReducer = combineReducers({
  weatherReducer,
  searchReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
