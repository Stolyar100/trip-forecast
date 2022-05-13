import OpwApiCore from '../api-cores/opw-api-core';
import { IGeocoding, IOneCallForecast } from '../types';

class OwpService {
  private oneCallPath = '/data/2.5/onecall';
  private geocodingPath = '/geo/1.0/direct';

  async getForecast(lat: number, lon: number): Promise<IOneCallForecast> {
    const res = await OpwApiCore.get<IOneCallForecast>(this.oneCallPath, {
      params: {
        lat,
        lon,
      }
    });
    return res.data;
  }

  async searchCity(cityName: string) {
    const res = await OpwApiCore.get<IGeocoding[]>(this.geocodingPath, {
      params: {
        q: cityName,
      }
    })
    return res.data
  }
}

export default new OwpService();
