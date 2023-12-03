import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ handleSignout, handleUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <h2 className="profile__title">Hi, {currentUser.name}!</h2>
      <div className="profile__info">
        <div className="profile__field">
          <h3 className="profile__field-name">name</h3>
          <h3 className="profile__name">{currentUser.name}</h3>
        </div>
        <div className="profile__field">
          <h3 className="profile__field-name">email</h3>
          <h3 className="profile__email">{currentUser.email}</h3>
        </div>
      </div>
      <div className="profile__buttons">
        <Link to="/edit-profile">
          <span className="profile__button-edit" currentUser={currentUser}>
            Редактировать
          </span>
        </Link>
        <Link to="/">
          <span className="profile__button-signout" onClick={handleSignout}>
            Выйти из аккаунта
          </span>
        </Link>
      </div>
    </div>
  );
}
export default Profile;
