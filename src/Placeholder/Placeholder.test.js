import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Placeholder from './Placeholder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Placeholder />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})
