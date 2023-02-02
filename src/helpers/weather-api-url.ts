import {
  APIEventType,
  APIQueryType,
  QueryByCoord,
  QueryByGeoId,
  QueryByName,
  QueryByNameAndCountryCode,
} from '../types';
import { getAPIKey } from './api-key';

export const APIUrl = <Type extends keyof typeof APIEventType>(
  ...args: Extract<APIQueryType, { type: Type }> extends { query: infer TQuery }
    ? [type: Type, query: TQuery]
    : []
) => {
  const API_KEY = getAPIKey();

  let query = '';
  const event = args[0];
  switch (event) {
    case APIEventType.NAME:
      const { name: _name } = args[1] as QueryByName;
      query = `q=${_name.split('(')[0].trim()}`;
      break;
    case APIEventType.COORD:
      const {
        coord: { lat, lon },
      } = args[1] as QueryByCoord;
      query = `lat=${lat}&lon=${lon}`;
      break;
    case APIEventType.GEO_ID:
      const { geoId } = args[1] as QueryByGeoId;
      query = `id=${geoId}`;
      break;
    case APIEventType.NAME_AND_COUNTRY_CODE:
      const { name, countryCode } = args[1] as QueryByNameAndCountryCode;
      query = `q=${name.split('(')[0].trim()},,${countryCode}`;
      break;
  }
  return `https://api.openweathermap.org/data/2.5/weather?${query}&appid=${API_KEY}`;
};
