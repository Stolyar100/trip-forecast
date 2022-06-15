export interface IOneCallForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely?: MinutelyEntity[] | null;
  hourly?: HourlyEntity[] | null;
  daily?: DailyEntity[] | null;
  alerts?: AlertsEntity[] | null;
}

export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  weather?: WeatherEntity[] | null;
  rain?: Rain;
  snow?: Snow;
}

export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Rain {
  '1h'?: number;
}

export interface Snow {
  '1h'?: number;
}
export interface MinutelyEntity {
  dt: number;
  precipitation: number;
}
export interface HourlyEntity {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather?: WeatherEntity[] | null;
  pop: number;
  rain?: Rain;
  snow?: Snow;
}
export interface DailyEntity {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  weather?: WeatherEntity[] | null;
  clouds: number;
  pop: number;
  rain?: number;
  snow?: number;
  uvi: number;
}
export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
export interface AlertsEntity {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags?: string[] | null;
}
