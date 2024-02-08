import React from 'react';
import './Promo.css';
import promoLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <div className="promo">
      <img className="promo__image" src={promoLogo} alt="Yandex logo" />
      <div className="promo__text">
        <h1 className="promo__title">Final project:</h1>
        <h2 className="promo__subtitle">movie search and saving</h2>
      </div>
    </div>
  );
}
export default Promo;
