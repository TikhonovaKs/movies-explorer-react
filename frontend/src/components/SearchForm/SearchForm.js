import React from 'react';
import { useForm } from 'react-hook-form';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({ handleSearch, handleShortMovies, useCache }) {
  const [currentKeyword, setCurrentKeyword] = React.useState(useCache?localStorage.getItem('keywordFilter'):null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onChange',
  });

  // Обработчик изменения полей формы:
  const onSubmit = ({ keyword }) => {
    if (useCache) 
     localStorage.setItem('keywordFilter', keyword);
    setCurrentKeyword(keyword); 

    handleSearch(keyword, setError);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit(onSubmit)} className="search__form">
        <input
          {...register('keyword', {
            required: {
              value: true,
              message: 'You need to enter a keyword',
            },
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
              message: 'Please enter a valid keyword',
            },
          })}
          type="text"
          className="search__input"
          placeholder="Фильм"
          defaultValue={currentKeyword}
        />

        <button className="search__button">Найти</button>
      </form>
      {errors?.keyword && <div className="search__error">{errors.keyword.message}</div>}
      <FilterCheckbox handleShortMovies={handleShortMovies} useCache={useCache} /> 
    </div>
  );
}
export default SearchForm;
