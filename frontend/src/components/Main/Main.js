import React, { useRef } from 'react';
import './Main.css';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';

function Main() {
  // We create an object called forwardedRefs to store refs for each section (menu)
  const forwardedRefs = {
    aboutProject: useRef(null),
    techs: useRef(null),
    aboutMe: useRef(null),
  };

  function handleNavigationClick(e) {
    const buttonName = e.target.attributes.name.value;
    const navElement = forwardedRefs[buttonName].current;
    if (navElement) {
      navElement.scrollIntoView({ behavior: 'auto' });
    }
  }

  return (
    <main className="main">
      <Promo />
      <NavTab handleNavigationClick={handleNavigationClick} />
      <AboutProject ref={forwardedRefs.aboutProject} />
      <Techs ref={forwardedRefs.techs} />
      <AboutMe ref={forwardedRefs.aboutMe} />
    </main>
  );
}
export default Main;
