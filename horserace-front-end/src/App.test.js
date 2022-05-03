import { render,fireEvent, screen, queryByAttribute  } from '@testing-library/react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import App from './App';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import AddHorseRaceForm from './Pages/AddHorseRaceForm';
import AddHorse from './component/AddHorse';

test('HomepageTest', () => {

  render(<App><BrowserRouter><Switch><HomePage /></Switch></BrowserRouter></App>);
  const tervitus = screen.queryByText(/HorseRacing/i);

  expect(tervitus).toBeInTheDocument();
});
test('HomepageTest', () => {

  render(<App><BrowserRouter><Switch><HomePage /></Switch></BrowserRouter></App>);
  const tervitus = screen.queryByText(/HorseRacing/i);

  expect(tervitus).toBeInTheDocument();
});
test('LoginPageTest', () => {

  render(<App><BrowserRouter><Switch><LogIn /></Switch></BrowserRouter></App>);
  
  const table = screen.queryByText('Login');

  expect(table).toBeInTheDocument();
});
test('RegisterTest', () => {

  render(<App><BrowserRouter><Switch><Register /></Switch></BrowserRouter></App>);
  
  const table = screen.queryByText('Register');

  expect(table).toBeInTheDocument();
});

test('AddHorseRaceFormTest', () => {
  const component = <App><BrowserRouter><Switch><AddHorseRaceForm shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});
test('AddHorse', () => {
  const component = <App><BrowserRouter><Switch><AddHorse shouldRender /></Switch></BrowserRouter></App>
  expect(component).toBeDefined()
});