import React from 'react';
import './AboutMe.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';
import myPhoto from '../../images/my-photo.png';
import Portfolio from '../Portfolio/Portfolio.js';

function AboutMe() {
  return (
    <section className="student">
      <BlockTitle title="Студент" />
      <div className="student__profile">
        <div className="student__info">
          <h2 className="student__name">Kseniia</h2>
          <h3 className="student__job">Frontend Developer</h3>
          <p className="student__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
            музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
            того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
}

export default AboutMe;
