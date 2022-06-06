/** @jest-environment jsdom */
import React from 'react';
import { render } from '@testing-library/react';
import { CarouselButton } from '../CarouselButton';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('CarouselButton', () => {
  let component;
  let user;
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

  it('it is clicable', async () => {
    user = userEvent.setup();
    await user.click(component.getByRole('button'));
  });
});
