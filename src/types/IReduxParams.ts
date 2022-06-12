import { IGeocodingIndexed } from '.';

export interface IAddLocation {
  dayIndex: number;
  location: IGeocodingIndexed;
}
export interface IDeleteLocation {
  cityId: IGeocodingIndexed['id'];
  dayIndex: number;
}
