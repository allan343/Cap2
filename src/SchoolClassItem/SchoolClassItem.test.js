import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SchoolClassItem from './SchoolClassItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <SchoolClassItem/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})
