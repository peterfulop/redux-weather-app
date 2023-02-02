import React, { FC, useEffect, useState } from 'react';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import reactStringReplace from 'react-string-replace';
import styled from 'styled-components';
import { State } from '../../state';
import { theme } from '../../theme/theme';
import { CapitalCity } from '../../types';

const ListItem = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0.35rem .5rem',
  ':hover': {
    cursor: 'pointer',
    background: theme.colors.listItemHover,
  },
  ':hover.saved-item': {
    cursor: 'not-allowed',
    background: 'none',
  },
  '.highlighted': {
    color: theme.colors.listItem,
  },
});

interface ICapitalCityListItem {
  capital: CapitalCity;
  activeCity: CapitalCity | null;
  searchQuery: string;
  setActiveCity: React.Dispatch<React.SetStateAction<CapitalCity | null>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CapitalCityListItem: FC<ICapitalCityListItem> = (props) => {
  const cities = useSelector((state: State) => state.city);
  const [saved, setSaved] = useState<boolean>(false);

  useEffect(() => {
    const isSaved =
      cities.findIndex((city) => city.id === props.capital.id) >= 0;
    setSaved(isSaved);
  }, [props.capital, cities]);

  const handleItemClick = () => {
    if (!saved) {
      const { id, name, country, countryCode } = props.capital;
      const currentItem: CapitalCity = {
        id,
        name,
        country,
        countryCode,
      };
      props.setSuccess(false);
      props.setActiveCity(currentItem);
    }
  };

  const hightlightKeywords = () => {
    return reactStringReplace(
      props.capital.name,
      props.searchQuery,
      (match, key) => (
        <span className='highlighted' key={key}>
          {match}
        </span>
      )
    );
  };

  return (
    <ListItem
      className={`city-list-item ${saved && 'saved-item'}`}
      id={props.capital.id}
      onClick={() => handleItemClick()}
    >
      <div>
        <h3 id={props.capital.name}>{hightlightKeywords()}</h3>
        <small>{props.capital.country}</small>
      </div>
      {saved && <BsFillBookmarkCheckFill size={20} />}
    </ListItem>
  );
};
