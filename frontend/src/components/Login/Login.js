import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Authentication/Authentication.css';
import Logo from '../Logo/Logo.js';

function Login({ handleLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    handleLogin(data, setError);

    reset();
  };

  return (
    <div className="authentication">
      <Logo position="center" />
      <h2 className="authentication__title">Рады видеть!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="authentication__form" name="register" novalidate method="POST">
        <label className="authentication__label" for="input-name">
          E-mail
        </label>
        <div class="authentication__input-container">
          <input
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required!',
              },
              minLength: {
                value: 3,
                message: 'Minimum length is 3',
              },
              maxLength: {
                value: 40,
                message: 'Maximum length is 40',
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Please enter a valid email',
              },
            })}
            type="text"
            className="authentication__input"
          />
          {errors?.email && <div className="authentication__error">{errors.email.message}</div>}
        </div>
        <label className="authentication__label" for="input-email">
          Password
        </label>
        <div class="authentication__input-container">
          <input
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required!',
              },
              minLength: {
                value: 2,
                message: 'Minimum length is 2',
              },
              maxLength: {
                value: 200,
                message: 'Maximum length is 200',
              },
            })}
            type="password"
            className="authentication__input"
          />
          {errors?.password && <div className="authentication__error">{errors.password.message}</div>}
        </div>
        <div className="authentication__button-container authentication__button-container_further">
          {errors?.login?.servererror && <div className="authentication__error">{errors.login.servererror.message}</div>}
          <button disabled={!isValid} type="submit" className="authentication__button" aria-label="Отправить результат">
            Войти
          </button>
        </div>
      </form>
      <div className="authentication__links">
        <p className="authentication__question">
          Ещё не зарегистрированы?
        </p>
        <Link to="/signup">
          <span className="authentication__link">Регистрация</span>
        </Link>
      </div>
    </div>
  );
}
export default Login;
