import { FC, useState } from 'react';
import { RiDeleteBin5Line, RiTempHotLine } from 'react-icons/ri';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { actionCreators } from '../../state';
import { theme } from '../../theme/theme';
import { RoutePaths, Unit } from '../../types';
import { convertDateToHours } from '../../utils/convert-date-to-hours';
import { convertKelvinToCelcius } from '../../utils/convert-kelvin-to-celsius';
import { setUnit } from '../../utils/set-unit';
import { Button } from '../main-button/main-button';
import { WeatherIcon } from '../weather-icon/weather-icon';

const WeatherContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  h1: {
    fontSize: '40px',
    marginBottom: '3rem',
    color: theme.colors.textPrimary,
  },
});

const WeatherDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  gap: '0.5rem',
});

const Detail = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '120px',
  p: {
    color: theme.colors.textTertiary,
    fontSize: '1.25rem',
    fontWeight: 'lighter',
  },
  '.temp': {
    fontWeight: 'bold',
  },
});

const DeleteConfirm = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1.5rem',
  padding: '1rem',
  gap: '5px',
  '.back_btn:hover': {
    color: 'gray',
    border: '1px solid gray',
  },
  '.confirm_btn:hover': {
    color: theme.colors.buttonRemove,
    border: `1px solid ${theme.colors.buttonRemove}`,
  },
});

interface ICurrentWeatherProps {
  city: string;
  icon: string;
  description: string;
  temp: number;
  sunrise: number;
  sunset: number;
}

export const CurrentWeather: FC<ICurrentWeatherProps> = (props) => {
  const { city, icon, description, temp, sunrise, sunset } = props;
  const { cityId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [confirmDelete, setConfirmDelete] = useState(false);
  const { deleteCity } = bindActionCreators(actionCreators, dispatch);

  const handleRemoveCity = () => {
    deleteCity(cityId as string);
    navigate(RoutePaths.HOME);
    setConfirmDelete(false);
  };

  return (
    <WeatherContainer>
      <h1>{city}</h1>
      <WeatherIcon icon={icon} />
      <small>{description}</small>
      <WeatherDetails>
        <Detail>
          <RiTempHotLine
            size={30}
            color={theme.colors.iconPrimary}
            style={{ marginLeft: '2px' }}
          />
          <p className='temp'>
            {setUnit(convertKelvinToCelcius(temp), Unit.CELSIUS)}
          </p>
        </Detail>
        <Detail>
          <WiSunrise size={35} color={theme.colors.iconPrimary} />
          <p>{convertDateToHours(sunrise)}</p>
        </Detail>
        <Detail>
          <WiSunset size={35} color={theme.colors.iconPrimary} />
          <p>{convertDateToHours(sunset)}</p>
        </Detail>
      </WeatherDetails>
      <DeleteConfirm>
        {!confirmDelete && (
          <Button
            type={'button'}
            style={{ border: 'none', padding: '12px' }}
            onClick={() => setConfirmDelete(true)}
            icon={RiDeleteBin5Line}
            iconSize={25}
          />
        )}
        {confirmDelete && (
          <>
            <Button
              className='back_btn'
              onClick={() => setConfirmDelete(false)}
            >
              Back
            </Button>
            <Button className='confirm_btn' onClick={handleRemoveCity}>
              Confirm
            </Button>
          </>
        )}
      </DeleteConfirm>
    </WeatherContainer>
  );
};
