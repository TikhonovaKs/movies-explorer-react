const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');
const User = require('./user');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: 'Image format is not correct',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: 'Link format is not correct',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isUrl(url),
      message: 'Image format is not correct',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  id: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
