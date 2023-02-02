import { DetailsPage } from '../pages/details';
import { HomePage } from '../pages/home';
import { NotFoundPage } from '../pages/not-found';
import { SearchPage } from '../pages/search';
import IRoute, { RoutePaths } from '../types';

const mainRoutes: IRoute[] = [
  {
    path: RoutePaths.HOME,
    component: HomePage,
  },
  {
    path: RoutePaths.SEARCH,
    component: SearchPage,
  },
  {
    path: RoutePaths.DETAILS,
    component: DetailsPage,
  },
  {
    path: RoutePaths.NOT_FOUND,
    component: NotFoundPage,
  },
];

const routes: IRoute[] = [...mainRoutes];

export default routes;
