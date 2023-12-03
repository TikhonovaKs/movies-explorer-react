import React, { useContext } from 'react';
import './FilterCheckbox.css';
import ShortMoviesContext from '../../contexts/ShortMoviesContext';

function FilterCheckbox({ handleShortMovies }) {
  const initIsSharedMovies = useContext(ShortMoviesContext);
  const [isActive, setIsActive] = React.useState(initIsSharedMovies);

  function handleToggle() {
    localStorage.setItem('isShortMoviesActive', !isActive);
    setIsActive((prevIsActive) => !prevIsActive);
    handleShortMovies(!isActive);
  }

  return (
    <ShortMoviesContext.Provider value={isActive}>
      <div className="toggle">
        <label className="toggle__tumbler">
          <input type="checkbox" checked={isActive} className="toggle__checkbox" onClick={handleToggle} />
          <span className="toggle__slider" />
        </label>
        <p className="toggle__name">Короткометражки</p>
      </div>
    </ShortMoviesContext.Provider>
  );
}

export default FilterCheckbox;
