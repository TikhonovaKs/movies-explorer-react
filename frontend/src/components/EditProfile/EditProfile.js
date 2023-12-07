import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import '../Authentication/Authentication.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Logo from '../Logo/Logo.js';

function EditProfile({ onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

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
    onUpdateUser(data, setError);

    reset();
  };

  return (
    <div className="authentication">
      <Logo position="center" />
      <h2 className="authentication__title">Редактирование профиля</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="authentication__form" name="register" novalidate method="POST">
        <label className="authentication__label" for="input-name">
          name
        </label>
        <div class="authentication__input-container">
          <input
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required!',
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
                value: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
                message: 'Please enter a valid name',
              },
              validate: {
                validateDuplicateValues: (_, values) => {
                  return values.name !== currentUser.name;
                },
              },
            })}
            type="text"
            className="authentication__input"
            defaultValue={currentUser.name}
          />
          {errors?.name && <div className="authentication__error">{errors.name.message}</div>}
        </div>
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
              validate: {
                validateDuplicateValues: (_, values) => {
                  return values.email !== currentUser.email;
                },
              },
            })}
            type="text"
            className="authentication__input"
            defaultValue={currentUser.email}
          />
          {errors?.email && <div className="authentication__error">{errors.email.message}</div>}
        </div>
        <div className="authentication__button-container authentication__button-container_further">
          {errors?.login?.servererror && (
            <div className="authentication__error">{errors.login.servererror.message}</div>
          )}
          <button disabled={!isValid} type="submit" className="authentication__button" aria-label="Отправить результат">
            Сохранить
          </button>
        </div>
      </form>
      <div className="authentication__links">
        <p className="authentication__question">Передумали?</p>
        <Link to="/profile">
          <span className="authentication__link">Назад в профиль</span>
        </Link>
      </div>
    </div>
  );
}
export default EditProfile;
