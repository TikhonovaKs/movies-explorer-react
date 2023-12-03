import React from 'react';
import usePopupClose from '../../utils/hooks/usePopupClose';
import './InfoTooltip.css';


function InfoTooltip({ isOpen, onClose, updatedUser }) {
  const popupVisibleClass = isOpen ? 'popup_is-opened' : '';
  usePopupClose(isOpen, onClose);

  let tooltipControl;
  if (updatedUser) {
    tooltipControl = (
      <>
        <h3 className="popup__tooltip-title">You updated your data successfully!</h3>
      </>
    );
  } else {
    tooltipControl = (
      <>
        <h3 className="popup__tooltip-title">Something went wrong! Try again.</h3>
      </>
    );
  }

  return (
    <div className={`popup popup_type_tooltip popup_overley_dark ${popupVisibleClass}`}>
      <div className="popup__container popup__container_type_tooltip">
        <button
          className="popup__button-close"
          aria-label="Closing the editing window"
          type="button"
          onClick={onClose}
        ></button>
        {tooltipControl}
      </div>
    </div>
  );
}

export default InfoTooltip;
