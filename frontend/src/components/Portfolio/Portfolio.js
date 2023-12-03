import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
    <h3 className="portfolio__title">Портфолио</h3>
    <ul className="project__list">
      <li className="portfolio__item">
        <a href="https://github.com/TikhonovaKs/how-to-learn.git" className="portfolio__project-link" target="_blank">
          <span className="portfolio__project-title">Статичный сайт</span>
          <span className="portfolio__project-icon"></span>
        </a>
      </li>
      <li className="portfolio__item">
        <a href="https://github.com/TikhonovaKs/russian-travel.git" className="portfolio__project-link" target="_blank">
          <span className="portfolio__project-title">Адаптивный сайт</span>
          <span className="portfolio__project-icon"></span>
        </a>
      </li>
      <li className="portfolio__item">
        <a href="https://github.com/TikhonovaKs/react-mesto-api-full-gha.git" className="portfolio__project-link" target="_blank">
          <span className="portfolio__project-title">Одностраничное приложение</span>
          <span className="portfolio__project-icon"></span>
        </a>
      </li>
    </ul>
  </section>
  );
}
export default Portfolio;
