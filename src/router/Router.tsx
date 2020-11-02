import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'shared/ScrollToTop';
import Background from 'shared/layout/Background';
import { routes } from './routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Background>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Background>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
