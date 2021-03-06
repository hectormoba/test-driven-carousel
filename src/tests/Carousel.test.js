/** @jest-environment jsdom */
import React from 'react';
import Carousel from '../Carousel';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const slides = [
  {
    imgUrl: 'https://example.com/slide1.png',
    description: 'Slide 1',
    attribution: 'Uno Pizzeria',
  },
  {
    imgUrl: 'https://example.com/slide2.png',
    description: 'Slide 2',
    attribution: 'Dos Equis',
  },
  {
    imgUrl: 'https://example.com/slide3.png',
    description: 'Slide 3',
    attribution: 'Three Amigos',
  },
];

describe('Carousel', () => {
  let component;
  let user;

  beforeEach(() => {
    component = render(<Carousel slides={slides} autoAdvanceDelay={1000} />);
  });

  it('renders a main tag', () => {
    expect(component.getByRole('main')).toBeInTheDocument();
  });

  it('has show the first photo when render it', () => {
    expect(component.getByText(slides[0].description)).toBeInTheDocument();
  });

  it('renders a button for passing to next photo', async () => {
    user = userEvent.setup();
    await user.click(component.getByText('Next'));
    expect(component.getByText(slides[1].description)).toBeInTheDocument();
  });

  it('renders a button for passing to previous photo', () => {
    expect(component.getByText('Prev')).toBeInTheDocument();
  });

  it('change to a different slide 2 seconds after rendering', async () => {
    await waitFor(
      () => {
        expect(component.getByText(slides[1].description)).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});

describe('when the component is loaded at first time', () => {
  let user;
  let component;

  beforeEach(() => {
    component = render(<Carousel slides={slides} />);
  });
  it('clicking `prev` turn to the last photo', async () => {
    user = userEvent.setup();
    await user.click(component.getByText('Prev'));
    expect(component.getByText(slides[2].description)).toBeInTheDocument();
  });
});
