import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageLayout } from '../components/page-layout/page-layout';
import { theme } from '../theme/theme';
import { RoutePaths } from '../types';

const LinkButton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '1rem',
  a: {
    textDecoration: 'none',
    color: theme.colors.buttonSecondary,
    padding: '1rem 3rem',
    border: `1px solid ${theme.colors.buttonSecondary}`,
    ':hover': {
      cursor: 'pointer',
      color: theme.colors.textPrimary,
      background: theme.colors.listItemHover,
    },
  },
});

export const NotFoundPage = () => {
  return (
    <PageLayout
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2>PAGE NOT FOUND</h2>
      <h3>Back to the home page:</h3>
      <LinkButton>
        <Link to={RoutePaths.HOME}>HOME</Link>
      </LinkButton>
    </PageLayout>
  );
};
