import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, handleSaveMovies }) {
  // Создаём переменную, которую после зададим в `className` для кнопки сохранения фильма
  const movieSaveButtonClassName = `element__save-button ${movie.isActive && 'element__save-button_is-active'}`;

  function handleButtonClick() {
    handleSaveMovies(movie, !movie.isActive);
  }

  return (
    <>
      <li className="element">
      <a className='element__link' href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="element__image" src={movie.image} alt={movie.nameRU} />
      </a>
        <div className="element__description">
          <h2 className="element__name">{movie.nameRU}</h2>
          <button
            onClick={handleButtonClick}
            className={movieSaveButtonClassName}
            aria-label="Cохранение понравившегося фильма"
            type="button"
          ></button>
          <h3 className="element__duration">{`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}</h3>
        </div>
      </li>
    </>
  );
}
export default MoviesCard;
