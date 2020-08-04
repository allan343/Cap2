
import React from 'react';
import CalenderSchoolClassList from '../CalenderSchoolClassList/CalenderSchoolClassList';
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
      day: ["mon","tue","wed","thurs","fri","sat","sun"],
      dayOfWeek: '',
      date:''
    };
   
  }

  updateDayOfWeek(date) {
    //let selecteddate= date+ "T00:00:00.000Z";
    //2020-08-07
    let selecteddate= date;
    console.log(selecteddate);
    this.setState({date: selecteddate});
    var selectedDate = new Date(date);
    var dayOfWeekIndex = selectedDate.getDay();
    console.log(dayOfWeekIndex);
    console.log(this.state.day[dayOfWeekIndex] );
    this.setState({ dayOfWeek: this.state.day[dayOfWeekIndex] });
  }

  formatHomeworkDate(date)
  {

  }

  render() {

    console.log(this.state.date);
    //console.log(new Date(this.state.date));
    return (
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
       <div className="calenderAndClasses">
         <div className="calender">
       <label className="calenderLabel" for="startDate">Select a day</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateDayOfWeek(e.target.value)} ></input>
            </div>
            <div className="HomeworkTitle">
       Homework due that day:
       </div>
        
        </div>
        <SchoolClassList schoolClasses={ this.context.schoolClasses.filter(schoolClass => schoolClass[this.state.dayOfWeek]==true && new Date(schoolClass.startdate)<= new Date(this.state.date) && new Date(schoolClass.finishdate)>= new Date(this.state.date))} ></SchoolClassList>
       <HomeworkList heading = "Homework" homeworkList={   this.context.homeworkList.filter(homework => homework.duedate==this.state.date)} ></HomeworkList>
      </span>
    )
  }
}