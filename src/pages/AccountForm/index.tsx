import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Route as RouteInterface } from 'router/interface';
import { AccountFormStep1, AccountFormStep2, AccountFormStep3 } from './steps';

const AccountFormPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { path } = match;

  const routes: RouteInterface[] = [
    {
      path: `${path}/1`,
      component: AccountFormStep1,
      exact: true,
    },
    {
      path: `${path}/2`,
      component: AccountFormStep2,
      exact: true,
    },
    {
      path: `${path}/3`,
      component: AccountFormStep3,
      exact: true,
    },
  ];

  return (
    <>
      {routes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
    </>
  );
};

export default AccountFormPage;
