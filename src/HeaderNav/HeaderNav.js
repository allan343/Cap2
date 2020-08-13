import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNav.css';

export default class HeaderNav extends React.Component {

  render() {
    return (
      <div>
        <div className='title'>
          HomeworkApp
      </div>
        <div className='HeaderListNav'>
          <NavLink
            className='HomeLink'
            to={`/`}
            style={{ textDecoration: 'none' }}
          >
            <span className='HomeIcon'>
              Home
                </span>
          </NavLink>
          <NavLink
            className='CalenderLink'
            to={`/calender`}
            style={{ textDecoration: 'none' }}
          >
            <span className='Caldender Icon'>
              Calender
                </span>

          </NavLink>
          <NavLink
            className='HomeworkLink'
            to={`/homework`}
            style={{ textDecoration: 'none' }}
          >
            <span className='HomeworkIcon Icon'>

              Homework
                </span>
          </NavLink>

        </div>
      </div>
    )
  }
}
