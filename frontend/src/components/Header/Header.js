import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo.js';
import NavAuth from '../NavAuth/NavAuth.js';
import Navigation from '../Navigation/Navigation';

function Header({ backgroundName }) {
  const location = useLocation();
  console.log(location);

  const hasNavigation = ['/movies', '/profile', '/saved-movies'].includes(location.pathname);

  return (
    <header className={`header header_type_${backgroundName}`}>
      <Link to="/">
        <Logo />
      </Link>
      {hasNavigation ? <Navigation /> : <NavAuth />}
    </header>
  );
}
export default Header;
