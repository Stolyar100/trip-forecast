import axios from 'axios';
import { IOneCallForecast } from '../types';

class OwpService {
  baseUrl = 'https://api.openweathermap.org';
  oneCallPath = '/data/2.5/onecall';
  ApiKey = '69e708637bee8152dda4ea8f3f1d04d0';

  async getForecast (lat:number, lon:number): Promise<IOneCallForecast> {
    const res = await axios.get(`${this.baseUrl}${this.oneCallPath}`, {
      params: {
        lat,
        lon,
        appid: this.ApiKey,
      }
    });
    return res.data;
  }
}

export default new OwpService();
