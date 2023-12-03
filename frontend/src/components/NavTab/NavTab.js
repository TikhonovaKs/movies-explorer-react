import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <ul className="menu">
    <li className="menu__list-link">
      <a className="menu__link" href="#">О проекте</a>
    </li>
    <li className="menu__list-link">
      <a className="menu__link" href="#">Технологии</a>
    </li>
    <li className="menu__list-link">
      <a className="menu__link" href="#" >Студент</a>
    </li>
  </ul>
  );
}
export default NavTab;
