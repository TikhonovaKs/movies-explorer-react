import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="notfound">
      <h2 className="notfound__title">404</h2>
      <h3 className="notfound__subtitle">Page not found</h3>
      <button 
        className="notfound__back"
        aria-label="Turn Back" 
        type="button"
        onClick={handleGoBack}
        >
        Back
      </button>
    </div>
  );
}
export default NotFoundPage;
