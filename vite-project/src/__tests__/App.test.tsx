import React from 'react';
import {describe, expect, test, it, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
//import {create} from 'react-test-renderer';
import App from '../App.tsx';
import SimpleBox from '../App.tsx';
import handleChangeName from '../App.tsx';
import handleChangePasswd from '../App.tsx';
import handleSubmit from '../App.tsx';


test('calls change handler for an input name', () => {
  const handleChangeName = vi.fn()
  const {container} = render(<input onChange={handleChangeName} />)
  const input = container.firstChild
  fireEvent.change(input, {target: {value: 'name'}})
  expect(handleChangeName).toHaveBeenCalledTimes(1)
});

test('calls handleSubmit', () => {
  const beverage = {name: 'name'}
  const handleSubmit = vi.fn(beverage => beverage.name);
  render(<SimpleBox />)
  fireEvent.change(screen.getByTestId('usrname-input'))
  expect(handleSubmit).toHaveBeenCalledTimes(0)
});

it("captures click from App", async() => {
  function handleSubmit(evt) {
    expect(evt.target.value).toEqual("btnclick");
  }
  const { getByTestId } = render(
    <SimpleBox onChange={handleSubmit} data-testid="Button" />
    );
  const node = getByTestId("Button");
  fireEvent.click(node, { target: { value: "btnclick" } });
});


//(nothing has changed in test results)
test('handleSubmit returns name + password', () => {
  const littleVar = {name: "ok", passwd: "123"};
  const handleSubmit = vi.fn(littleVar => littleVar.name, littleVar.passwd);
  handleSubmit(littleVar);
  expect(handleSubmit).toHaveReturnedWith("ok", "123");
});



test('handlechangeName returns string', () => {
  const beverage3 = {name: 'presentstring'};
  const handlechangeName = vi.fn(beverage3 => beverage3.name);
  handlechangeName(beverage3);
  expect(handlechangeName).toHaveReturnedWith('presentstring');
  expect(handlechangeName).toHaveBeenCalledTimes(1)
});

test('calls change handler for an input password', () => {
  const handleChangePasswd = vi.fn()
  const {container} = render(<input onChange={handleChangePasswd} />)
  const input = container.firstChild
  fireEvent.change(input, {target: {value: 'pass'}})
  expect(handleChangePasswd).toHaveBeenCalledTimes(1) //or toHaveReturned();
});

test('calls onClick prop when clicked enter', () => {
  const handleSubmit = vi.fn()
  render(<SimpleBox />)
  fireEvent.click(screen.getByTestId('Button'))
  expect(handleSubmit).toHaveBeenCalledTimes(0)
});

test('handleSubmit returns Un truc', () => {
  const beverage = {name: 'Un truc'};
  const handleSubmit = vi.fn(beverage => beverage.name);
  handleSubmit(beverage);
  expect(handleSubmit).toHaveReturnedWith('Un truc');
});


test('calls onClick prop when clicked enter', () => {
  const beverage = {name: 'name'}
  const handleSubmit = vi.fn(beverage => beverage.name)
  render(<App />)
  fireEvent.change(screen.getByTestId('usrname-input'))
  expect(handleSubmit).toHaveBeenCalledTimes(0)
});

test('render h2 by role', () => {
  render(<App />);
  const myHeader = screen.getAllByRole("heading", 1);
  expect(myHeader.length).toBe(1);
});

//Function handleSubmit
test('handleSubmit function', () => {
    expect(handleSubmit).toBeDefined();
});

test('handleSubmit return', () => {
  const handleSubmit = vi.fn(() => true);
  handleSubmit();
  expect(handleSubmit).toHaveReturned();
});

test('handleSubmit returns Un truc', () => {
  const beverage = {name: 'Un truc'};
  const handleSubmit = vi.fn(beverage => beverage.name);
  handleSubmit(beverage);
  expect(handleSubmit).toHaveReturnedWith('Un truc');
});

//Function handleChangePasswd
test('handleChangePasswd function', () => {
    const handleChangePasswd = vi.fn();
    expect(handleChangePasswd).toBeDefined();
});

test('handleChangePasswd return', () => {
  const handleChangePasswd = vi.fn(() => true);
  handleChangePasswd();
  expect(handleChangePasswd).toHaveReturned();
});

test('handleChangePasswd returns Un truc', () => {
  const beverage = {passwd: 'Un truc'};
  const handleChangePasswd = vi.fn(beverage => beverage.passwd);
  handleChangePasswd(beverage);
  expect(handleChangePasswd).toHaveReturnedWith('Un truc');
});

test('multiple useState', () => {
  const valuemyNum = {name: 'ok'};
  const myMock1 = vi.fn();
  const name = new myMock1()
  console.log(myMock1.mock.instances);

  const myMock2 = vi.fn();
  const names = [name]
  const bound = myMock2.bind(names);
  bound();
  console.log(myMock2.mock.contexts);
});

test('multiple useState', () => {
  const valuemyNum = {passwd: '123'};
  const myMock1 = vi.fn();
  const passwd = new myMock1()
  console.log(myMock1.mock.instances);

  const myMock2 = vi.fn();
  const passwds = [passwd]
  const bound = myMock2.bind(passwds);
  bound();
  console.log(myMock2.mock.contexts);
});

test('handleSubmit returns name', () => {
  const littleVar = {name: "tester"};
  const handleSubmit = vi.fn(littleVar => littleVar.name);
  handleSubmit(littleVar);
  expect(handleSubmit).toHaveReturnedWith("tester");
});

/*
it("captures value from SimpleBox", async() => {
  function handleChangeName(evt) {
    expect(evt.target.value).toEqual("valuechange");
  }
  const { getByTestId } = render(
    <SimpleBox name={name} handleChangeName={handleChangeName} data-testid="inputRet" />
  );
  const node = getByTestId("inputRet");
  fireEvent.change(node, { target: { value: "valuechange" } });
});

test('test handleChangeName', () => {
  const todoinit = {name: 'ok' };
  const valueOfName = todoinit
  const mockCallback = vi.fn(valueOfName => valueOfName);
  const {queryAllByTestId} = render(
    <SimpleBox data-testid='inputRet'>
      {todoinit}
    </SimpleBox>
  );
  expect(queryAllByTestId("inputRet")).toHaveLength(0);
  [{ name }].forEach((myNum) => {
    expect(queryAllByTestId("inputRet").textContent).toEqual(undefined)
  });
});

describe('My first snapshot test',()=> {
    test('testing app button', () => {
      let tree = create(<SimpleBox />)
      expect(tree.toJSON()).toMatchSnapshot();
    })
})*/