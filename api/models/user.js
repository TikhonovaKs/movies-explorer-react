const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'The "email" field is required'],
    unique: true,
    validate: {
      validator: (email) => isEmail(email),
      message: 'Email format is not correct',
    },
  },
  password: {
    type: String,
    required: [true, 'The "password" field is required'],
    select: false, // Исключаем поле "password" из результатов запросов
  },
  name: {
    type: String,
    // default: 'Жак-Ив Кусто',
    minlength: 2,
    maxlength: 30,
  },
});

// исключаем видимость пароля для пользователя (применим метод toJSON в контроллере
// users.js для функции login):
userSchema.methods.toJSON = function toJSON() {
  const user = this.toObject();
  delete user.password;

  return user;
};

module.exports = mongoose.model('user', userSchema);
