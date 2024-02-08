import React from 'react';
import './Logo.css';
import headerLogo from '../../images/logo.svg';
import headerLogoBlue from '../../images/logo-blue.svg';

function Logo({ position, path }) {
  if (path === '/movies') {
    return <img src={headerLogo} alt="Main logo" className={`logo logo_${position}`} />;
  } else {
    return <img src={headerLogoBlue} alt="Main logo" className={`logo logo_${position}`} />;
  }
}
export default Logo;
