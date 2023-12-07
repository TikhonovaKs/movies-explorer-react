import React from 'react';
import { useNavigate } from 'react-router-dom';

export function UnprotectedRoute({ isLoggedIn, element }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isLoggedIn) navigate(-1);
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? null : element;
}
