import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Clock } from '../components/clock/clock';
import { CurrentWeather } from '../components/current-weather/current-weather';
import { NavigateBack } from '../components/navigate-back/navigate-back';
import { PageLayout } from '../components/page-layout/page-layout';
import { APIUrl } from '../helpers/weather-api-url';
import { useGetWeatherData } from '../hooks/use-get-weather-data.hook';
import { State } from '../state';

const MessageContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
});

export const DetailsPage = () => {
  const { cityId } = useParams();
  const state = useSelector((state: State) => state.city);
  const { weather, error, loading, fetchData, setError } = useGetWeatherData();

  useEffect(() => {
    const selected = state.find((item) => item.id === cityId);
    if (!selected) {
      setError('Missing data!');
    } else {
      const url = APIUrl('NAME_AND_COUNTRY_CODE', {
        name: selected?.name,
        countryCode: selected?.countryCode,
      });
      fetchData({
        url,
        cityId: selected.id,
      });
    }
  }, []);

  return (
    <PageLayout>
      <NavigateBack />
      {loading && !error && (
        <MessageContainer>
          <p>fetching data ...</p>
        </MessageContainer>
      )}
      {error && !weather && (
        <MessageContainer>
          <p>{error}</p>
        </MessageContainer>
      )}
      {weather && (
        <>
          <Clock timezone={weather.timezone} />
          <CurrentWeather
            city={weather.name}
            icon={weather.icon}
            description={weather.description}
            temp={weather.temp}
            sunrise={weather.sunrise}
            sunset={weather.sunset}
          />
        </>
      )}
    </PageLayout>
  );
};
