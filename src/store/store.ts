import { combineReducers, configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weather-slice';

const rootReducer = combineReducers({
  weatherReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
