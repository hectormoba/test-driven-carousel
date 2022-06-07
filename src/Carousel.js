import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarouselButton } from './CarouselButton';
import { CarouselSlide } from './CarouselSlide';

function Carousel({ slides, defaultImgHeight }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (event) => {
    let name = event.target.name;
    if (name === 'prev') {
      if (slideIndex === 0) {
        setSlideIndex(slides.length - 1);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    }
    if (name === 'next') {
      if (slideIndex === slides.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }
  };

  return (
    <main>
      <CarouselSlide imgHeight={defaultImgHeight} {...slides[slideIndex]} />
      <CarouselButton name="prev" handleClick={handleClick}>
        Prev
      </CarouselButton>
      <CarouselButton name="next" handleClick={handleClick}>
        Next
      </CarouselButton>
    </main>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes)),
  defaultImgHeight: CarouselSlide.propTypes.imgHeight,
};

Carousel.defaultProps = {
  defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
};

export default Carousel;
