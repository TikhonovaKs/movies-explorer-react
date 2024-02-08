import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import profileLogo from '../../images/profie-icon.svg';

function Navigation({ path }) {
  let navigationButtonClassName = '';
  if (path === '/movies') {
    navigationButtonClassName = 'navigation__button_is-white';
  } else {
    navigationButtonClassName = 'navigation__button';
  }

  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/movies" className={navigationButtonClassName}>
            Movies
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className={navigationButtonClassName}>
            Saved movies
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="navigation__link">
        <img src={profileLogo} alt="profile logo" className="navigation__logo" />
        <span className="navigation__account">Account</span>
      </Link>
      {/* <button className="navigation__hidden-menu" aria-label="Drop down menu button" type="button"></button> */}
    </div>
  );
}

export default Navigation;
