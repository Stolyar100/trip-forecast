import { WeatherState } from '../store/reducers/weather-slice';

class LsService {
  loadWeatherState() {
    try {
      const serializedWeatherState = localStorage.getItem('WeatherState');
      if (!serializedWeatherState) {
        return;
      }
      return JSON.parse(serializedWeatherState) as WeatherState;
    } catch (e) {
      return;
    }
  }

  saveWeatherState(weatherState: WeatherState) {
    try {
      const serializedWeatherState = JSON.stringify(weatherState);
      localStorage.setItem('WeatherState', serializedWeatherState);
    } catch (e) {}
  }
}

export default new LsService();
