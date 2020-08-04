import React from 'react';

import HomeworkList from '../HomeworkList/HomeworkList';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';
import './Homework.css'

export default class Home extends React.Component {
  static contextType = ApiContext;

   //filter shows by their not yet watching state
  //only show shows that have that state for this view
  render() {
    var Now = Date.now();
   
    return (
      <span className='HomeWorkPage'>
       
       <HeaderNav></HeaderNav>
       <section className= "Late">
         <div>
      {"Late"}
      </div>
      <HomeworkList homeworkList={this.context.homeworkList.filter(homework =>new Date(homework.duedate) < Now)} ></HomeworkList>
      </section>
      <section className= "Upcoming">
        <div>
       {"Upcoming"}
       </div>
       <HomeworkList homeworkList={this.context.homeworkList.filter(homework => new Date(homework.duedate) > Now)} ></HomeworkList>
      </section>
      </span>
    )
  }
}