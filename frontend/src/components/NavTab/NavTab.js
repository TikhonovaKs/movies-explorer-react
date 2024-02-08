import React from 'react';
import './NavTab.css';

function NavTab({ handleNavigationClick }) {
  return (
    <ul className="menu">
      <li className="menu__list-link menu__link" onClick={handleNavigationClick} name="aboutProject">
        About project
      </li>
      <li className="menu__list-link menu__link" onClick={handleNavigationClick} name="techs">
        Technologies
      </li>
      <li className="menu__list-link menu__link" onClick={handleNavigationClick} name="aboutMe">
        About me
      </li>
    </ul>
  );
}
export default NavTab;
