import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo.js';
import NavAuth from '../NavAuth/NavAuth.js';
import Navigation from '../Navigation/Navigation';

function Header({ backgroundName, isLoggedIn, path }) {
  const location = useLocation();

  const hasNavigation = ['/movies', '/profile', '/saved-movies'].includes(location.pathname);
  const isLoggedInNavigation =  hasNavigation || isLoggedIn;

  return (
    <header className={`header header_type_${backgroundName}`}>
      <Link to="/">
        <Logo path={path} />
      </Link>
      {isLoggedInNavigation ? <Navigation path={path} /> : <NavAuth />}
    </header>
  );
}
export default Header;
