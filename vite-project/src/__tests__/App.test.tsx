import {describe, expect, test, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from '../App.tsx';

test('render h2 by role', () => {
  render(<App />);
  const myHeader = screen.getAllByRole("heading", 1);
  expect(myHeader.length).toBe(1);
})
