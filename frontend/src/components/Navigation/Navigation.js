import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/movies" className="navigation__button">
            Фильмы
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className="navigation__button">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link to="/profile" className="navigation__link">
        <span className="navigation__account">Аккаунт</span>
      </Link>
      <button className="navigation__hidden-menu" aria-label="Drop down menu button" type="button"></button>
    </div>
  );
}

export default Navigation;
