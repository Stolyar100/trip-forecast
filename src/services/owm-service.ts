import { IOneCallForecast } from '../types';
import OpwApiCore from '../api-cores/opw-api-core';

class OwpService {
  private oneCallPath = '/data/2.5/onecall';

  async getForecast(lat: number, lon: number): Promise<IOneCallForecast> {
    const res = await OpwApiCore.get<IOneCallForecast>(this.oneCallPath, {
      params: {
        lat,
        lon,
      }
    });
    return res.data;
  }
}

export default new OwpService();
