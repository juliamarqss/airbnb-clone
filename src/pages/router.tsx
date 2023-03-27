import React, { ReactNode } from 'react';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import HomeCustomer from './Customer/HomeCustomer';
import DetailsPropertyCustomer from './Customer/DetailsPropertyCustomer';
import CheckoutCustomer from './Customer/CheckoutCustomer';

interface Props {
  pathname: string;
  children: ReactNode;
}

export default function Router({ pathname, children }: Props) {
  switch (pathname) {
    case '/':
      return <LandingPage />;
    case '/login':
      return <Login />;
    case '/register':
      return <Register />;
    case '/home-customer':
      return <HomeCustomer />;
    case '/detailsProperty':
      return <DetailsPropertyCustomer />;
    case '/checkout':
      return <CheckoutCustomer />;
    default:
      return <div>Página não encontrada!</div>;
  }
}