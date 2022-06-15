import { ILanguages } from './IGeocoding';
import { IUnits } from './IUnits';

export interface IGetForecastConfig {
  units: IUnits;
  lang: ILanguages;
}
