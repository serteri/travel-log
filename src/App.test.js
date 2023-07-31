import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// JUST TRYING OUT TESTING

// TEST FOR FOOTER()
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer'; // import the Footer component from its location

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render "Copyright" text', () => {
    expect(screen.getByText('Copyright')).toBeInTheDocument();
  });

  it('should render the current year', () => {
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(currentYear)).toBeInTheDocument();
  });
});
