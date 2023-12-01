import React from 'react';
import './Promo.css';
import promoLogo from '../../images/landing-logo.svg';


function Promo() {
  return (
    <div className="promo">
      <img className="promo__image" src={promoLogo} alt="Логотип Яндекс Практикум" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </div>
  );
}
export default Promo;
