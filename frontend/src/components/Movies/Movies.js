import React from 'react';
import * as mainApi from '../../utils/MainApi';
import './Movies.css';
import '../SearchForm/SearchForm.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ShortMoviesContext from '../../contexts/ShortMoviesContext';

function Movies({ allMoviesFromPublicApi, path, useCache }) {
  const isShortMovie = (areShortSelected, movie) => {
    if (!areShortSelected) return true;
    return movie.duration < 40;
  };
  const [areShortMovies, setAreShortMovies] = React.useState(
    (localStorage.getItem('isShortMoviesActive') === 'true' && useCache) ?? false
  );

  const initValueOfMoviesList = useCache
    ? JSON.parse(localStorage.getItem('latestFilteredMovies')) ?? [] // ?? - check null
    : [];
  const [originMovies, setOriginMovies] = React.useState(initValueOfMoviesList);
  const [moviesList, setMoviesList] = React.useState(
    initValueOfMoviesList.filter((p) => isShortMovie(areShortMovies, p))
  );
  const [savedOriginMovies, setSavedOriginMovies] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  // -----
  const [searchKeyword, setSearchKeyword] = React.useState('');

  React.useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((data) => {
        // We iterate over the movies retrieved from the database
        data.movie.forEach((item) => {
          // Add isActive to all received saved movies
          item.isActive = true;
          // Compare saved movies and movies of main page (id)
          const foundMovie = moviesList.find((movie) => movie.id === item.id);
          if (foundMovie) {
            // If we find a match add green color for button
            const updMoviesList = moviesList.map((p) => {
              if (p.id === foundMovie.id) {
                p.isActive = true;
                p._id = item._id;
              }
              return p;
            });
            setMoviesList(updMoviesList);
          }
        });
        //we update the state in the saved list (Saved Movies page)
        setSavedOriginMovies(data.movie.map((p) => p)); //??
        setSavedMoviesList(data.movie.filter((p) => isShortMovie(areShortMovies, p)));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearch = (keyword, setError) => {
    setSearchKeyword(keyword);

    if (path === '/movies') {
      const resultMovies = allMoviesFromPublicApi.filter((movie) =>
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
      );
      // Updating the state for the found movies
      resultMovies.forEach((item) => {
        const foundMovie = savedOriginMovies.find((movie) => movie.id === item.id);
        if (foundMovie) {
          if (item.id === foundMovie.id) {
            item.isActive = true;
            item._id = foundMovie._id;
          }
        }
      });
      setMoviesList(resultMovies.filter((movie) => isShortMovie(areShortMovies, movie)));

      // Save search movies in local storage
      if (useCache) localStorage.setItem('latestFilteredMovies', JSON.stringify(resultMovies));
    } else {
      const resultMovies = keyword
        ? savedMoviesList.filter(
            (movie) => isShortMovie(areShortMovies, movie) && movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
          )
        : originMovies;
      setSavedMoviesList(resultMovies);
    }
  };

  const handleShortMovies = (isActive) => {
    setAreShortMovies(isActive);
    if (isActive) {
      setOriginMovies(moviesList.map((p) => p));
      const filteredMovies = moviesList.filter((item) => isShortMovie(isActive, item));
      setMoviesList(filteredMovies);

      const filteredSavedMovies = savedOriginMovies.filter((item) => isShortMovie(isActive, item));
      setSavedMoviesList(filteredSavedMovies);
    } else {
      // Restoring the original list of movies (excluding short films)
      setMoviesList(originMovies);
      setSavedMoviesList(savedOriginMovies);
    }
  };

  const handleSaveMovies = (data, isActive) => {
    if (isActive) {
      //Check if a movies is saved or not
      const isMovieSaved = savedMoviesList.find((movie) => movie.id === data.id) !== undefined;
      if (isMovieSaved) {
        return;
      }
      mainApi.saveMovie({ ...data }).then(({ movie }) => {
        const newMovieItem = {
          id: movie.id,
          country: movie.country,
          duration: movie.duration,
          year: movie.year,
          director: movie.director,
          description: movie.description,
          image: movie.image,
          trailerLink: movie.trailerLink,
          thumbnail: movie.thumbnail,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          __v: movie.__v,
          _id: movie._id,
          isActive: true,
        };
        // Update the state of saved movies
        setSavedMoviesList([newMovieItem, ...savedMoviesList]);
        setSavedOriginMovies([newMovieItem, ...savedOriginMovies]);
        const foundMovie = moviesList.find((mv) => mv.id === movie.id);
        if (foundMovie) {
          // If the movie is found in the main list, we update its state
          const updMoviesList = moviesList.map((p) => {
            if (p.id === foundMovie.id) {
              p.isActive = true;
              p._id = movie._id;
            }
            return p;
          });
          setMoviesList(updMoviesList);
        }
      });
    }
    if (!isActive) {
      mainApi
        .deleteMovie(data._id)
        .then((data) => {
          // Update the state of saved movies after deleting a film
          const updatedMoviesList = savedMoviesList.filter((movie) => movie.id !== data.movie.id);
          setSavedMoviesList(updatedMoviesList);

          const updatedOriginSavedMoviesList = savedOriginMovies.filter((movie) => movie.id !== data.movie.id);
          setSavedOriginMovies(updatedOriginSavedMoviesList);

          const foundMovie = moviesList.find((mv) => mv.id === data.movie.id);
          if (foundMovie) {
            // If a movie is founded in the main list update this movie's state
            const updMoviesList = moviesList.map((p) => {
              if (p.id === foundMovie.id) {
                p.isActive = false;
              }
              return p;
            });
            setMoviesList(updMoviesList);

            const updOriginMoviesList = originMovies.map((p) => {
              if (p.id === foundMovie.id) {
                p.isActive = false;
              }
              return p;
            });
            setOriginMovies(updOriginMoviesList);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="movies">
      <ShortMoviesContext.Provider value={areShortMovies}>
        <SearchForm handleSearch={handleSearch} handleShortMovies={handleShortMovies} useCache={useCache} />
        <MoviesCardList
          moviesList={moviesList}
          path={path}
          handleSaveMovies={handleSaveMovies}
          savedMoviesList={savedMoviesList}
          isLoading={isLoading}
          searchKeyword={searchKeyword}
        />
      </ShortMoviesContext.Provider>
    </div>
  );
}

export default Movies;
