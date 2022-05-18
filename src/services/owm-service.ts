import axios from 'axios';
import OpwApiCore from '../api-cores/opw-api-core';
import { IGeocoding, IGeocodingIndexed, IOneCallForecast } from '../types';

class OwmService {
  private oneCallPath = '/data/2.5/onecall';
  private geocodingPath = '/geo/1.0/direct';

  async getForecast(lat: number, lon: number) {
    return OpwApiCore.get<IOneCallForecast>(this.oneCallPath, {
      params: {
        lat,
        lon,
      },
    }).then((res) => res.data);
  }

  async searchCity(cityName: string) {
    return OpwApiCore.get<IGeocoding[]>(this.geocodingPath, {
      params: {
        q: cityName,
      },
    }).then((res) => {
      const resultWithId: IGeocodingIndexed[] = res.data.map((city) => ({
        ...city,
        id: `${city.lat}${city.lon}`,
      }));
      return resultWithId;
    });
  }
}

export default new OwmService();
