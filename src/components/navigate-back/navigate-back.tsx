import { HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { RoutePaths } from '../../types';

const Navigation = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '-0.8rem',
  svg: {
    color: theme.colors.buttonSecondary,
    fontSize: '100px',
    ':hover': {
      cursor: 'pointer',
      color: theme.colors.buttonPrimary,
    },
  },
});

export const NavigateBack = () => {
  const navigate = useNavigate();
  return (
    <Navigation>
      <HiChevronLeft size={40} onClick={() => navigate(RoutePaths.HOME)} />
    </Navigation>
  );
};
