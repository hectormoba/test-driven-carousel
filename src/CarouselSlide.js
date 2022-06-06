import React from 'react';

export const CarouselSlide = ({ imgUrl, description, attribution }) => (
  <figure>
    <img src={imgUrl} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);
