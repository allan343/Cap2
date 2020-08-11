import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HeaderNav from './HeaderNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <HeaderNav/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})