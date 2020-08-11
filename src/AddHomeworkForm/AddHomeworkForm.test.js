import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddHomeworkForm from './AddHomeworkForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <AddHomeworkForm/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})
