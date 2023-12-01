import React from 'react';
import './NavAuth.css';

function NavAuth() {
  return (
    <ul className="header__auth-links">
      <li>
        <a href="/signup" className="header__registration-link">
          Регистрация
        </a>
      </li>
      <li>
        <a href="/signin" className="header__login-link">
          Войти
        </a>
      </li>
    </ul>
  );
}
export default NavAuth;
