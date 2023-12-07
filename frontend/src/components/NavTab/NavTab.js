import React from 'react';
import './NavTab.css';

function NavTab({ handleNavigationClick }) {
  return (
    <ul className="menu">
      <li className="menu__list-link menu__link" onClick={handleNavigationClick} name="aboutProject">
        О проекте
      </li>
      <li className="menu__list-link menu__link" onClick={handleNavigationClick} name="techs">
        Технологии
      </li>
      <li className="menu__list-link menu__link" onClick={handleNavigationClick} name="aboutMe">
        Студент
      </li>
    </ul>
  );
}
export default NavTab;
