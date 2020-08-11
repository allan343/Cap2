import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Calender from './Calender';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <Calender/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})