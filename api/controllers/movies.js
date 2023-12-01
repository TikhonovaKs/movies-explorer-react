const Movie = require('../models/movie');

const BadRequestError = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-err');
const NotFoundError = require('../errors/not-found-err');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movie) => res.send({ movie }))
    .catch(next);
};

const createMovie = (req, res, next) => {
  Movie.create({
    ...req.body,
    owner: req.user._id,
  })
    .then((movie) => res.send({ movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(`Incorrect data passed during movie updating ${err.message}`));
      } else {
        next(err);
      }
    });
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Movie not found');
      }
      // Проверяем, принадлежит ли фильм текущему пользователю
      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError('You are not allowed to delete this movie');
      }
      // Если все проверки пройдены успешно, удаляем фильм
      return Movie.findByIdAndRemove(movie._id);
    })
    .then((deletedMovie) => {
      res.send({ movie: deletedMovie });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Wrong format'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovieById,
};
