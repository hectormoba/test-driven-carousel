import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = ({ children, name, handleClick }) => (
  <button onClick={handleClick} name={name}>
    {children}
  </button>
);

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export { CarouselButton };
