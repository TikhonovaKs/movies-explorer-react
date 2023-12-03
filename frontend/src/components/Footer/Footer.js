import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
      <p class="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div class="footer__content">
        <p class="footer__copyright">&copy; 2023</p>
        <ul class="footer__list">
          <li class="footer__list-item">
            <a href="#" class="footer__link">
              Яндекс.Практикум
            </a>
          </li>
          <li class="footer__list-item">
            <a href="#" class="footer__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
