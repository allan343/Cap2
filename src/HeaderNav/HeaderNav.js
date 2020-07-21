import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//import ApiContext from '../ApiContext/ApiContext';

//import './FooterListNav.css';

export default class HeaderNav extends React.Component {
  //static contextType = ApiContext;

  render() {
    //const { shows = [] } = this.context;
    return (
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
    )
  }
}
