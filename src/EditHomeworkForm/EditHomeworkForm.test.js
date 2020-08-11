import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditHomeworkForm from './EditHomeworkForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <EditHomeworkForm/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})
