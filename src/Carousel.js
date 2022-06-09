import React from 'react';
import PropTypes from 'prop-types';
import { CarouselButton } from './CarouselButton';
import { CarouselSlide } from './CarouselSlide';
import { ComponentWithIndex } from './HasIndex';

function Carousel(props) {
  const handlePrevClick = () => {
    const { slideIndexDecrement, slides } = props;
    slideIndexDecrement(slides.length);
  };

  const handleNextClick = () => {
    const { slideIndexIncrement, slides } = props;
    slideIndexIncrement(slides.length);
  };

  const {
    defaultImg,
    defaultImgHeight,
    slideIndex,
    slideIndexDecrement: _slideIndexDecrement,
    slideIndexIncrement: _slideIndexIncrement,
    slides,
  } = props;

  return (
    <main>
      <CarouselSlide
        Img={defaultImg}
        imgHeight={defaultImgHeight}
        {...slides[slideIndex]}
      />
      <CarouselButton name="prev" handleClick={handlePrevClick}>
        Prev
      </CarouselButton>
      <CarouselButton name="next" handleClick={handleNextClick}>
        Next
      </CarouselButton>
    </main>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes)),
  defaultImgHeight: CarouselSlide.propTypes.imgHeight,
  slideIndex: PropTypes.number.isRequired,
  slideIndexDecrement: PropTypes.func.isRequired,
  slideIndexIncrement: PropTypes.func.isRequired,
  defaultImg: CarouselSlide.propTypes.Img,
};

Carousel.defaultProps = {
  defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
};

export { Carousel };
export default ComponentWithIndex(Carousel, 'slideIndex');
