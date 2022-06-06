import React from 'react';
import { createRoot } from 'react-dom/client';
import Carousel from '../src/Carousel';
import slides from './slides';

const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Carousel slides={slides} />);
