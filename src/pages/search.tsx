import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { CapitalCityList } from '../components/capital-city-list/capital-city-list';
import { Button } from '../components/main-button/main-button';
import { Input } from '../components/main-input/main-input';
import { NavigateBack } from '../components/navigate-back/navigate-back';
import { PageLayout } from '../components/page-layout/page-layout';
import { useSearchCapitalCities } from '../hooks/use-search-capital-cities.hook';
import { actionCreators } from '../state';
import { theme } from '../theme/theme';
import { CapitalCity, City, RoutePaths } from '../types';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCity, setActiveCity] = useState<CapitalCity | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { searchCapitalCities, capitalCities } = useSearchCapitalCities();

  const dispatch = useDispatch();
  const { createCity } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setSuccess(false);
    setActiveCity(null);
    searchCapitalCities(searchQuery);
  }, [searchQuery]);

  const handleOnSave = () => {
    if (activeCity) {
      const newCity: City = {
        id: activeCity?.id,
        name: activeCity?.name,
        country: activeCity?.country,
        countryCode: activeCity?.countryCode,
      };
      createCity(newCity);
      setSuccess(true);
    }
  };

  return (
    <PageLayout>
      <NavigateBack />
      <Input
        type={'text'}
        onChange={(e) => setSearchQuery(e.target.value)}
        icon={HiChevronDown}
        iconSize={40}
        placeholder={'Start typing to search ...'}
        style={{ margin: '0.25rem .5rem' }}
      />
      {capitalCities && (
        <CapitalCityList
          capitals={capitalCities}
          activeCity={activeCity}
          searchQuery={searchQuery}
          setActiveCity={setActiveCity}
          setSuccess={setSuccess}
        />
      )}
      {!success && (
        <Button
          type={'button'}
          disabled={!activeCity}
          style={{ margin: '1rem .5rem' }}
          onClick={handleOnSave}
        >
          Save
        </Button>
      )}
      {success && (
        <>
          <h4 style={{ marginTop: '2rem' }}>
            You successfully saved
            <Link
              style={{
                textDecoration: 'none',
                color: theme.colors.textSecondary,
              }}
              to={RoutePaths.DETAILS.replace(':cityId', String(activeCity?.id))}
            >
              {` ${activeCity?.name}!`}
            </Link>
          </h4>
        </>
      )}
    </PageLayout>
  );
};
