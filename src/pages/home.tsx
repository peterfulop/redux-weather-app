import { TiPlus } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/main-button/main-button';
import { MyCitiesList } from '../components/my-cities-list/my-cities-list';
import { PageLayout } from '../components/page-layout/page-layout';
import { State } from '../state';
import { theme } from '../theme/theme';
import { RoutePaths } from '../types';

export const HomePage = () => {
  const navigate = useNavigate();
  const cities = useSelector((state: State) => state.city);

  return (
    <PageLayout>
      <h2
        style={{
          marginTop: '.5rem',
          fontFamily: 'Roboto',
          fontWeight: '300',
          textTransform: 'capitalize',
        }}
      >
        My Weather app
      </h2>
      <Button
        type={'button'}
        style={{ marginTop: '1rem', border: 'none' }}
        onClick={() => navigate(RoutePaths.SEARCH)}
      >
        <TiPlus size={40} color={theme.colors.buttonSecondary} />
      </Button>
      {cities.length ? (
        <MyCitiesList cities={cities} />
      ) : (
        <p style={{ marginTop: '1rem' }}>
          You don't have any saved cities yet!
        </p>
      )}
    </PageLayout>
  );
};
