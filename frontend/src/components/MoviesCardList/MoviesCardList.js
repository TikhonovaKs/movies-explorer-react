import React from 'react';
import useResize from '../../utils/hooks/useResize';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesList, savedMoviesList, path, handleSaveMovies, isLoading, searchKeyword }) {
  const { isScreenXl, isScreenMd, isScreenSm } = useResize();

  const visibleMoviesMap = {
    isScreenXl: 16,
    isScreenMd: 8,
    isScreenSm: 5,
  };
  const [visibleMoviesFromList, setVisibleMoviesFromList] = React.useState(
    visibleMoviesMap[isScreenXl ? 'isScreenXl' : isScreenMd ? 'isScreenMd' : 'isScreenSm']
  );

  const showMoreMovies = () => {
    if (isScreenXl) {
      setVisibleMoviesFromList((prevValue) => prevValue + 16);
    } else if (isScreenMd) {
      setVisibleMoviesFromList((prevValue) => prevValue + 8);
    } else if (isScreenSm) {
      setVisibleMoviesFromList((prevValue) => prevValue + 5);
    } else {
      setVisibleMoviesFromList((prevValue) => prevValue + 16);
    }
  };

  const sourceMoviesList = path === '/movies' ? moviesList : savedMoviesList;

  const cards = sourceMoviesList
    .slice(0, visibleMoviesFromList)
    .map((movie) => <MoviesCard movie={movie} handleSaveMovies={handleSaveMovies} path={path} />);

  // remove visible of more button
  const isButtonHidden = visibleMoviesFromList >= sourceMoviesList.length;

  // If you have never searched for films or found nothing
  if (sourceMoviesList.length === 0 && searchKeyword.length === 0) {
    return <p className="elements__error">Начните поиск фильмов</p>;
  } else if (sourceMoviesList.length === 0 && searchKeyword.length !== 0) {
    return <p className="elements__error">Ничего не найдено</p>;
  }

  return (
    <div>
      {isLoading && <Preloader />}
      <ul className="elements">{cards}</ul>
      <button
        className={`elements__button-more ${isButtonHidden ? 'elements__button-more-hidden' : ''}`}
        aria-label="Еще больше фильмов"
        type="button"
        onClick={showMoreMovies}
      >
        Еще
      </button>
    </div>
  );
}

export default MoviesCardList;
