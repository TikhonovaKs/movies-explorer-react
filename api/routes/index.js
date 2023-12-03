const router = require('express').Router();
const NotFoundError = require('../errors/not-found-err');
const auth = require('../middlewares/auth');

// подключаем модули userRoutes и cardRoutes из файлов './users' и '/cards'
const userRoutes = require('./user');
const movieRoutes = require('./movie');
// импорт роутов signin и signup
const singInRoutes = require('./signin');
const singUpRoutes = require('./signup');

router.use('/', singInRoutes);
router.use('/', singUpRoutes);
// вызываем метод .use() роутера для определения маршрута /user и /movie.
// userRoutes и movieRoutes - обработчики для маршрута
// защищаем авторизацией все роуты кроме singIn и singUp
router.use(auth);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

router.use((req, res, next) => next(new NotFoundError('Route not found')));

module.exports = router;
