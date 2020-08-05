
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

  formatDate(date)
  {
    let DayString='';
    let DateString='';
    if(new Date(date).getUTCDate() < 10)
    {
      DayString=`0${new Date(date).getUTCDate()}`
      console.log(DayString);
    }
    else {
     DayString = `${new Date(date).getUTCDate()}`
      console.log(DayString);
    }
    if((new Date(date).getUTCMonth())< 9 )
    { 
    DateString= `${new Date(date).getFullYear()}-0${new Date(date).getUTCMonth()+1}-${DayString}`
  }
    else
    {
      DateString=`${new Date(date).getFullYear()}-${new Date(date).getUTCMonth()+1}-${DayString}`;
  }
    return (DateString);
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
        <SchoolClassList schoolClasses={ this.context.schoolClasses.filter(schoolClass => schoolClass[this.state.dayOfWeek]==true && new Date(this.formatDate(schoolClass.startdate))<= new Date(this.formatDate(this.state.date)) && new Date(this.formatDate(schoolClass.finishdate))>= new Date(this.formatDate(this.state.date)))} ></SchoolClassList>
       <HomeworkList heading = "Homework" homeworkList={   this.context.homeworkList.filter(homework => this.formatDate(homework.duedate)==this.state.date)} ></HomeworkList>
      </span>
    )
  }
}