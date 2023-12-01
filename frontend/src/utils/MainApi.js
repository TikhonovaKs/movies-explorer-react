import checkResponse from './checkResponse';

export const BASE_URL = 'http://localhost:3000';
// export const BASE_URL = 'https://kseniia-mesto.nomoreparties.sbs';
// export const BASE_URL = 'https://auth.nomoreparties.co';

// export const editProfileInfo = ({ email, name, jwt}) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${jwt}`,
//     },
//     body: JSON.stringify({ email, name, }),
//   }).then(checkResponse);
// };

// Функция для получения токена из локального хранилища
const getJwt = () => `Bearer ${localStorage.getItem('jwt')}`;

const headers = {
  'Content-Type': 'application/json', // Заголовок для указания формата отправляемых данных
  Authorization: getJwt(), // Заголовок для передачи токена
  Accept: 'application/json', // Заголовок для указания принимаемого формата данных
};

export const setJwt = () => {
  headers.Authorization = getJwt();
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: headers,
  }).then(checkResponse);
};

export const saveMovie = (data) => {
  delete data.isActive;
  delete data._id;
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  }).then(checkResponse);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: headers,
  }).then(checkResponse);
};
