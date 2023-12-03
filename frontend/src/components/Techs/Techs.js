import React from 'react';
import './Techs.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';

function Techs() {
  return (
    <section className="technologies">
      <BlockTitle title="Технологии" />
      <h2 className="technologies__title">7 технологий</h2>
      <p className="technologies__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="technologies__list">
        <li className="technologies__name">HTML</li>
        <li className="technologies__name">CSS</li>
        <li className="technologies__name">JS</li>
        <li className="technologies__name">React</li>
        <li className="technologies__name">Git</li>
        <li className="technologies__name">Express.js</li>
        <li className="technologies__name">mongoDB</li>
      </ul>
    </section>
  );
}
export default Techs;
