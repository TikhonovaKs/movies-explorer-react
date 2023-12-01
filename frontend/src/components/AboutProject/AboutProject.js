import React from 'react';
import './AboutProject.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';

function AboutProject() {
  return (
    <section className="about">
      <BlockTitle title="О проекте" />
      <div className="about__info">
        <div className="about__paragraph">
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <p className="about__description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__paragraph">
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__terms">
        <div className="about__weeks">1 неделя</div>
        <div className="about__weeks">4 недели</div>
        <div className="about__stage">Back-end</div>
        <div className="about__stage">Front-end</div>
      </div>
    </section>
  );
}
export default AboutProject;
