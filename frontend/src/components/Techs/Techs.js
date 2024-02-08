import React from 'react';
import './Techs.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';

const Techs = React.forwardRef((props, forwardedRef) => {
  return (
    <section className="technologies" id="techs" ref={forwardedRef}>
      <BlockTitle title="Technologies" />
      <h2 className="technologies__title">7 technologies</h2>
      <p className="technologies__description">
        During the web development course, we mastered the technologies that we used in our diploma project.
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
});
export default Techs;
