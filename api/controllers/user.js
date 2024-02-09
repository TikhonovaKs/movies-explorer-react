require('dotenv').config();

console.log(process.env.NODE_ENV); // production

const bcrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');
const User = require('../models/user');

const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');
const NotFoundError = require('../errors/not-found-err');
const UnauthorizedError = require('../errors/unauthorized-err');

const createUser = (req, res, next) => {
  bcrypt.hash(String(req.body.password), 10)
    .then((hashedPassword) => {
      User.create({ ...req.body, password: hashedPassword })
        .then((user) => {
          res.send({ data: user });
        })
        .catch((err) => {
          if (err.code === 11000) {
            next(new ConflictError('User with this email adress is already registered'));
          } else if (err.name === 'ValidationError') {
            next(new BadRequestError('Incorrect data passed during user updating'));
          } else {
            next(err);
          }
        });
    })
    .catch((err) => {
      next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  const { NODE_ENV, JWT_SECRET } = process.env;

  return User.findOne({ email })
    .select('+password')
    .orFail(() => new UnauthorizedError('User is not found'))
    .then((user) => bcrypt.compare(String(password), user.password)
      .then((isValidUser) => {
        if (isValidUser) {
          const jwt = jsonWebToken.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '1w' });
          res.send({ ...user.toJSON(), token: jwt });
        } else {
          throw new UnauthorizedError('Incorrect password or email');
        }
      }))
    .catch((err) => {
      if (err.message === 'Пользователь не найден') {
        next(new UnauthorizedError('Incorrect password or email'));
      } else {
        next(err);
      }
    });
};

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User was not found');
      }
      res.status(200).send({ data: user });
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  User.findByIdAndUpdate(
    req.user._id,
    { email: req.body.email, name: req.body.name },
    // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    },
  )
    .then((user) => {
      if (user) { return res.send({ user }); }
      next(new NotFoundError('User with this id not found'));
      return null;
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Incorrect data passed during user updating'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getUserInfo,
  createUser,
  login,
  updateUser,
};
