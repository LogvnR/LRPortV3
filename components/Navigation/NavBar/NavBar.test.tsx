import { getByTestId, render, screen } from '@testing-library/react';

import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<NavBar />);
    }).not.toThrow();
  });

  it('renders initals', () => {
    render(<NavBar />);
    const lrInitials = screen.getByTestId('initials').innerHTML;
    expect(lrInitials).toBe('lr');
  });
});
