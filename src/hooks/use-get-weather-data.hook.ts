import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAPIKey } from '../helpers/api-key';
import { actionCreators } from '../state';
import { Weather } from '../types';

type FetchDataInput = {
  url: string;
  cityId: string;
};

export const useGetWeatherData = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { deleteCity } = bindActionCreators(actionCreators, dispatch);

  const fetchData = async (input: FetchDataInput) => {
    const { url, cityId } = input;
    axios({
      method: 'GET',
      url,
    })
      .then((response) => {
        const { coord, name, timezone, sys, main, weather } = response.data;
        const { description, icon } = weather[0];
        const { id, sunrise, sunset } = sys;
        const { lon, lat } = coord;
        const { temp } = main;

        const weatherObject: Weather = {
          id,
          name,
          description,
          temp,
          sunrise,
          sunset,
          timezone,
          icon,
          coord: { lon, lat },
        };

        setWeather(weatherObject);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setAPIKey();
          return setError('Unautorized! Refresh & add the API key!');
        }
        if (err.response.status === 404 || err.response.status === 400) {
          deleteCity(cityId);
          setError(
            'Impossible to fetch weather data! Stored city removed automatically!'
          );
        } else {
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { weather, error, loading, fetchData, setError };
};
