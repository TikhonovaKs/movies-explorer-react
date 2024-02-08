import React from 'react';
import './AboutProject.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';

const AboutProject = React.forwardRef((props, forwardedRef) => {
  return (
    <section className="about" id="aboutProject" ref={forwardedRef}>
      <BlockTitle title="About project" />
      <div className="about__info">
        <div className="about__paragraph">
          <h3 className="about__title">The final project included 5 stages</h3>
          <p className="about__description">
            Drawing up a plan, working on the backend, layout, adding functionality and final improvements.
          </p>
        </div>
        <div className="about__paragraph">
          <h3 className="about__title">The project took 5 weeks to complete</h3>
          <p className="about__description">
            Each stage had a deadline that had to be met in order to successfully complete the project.
          </p>
        </div>
      </div>
      <div className="about__terms">
        <div className="about__weeks">1 week</div>
        <div className="about__weeks">4 weeks</div>
        <div className="about__stage">Back-end</div>
        <div className="about__stage">Front-end</div>
      </div>
    </section>
  );
});

export default AboutProject;
