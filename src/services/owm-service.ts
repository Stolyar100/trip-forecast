import { AxiosError } from 'axios';
import OpwApiCore from '../api-cores/opw-api-core';
import {
  IGeocoding,
  IGeocodingIndexed,
  IGetForecastConfig,
  IOneCallForecast,
} from '../types';

class OwmService {
  private oneCallPath = '/data/2.5/onecall';
  private geocodingPath = '/geo/1.0/direct';
  private iconPath = 'http://openweathermap.org/img/wn/';

  async getForecast(
    lat: number,
    lon: number,
    config: IGetForecastConfig = { units: 'metric', lang: 'uk' }
  ) {
    return OpwApiCore.get<IOneCallForecast>(this.oneCallPath, {
      params: {
        lat,
        lon,
        ...config,
      },
    }).then((res) => res.data);
  }

  async searchCity(cityName: string, resultsLimit = 5) {
    return OpwApiCore.get<IGeocoding[]>(this.geocodingPath, {
      params: {
        q: cityName,
        limit: resultsLimit,
      },
    })
      .then((res) => {
        const resultWithId: IGeocodingIndexed[] = res.data.map((city) => ({
          ...city,
          id: `${city.lat}${city.lon}`,
        }));
        return resultWithId;
      })
      .catch((e: AxiosError) => {
        throw e;
      });
  }

  getIconUrl(icon: string) {
    return `${this.iconPath}/${icon}@2x.png`;
  }
}

export default new OwmService();
