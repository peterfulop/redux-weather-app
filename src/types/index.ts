export enum RoutePaths {
  HOME = '/',
  SEARCH = '/search',
  DETAILS = '/details/:cityId',
  NOT_FOUND = '/*',
}

export default interface IRoute {
  path: RoutePaths;
  component: any;
  props?: any;
}

export type CapitalCity = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
};

export type City = CapitalCity & {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  coord?: {
    lat: number;
    lon: number;
  };
};

export type Weather = {
  id: string;
  name: string;
  description: string;
  temp: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  icon: string;
  coord: { lon: number; lat: number };
};

export enum Unit {
  CELSIUS = ' °C',
}

export type APIQuery = {
  name?: string;
  coord?: {
    lat: number;
    lon: number;
  };
  geoId?: number;
  code?: string;
};

export enum APIEventType {
  COORD = 'COORD',
  NAME = 'NAME',
  GEO_ID = 'GEO_ID',
  NAME_AND_COUNTRY_CODE = 'NAME_AND_COUNTRY_CODE',
}

export type QueryByName = {
  name: string;
};

export type QueryByCoord = {
  coord: {
    lat: number;
    lon: number;
  };
};

export type QueryByGeoId = {
  geoId: number;
};

export type QueryByNameAndCountryCode = {
  name: string;
  countryCode: string;
};

interface IQueryByName {
  type: APIEventType.NAME;
  query: QueryByName;
}
interface IQueryByCoord {
  type: typeof APIEventType.COORD;
  query: QueryByCoord;
}
interface IQueryByGeoId {
  type: typeof APIEventType.GEO_ID;
  query: QueryByGeoId;
}
interface IQueryByNameAndCountryCode {
  type: typeof APIEventType.NAME_AND_COUNTRY_CODE;
  query: QueryByNameAndCountryCode;
}

export type APIQueryType =
  | IQueryByName
  | IQueryByCoord
  | IQueryByGeoId
  | IQueryByNameAndCountryCode;
