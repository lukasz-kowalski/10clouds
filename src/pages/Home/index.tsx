import React from 'react';
import { Redirect } from 'react-router-dom';
import { accountForm } from 'router/routePaths';

const Home: React.FC = () => {
  return <Redirect to={`${accountForm}/2`} />;
};

export default Home;
