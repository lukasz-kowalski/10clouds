import * as p from './routePaths';
import Home from 'pages/Home';
import AccountForm from 'pages/AccountForm';
import { Route } from './interface';

export const routes: Route[] = [
  {
    path: p.home,
    component: Home,
    exact: true,
  },
  {
    path: p.accountForm,
    component: AccountForm,
  },
];
