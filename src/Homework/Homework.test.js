import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Homework from './Homework';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Homework />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})