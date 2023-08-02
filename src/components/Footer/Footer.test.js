import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  test('renders Footer component', () => {
    render(<Footer />);

    expect(screen.getByText('Copyright')).toBeInTheDocument();
    
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(currentYear)).toBeInTheDocument();
  });

  test('renders with correct class', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass('footer');
  });
});
