import React from 'react';
import './NavAuth.css';

function NavAuth() {
  return (
    <ul className="header__auth-links">
      <li>
        <a href="/signup" className="header__registration-link">
          Sign up
        </a>
      </li>
      <li>
        <a href="/signin" className="header__login-link">
          Sign in
        </a>
      </li>
    </ul>
  );
}
export default NavAuth;
