// Footer.test.js

import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/Footer';

import '@testing-library/jest-dom'

describe('Footer component', () => {
  test('renders footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Made with love/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 - Made with love ❤︎ - All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });
});
