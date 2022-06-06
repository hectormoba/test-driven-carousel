import React, { useState } from 'react';
import { CarouselButton } from './CarouselButton';
import { CarouselSlide } from './CarouselSlide';

export default function Carousel({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (event) => {
    let name = event.target.name;
    console.log(name);
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
      <CarouselSlide {...slides[slideIndex]} />
      <CarouselButton name="prev" handleClick={handleClick}>
        Prev
      </CarouselButton>
      <CarouselButton name="next" handleClick={handleClick}>
        Next
      </CarouselButton>
    </main>
  );
}
