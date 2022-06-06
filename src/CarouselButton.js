import React from 'react';

export const CarouselButton = ({ children, name, handleClick }) => (
  <button onClick={handleClick} name={name}>
    {children}
  </button>
);
