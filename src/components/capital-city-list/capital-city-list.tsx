import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { CapitalCity } from '../../types';
import { CapitalCityListItem } from './capital-city-list-item';

const ListContainer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '0 .5rem',
  height: '450px',
  '.selected': {
    background: `${theme.colors.listItemHover} !important`,
  },
});

interface ICapitalCityList {
  capitals: CapitalCity[];
  searchQuery: string;
  activeCity: CapitalCity | null;
  setActiveCity: React.Dispatch<React.SetStateAction<CapitalCity | null>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CapitalCityList: FC<ICapitalCityList> = (props) => {
  useEffect(() => {
    const listItems = document.querySelectorAll('.city-list-item');
    listItems.forEach((item) => item.classList.remove('selected'));
    if (props.activeCity) {
      const currentItem = document.getElementById(props.activeCity?.id);
      currentItem?.classList.add('selected');
    }
  }, [props.activeCity]);

  return (
    <ListContainer>
      {props.capitals.map((capital, key) => {
        return (
          <CapitalCityListItem
            key={key}
            capital={capital}
            activeCity={props.activeCity}
            searchQuery={props.searchQuery}
            setActiveCity={props.setActiveCity}
            setSuccess={props.setSuccess}
          />
        );
      })}
    </ListContainer>
  );
};
