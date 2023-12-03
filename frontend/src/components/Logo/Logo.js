import React from 'react';
import './Logo.css';
import headerLogo from '../../images/logo.svg';

function Logo({ position }) {
  return <img src={headerLogo} alt="Логотип в виде круга" className={`logo logo_${position}`} />;
}
export default Logo;
