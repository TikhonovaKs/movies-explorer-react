class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('An error has occured');
  }

  getAllMovies() {
    return fetch(`${this._url}beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
});

export default moviesApi;
