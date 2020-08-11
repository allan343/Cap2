
import React from 'react';
import SchoolClassList from '../SchoolClassList/SchoolClassList';
import HomeworkList from '../HomeworkList/HomeworkList';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';
import './Calender.css';

export default class Calender extends React.Component {

  static contextType = ApiContext;

  constructor(props) {

    super(props);
    this.state = {
      day: ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"],
      dayOfWeek: '',
      date: ''
    };

  }

  updateDayOfWeek(date) {
   
    let selecteddate = date;
    this.setState({ date: selecteddate });
    var selectedDate = new Date(date);
    var dayOfWeekIndex = selectedDate.getDay();
    this.setState({ dayOfWeek: this.state.day[dayOfWeekIndex] });
  }

  render() {
    let message = "No classes for this day.";
    let homeworkMessage = "No homework due on this day."
    
    return (
      <span className='NoteListMain__button-container'>

        <HeaderNav></HeaderNav>
        <div className="calenderAndClasses">
          <div className="calender">
            <label className="calenderLabel" htmlFor="startDate">Select a day</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateDayOfWeek(e.target.value)} ></input>

          </div>
          <div className="columns" >
            <SchoolClassList message={message} schoolClasses={this.context.schoolClasses.filter(schoolClass => schoolClass[this.state.dayOfWeek] == true && new Date(this.context.formatDate(schoolClass.startdate)) <= new Date(this.context.formatDate(this.state.date)) && new Date(this.context.formatDate(schoolClass.finishdate)) >= new Date(this.context.formatDate(this.state.date)))} ></SchoolClassList>
            <HomeworkList message={homeworkMessage} heading="Homework" homeworkList={this.context.homeworkList.filter(homework => this.context.formatDate(homework.duedate) == this.state.date)} ></HomeworkList>
          </div>
        </div>
      </span>
    )
  }
}