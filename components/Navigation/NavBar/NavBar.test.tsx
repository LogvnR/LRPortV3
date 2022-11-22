import { render, screen } from '@testing-library/react';

import NavBar from './NavBar';

test('component renders correctly', () => {
  expect(() => {
    render(<NavBar />);
  }).not.toThrow();
});

test('renders initials in top left', () => {
  render(<NavBar />);
  const lrInitials = screen.getByRole('logo').innerHTML;
  expect(lrInitials).toBe('lr');
});

test('renders dropdown elements', () => {
  render(<NavBar />);
  const dropdownEl = screen.getAllByRole('dropdown');
  expect(dropdownEl).toBeTruthy();
});
