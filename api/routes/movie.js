const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { URL_REGEX, RU_PATTERN_REGEX, EN_PATTERN_REGEX } = require('../utils/constants');

const {
  getMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');

router.get('/', getMovies);

router.post('/', celebrate({
  body: Joi.object().keys({
    id: Joi
      .number()
      .required(),
    country: Joi
      .string()
      .required(),
    duration: Joi
      .number()
      .required(),
    year: Joi
      .string()
      .required(),
    director: Joi
      .string()
      .required(),
    description: Joi
      .string()
      .required(),
    image: Joi
      .string()
      .required()
      .pattern(URL_REGEX),
    trailerLink: Joi
      .string()
      .required()
      .pattern(URL_REGEX),
    thumbnail: Joi
      .string()
      .required()
      .pattern(URL_REGEX),
    nameRU: Joi
      .string()
      .required()
      .pattern(RU_PATTERN_REGEX),
    nameEN: Joi
      .string()
      .required()
      .pattern(EN_PATTERN_REGEX),
  }),
}), createMovie);

router.delete('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
    // id: Joi.number().required(),
  }),
}), deleteMovieById);

module.exports = router;
