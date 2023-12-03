import React from 'react';
import './ButtonSave.css';

function ButtonSave({ buttonName, position }) {
  return (
    <button
      type="submit"
      className={`button-save button-save_${position}`}
      aria-label="Отправить результат"
    >
      {buttonName}
    </button >
  );
}
export default ButtonSave;
