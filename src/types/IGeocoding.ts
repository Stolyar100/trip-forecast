import { IOneCallForecast } from '.';

export interface IGeocodingIndexed extends IGeocoding {
  id: string;
  weather?: IOneCallForecast;
}

export interface IGeocoding {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string | null;
}

export interface LocalNames {
  af?: string | null;
  ar?: string | null;
  ascii: string;
  az?: string | null;
  bg?: string | null;
  ca?: string | null;
  da?: string | null;
  de?: string | null;
  el?: string | null;
  en: string;
  eu?: string | null;
  fa?: string | null;
  feature_name: string;
  fi?: string | null;
  fr?: string | null;
  gl?: string | null;
  he?: string | null;
  hi?: string | null;
  hr?: string | null;
  hu?: string | null;
  id?: string | null;
  it?: string | null;
  ja?: string | null;
  la?: string | null;
  lt?: string | null;
  mk?: string | null;
  nl?: string | null;
  no?: string | null;
  pl?: string | null;
  pt?: string | null;
  ro?: string | null;
  ru?: string | null;
  sk?: string | null;
  sl?: string | null;
  sr?: string | null;
  th?: string | null;
  tr?: string | null;
  uk?: string | null;
  vi?: string | null;
  zu?: string | null;
}

export type ILanguages = keyof LocalNames;
