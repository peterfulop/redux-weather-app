import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { City, RoutePaths } from '../../types';

export const MyCityItem = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  ':hover': {
    color: theme.colors.listItem,
    background: theme.colors.listItemHover,
    cursor: 'pointer',
  },
});

interface IMyCitiesListItem {
  city: City;
}

export const MyCitiesListItem: FC<IMyCitiesListItem> = (props) => {
  const { name, id } = props.city;
  const navigate = useNavigate();

  return (
    <MyCityItem
      onClick={() => navigate(RoutePaths.DETAILS.replace(':cityId', id))}
    >
      <h2>{name}</h2>
    </MyCityItem>
  );
};
