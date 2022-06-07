/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { CarouselButton } from '../CarouselButton';
import '@testing-library/jest-dom';

describe('CarouselButton', () => {
  let component;
  const text = 'hello';

  beforeEach(() => {
    component = render(<CarouselButton>{text}</CarouselButton>);
  });

  it('renders a <button>', () => {
    expect(component.getByRole('button')).toBeInTheDocument();
  });

  it('renders its children', () => {
    expect(component.getByText(text)).toBeInTheDocument();
  });
});
