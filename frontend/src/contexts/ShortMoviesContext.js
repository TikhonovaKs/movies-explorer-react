import React from 'react';

const ShortMoviesContext = React.createContext(localStorage.getItem('isShortMoviesActive')==="true"??false);

export default ShortMoviesContext;
