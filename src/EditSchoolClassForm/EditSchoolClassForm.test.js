import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditSchoolClassForm from './EditSchoolClassForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
     <EditSchoolClassForm/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div);
})
