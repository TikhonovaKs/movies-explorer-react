import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
      <p class="footer__title">Educational project at Yandex.Praktikum х BeatFilm.</p>
      <div class="footer__content">
        <p class="footer__copyright">&copy; 2023</p>
        <ul class="footer__list">
          <li class="footer__list-item">
            <a href="#" class="footer__link">
              Kseniia Tikhonova
            </a>
          </li>
          <li class="footer__list-item">
            <a href="https://github.com/TikhonovaKs" class="footer__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
