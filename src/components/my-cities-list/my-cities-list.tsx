import styled from 'styled-components';
import { City } from '../../types';
import { MyCitiesListItem } from './my-cities-list-item';

export const CitiesList = styled.div({
  width: '100%',
  overflow: 'auto',
  maxHeight: '490px',
  marginTop: '.5rem',
});

type MyCitiesList = {
  cities: City[];
};

export const MyCitiesList = (props: MyCitiesList) => {
  return (
    <CitiesList>
      {props.cities
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((city, key) => {
          return <MyCitiesListItem key={key} city={city} />;
        })}
    </CitiesList>
  );
};
