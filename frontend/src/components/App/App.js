// import React from 'react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { UnprotectedRoute } from '../UnprotectedRoute/UnprotectedRoute.js';

import * as auth from '../../utils/auth';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import './App.css';
import Main from '../Main/Main.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import EditProfile from '../EditProfile/EditProfile';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import * as mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('jwt') && true);
  const [updatedUser, setUpdatedUser] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  //switch state for InfoTooltip:
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser({
            name: res.data.name,
            email: res.data.email,
          });
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  // вызываем useNavigate() (переход на другие страницы):
  const navigate = useNavigate();

  // обрабатчик входа пользователя в систему (передаем в Login):
  const handleLogin = ({ email, password }, setError) => {
    // обращаемся к API для аутентификации пользователя:
    auth
      .login(email, password)
      // обрабатываем успешное выполнение промиса, получив данные из ответа API в data.
      .then((data) => {
        // Проверяем, есть ли у полученных данных токен (data.token).
        if (data.token) {
          // Если токен существует, сохраняем токен в локальном хранилище (ключ(jwt) - значение(data.token)):
          localStorage.setItem('jwt', data.token);
          mainApi.setJwt();
          setLoggedIn(true);
          setCurrentUser({
            name: data.name,
            email: data.email,
          });
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setError('login.servererror', { message: 'Something went wrong with signing in... Try again' });
      });
  };

  function handleSignout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  // Обработчик регистрации пользователя:
  const handleRegister = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((data) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleUpdateUser({ email, name }) {
    const jwt = localStorage.getItem('jwt');
    auth
      .editProfileInfo({ email, name, jwt })
      .then((userResponse) => {
        setCurrentUser({
          name: userResponse.user.name,
          email: userResponse.user.email,
        });
        setUpdatedUser(true);
        navigate('/profile');
      })
      .catch((err) => {
        setUpdatedUser(false);
        console.log(err);
      })
      .finally(() => {
        setIsInfoTooltipPopupOpen(true);
      });
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }

  const [allMoviesFromPublicApi, setAllMoviesFromPublicApi] = React.useState([]);
  console.log(allMoviesFromPublicApi);

  //эффект обращения к API "beatfilm-movies" для получения всех фильмов:
  React.useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((data) => {
        // call-back function
        setAllMoviesFromPublicApi(
          data.map((item) => {
            return {
              id: item.id,
              country: item.country,
              duration: item.duration,
              year: item.year,
              director: item.director,
              description: item.description,
              trailerLink: item.trailerLink,
              nameRU: item.nameRU,
              nameEN: item.nameEN,
              image: 'https://api.nomoreparties.co/' + item.image.url,
              thumbnail: 'https://api.nomoreparties.co/' + item.image.formats.thumbnail.url,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header backgroundName="green" isLoggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute
                isLoggedIn={loggedIn}
                element={
                  <>
                    <Header backgroundName="grey" />
                    <Movies useCache={true} allMoviesFromPublicApi={allMoviesFromPublicApi} path="/movies" key={"movies"}/>
                    <Footer />
                  </>
                }
              />
            }
          ></Route>
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLoggedIn={loggedIn}
                element={
                  <>
                    <Header backgroundName="grey" />
                    <Movies useCache={false} key={"savedMovies"} />
                    <Footer />
                  </>
                }
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <UnprotectedRoute
                isLoggedIn={loggedIn}
                element={
                  <>
                    <Register handleRegister={handleRegister} />
                  </>
                }
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <UnprotectedRoute
                isLoggedIn={loggedIn}
                element={
                  <>
                    <Login handleLogin={handleLogin} />
                  </>
                }
              />
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={loggedIn}
                element={
                  <>
                    <Header backgroundName="grey" />
                    <Profile handleSignout={handleSignout} />
                  </>
                }
              />
            }
          ></Route>
          <Route
            path="/edit-profile"
            element={
              <>
                <EditProfile onUpdateUser={handleUpdateUser} />
              </>
            }
          ></Route>
          <Route
            path="/*"
            element={
              <>
                <NotFoundPage />
              </>
            }
          ></Route>
        </Routes>
        <InfoTooltip isOpen={isInfoTooltipPopupOpen} onClose={closeAllPopups} updatedUser={updatedUser} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
