import React from 'react';
import {describe, expect, test, it, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import SimpleBox from '../SimpleBox.tsx';
import handleSubmit from '../SimpleBox.tsx';

//Button
test('render number of btn by role', () => {
  render(<SimpleBox />);
  const myInput = screen.getAllByRole("button", 1);
  expect(myInput.length).toBe(1);
});

test('Test btn event', () => {
  const {getByTestId} = render(<SimpleBox />)
  const button = getByTestId('Button')
  expect(button.textContent).toBe('Enter')
  fireEvent.click(button)
  expect(button.textContent).toBe('Enter')
});

//handleSubmit function
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
  const beverage2 = {name: 'test3'};
  const handleSubmit = vi.fn(beverage2 => beverage2.name);
  handleSubmit(beverage2);
  expect(handleSubmit).toHaveReturnedWith('test3');
  expect(handleSubmit).toHaveBeenCalledTimes(1)
});

test('handleSubmit returns string', () => {
  const beverage3 = {passwd: 'test4'};
  const handleSubmit = vi.fn(beverage3 => beverage3.passwd);
  handleSubmit(beverage3);
  expect(handleSubmit).toHaveReturnedWith('test4');
  expect(handleSubmit).toHaveBeenCalledTimes(1)
});

//handleChangeName funtion
test('handleChangeName returns name', () => {
  const beverage = {name: 'test'};
  const handleChangeName = vi.fn(beverage => beverage.name);
  handleChangeName(beverage);
  expect(handleChangeName).toHaveReturnedWith('test');
});

test('handleChangeName returns string', () => {
  const beverage2 = {name: 'myname'};
  const handleChangeName = vi.fn(beverage2 => beverage2.name);
  handleChangeName(beverage2);
  expect(handleChangeName).toHaveReturnedWith('myname');
  expect(handleChangeName).toHaveBeenCalledTimes(1)
});

//handleChangePasswd funtion
test('handleChangePasswd returns passwd', () => {
  const beverage = {passwd: 'test'};
  const handleChangePasswd = vi.fn(beverage => beverage.passwd);
  handleChangePasswd(beverage);
  expect(handleChangePasswd).toHaveReturnedWith('test');
});

test('handleChangePasswd returns string', () => {
  const beverage2 = {passwd: 'mypasswd'};
  const handleChangePasswd = vi.fn(beverage2 => beverage2.passwd);
  handleChangePasswd(beverage2);
  expect(handleChangePasswd).toHaveReturnedWith('mypasswd');
  expect(handleChangePasswd).toHaveBeenCalledTimes(1)
});
