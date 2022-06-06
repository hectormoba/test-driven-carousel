/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CarouselSlide } from '../CarouselSlide';

describe('<CarouselSlide />', () => {
  let component;
  let componentProps = {
    img: 'https://example.com/image.png',
    description: 'A nice photo',
    atribution: 'Photo by Pepe',
  };

  beforeEach(() => {
    component = render(
      <CarouselSlide
        imgUrl={componentProps.img}
        description={componentProps.description}
        attribution={componentProps.atribution}
      />
    );
  });

  it('renders a <figure>', () => {
    expect(component.getByRole('figure')).toBeInTheDocument();
  });

  it('renders its children', () => {
    expect(component.getByRole('img')).toBeInTheDocument();
    expect(component.getByText('A nice photo')).toBeInTheDocument();
  });
});
