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
    /*
    var date = new Date("2020-07-09");
    console.log(date);
    console.log(Now);
    if(date< Now)
    {console.log("less than")}*/
    return (
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
       <section class= "Late">
      {"Late"}
      <HomeworkList homeworkList={this.context.homeworkList.filter(homework =>new Date(homework.dueDate) < Now)} ></HomeworkList>
      </section>
      <section class= "Upcoming">
       {"Upcoming"}
       <HomeworkList homeworkList={this.context.homeworkList.filter(homework => new Date(homework.dueDate) > Now)} ></HomeworkList>
      </section>
      </span>
    )
  }
}