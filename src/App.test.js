import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import 'jsdom-global/register'; // import jsdom-global/register to set up jsdom globally

import Contact from './cinema/Contact';

test('renders page component', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <Contact />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/congthang@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});
