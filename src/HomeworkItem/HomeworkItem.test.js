import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomeworkItem from './HomeworkItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <HomeworkItem />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})
