import {describe, expect, test, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import SimpleBox from '../SimpleBox.tsx';
import handleSubmit from '../SimpleBox.tsx';


test('render h2 by role', () => {
  render(<SimpleBox />);
  const myInput = screen.getAllByRole("button", 1);
  expect(myInput.length).toBe(1);
})

//Function handleSubmit
test('handleSubmit function', () => {
    expect(handleSubmit).toBeDefined();
});

test('handleSubmit return', () => {
  const handleSubmit = vi.fn(() => true);
  handleSubmit();
  expect(handleSubmit).toHaveReturned();
});

test('handleSubmit returns name', () => {
  const beverage = {name: 'test'};
  const handleSubmit = vi.fn(beverage => beverage.name);
  handleSubmit(beverage);
  expect(handleSubmit).toHaveReturnedWith('test');
});

test('handleSubmit returns passwd', () => {
  const beverage = {passwd: 'sec_test'};
  const handleSubmit = vi.fn(beverage => beverage.passwd);
  handleSubmit(beverage);
  expect(handleSubmit).toHaveReturnedWith('sec_test');
});

test('handleSubmit returns string', () => {
  const beverage3 = {name: 'presentstring'};
  const handleSubmit = vi.fn(beverage3 => beverage3.name);
  handleSubmit(beverage3);
  expect(handleSubmit).toHaveReturnedWith('presentstring');
  expect(handleSubmit).toHaveBeenCalledTimes(1)
});

test('handleSubmit returns string', () => {
  const beverage3 = {passwd: 'presentstring'};
  const handleSubmit = vi.fn(beverage3 => beverage3.passwd);
  handleSubmit(beverage3);
  expect(handleSubmit).toHaveReturnedWith('presentstring');
  expect(handleSubmit).toHaveBeenCalledTimes(1)
});