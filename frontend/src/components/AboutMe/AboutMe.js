import React from 'react';
import './AboutMe.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';
import myPhoto from '../../images/my-photo.png';
import Portfolio from '../Portfolio/Portfolio.js';

const AboutMe = React.forwardRef((props, forwardedRef) => {
  return (
    <section className="student" id="aboutMe" ref={forwardedRef}>
      <BlockTitle title="About me" />
      <div className="student__profile">
        <div className="student__info">
          <h2 className="student__name">Kseniia Tikhonova</h2>
          <h3 className="student__job">Frontend Developer</h3>
          <p className="student__about">
            I'm a junior frontend developer on the path to becoming a professional in this exciting field. I
            successfully completed an online school program with Yandex and am currently advancing my skills at Hyper
            Island. I have a knack for quick learning and a strong interest in continuous technical growth. My goal is
            to build a long-term career focused on professional development
          </p>
          <a target="_blank" href="#" className="student__github">
            Github
          </a>
        </div>
        <img className="student__image" src={myPhoto} alt="Student photo" />
      </div>
      <Portfolio />
    </section>
  );
});

export default AboutMe;
