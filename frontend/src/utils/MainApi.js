import checkResponse from './checkResponse';

// export const BASE_URL = 'http://localhost:3000';
export const BASE_URL = 'https://api.diploma-kseniia.nomoredomainsicu.ru';

const getJwt = () => `Bearer ${localStorage.getItem('jwt')}`;

const headers = {
  'Content-Type': 'application/json',
  Authorization: getJwt(),
  Accept: 'application/json',
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
