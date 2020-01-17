import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
});

test('um', () => {
  const test = render(<App />)
  test.getAllByText(/strike/i)
  test.getAllByText(/ball/i)
  test.getByTestId(/striketest/i)
  test.getByTestId(/balltest/i)
})

