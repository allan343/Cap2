
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
      day: ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"],
      dayOfWeek: '',
      date:''
    };
   
  }

  updateDayOfWeek(date) {
    console.log(date);
    this.setState({date: date});
    var selectedDate = new Date(date);
    var dayOfWeekIndex = selectedDate.getDay();
    console.log(dayOfWeekIndex);
    console.log(this.state.day[dayOfWeekIndex] );
    this.setState({ dayOfWeek: this.state.day[dayOfWeekIndex] });
  }

  render() {

    console.log(this.state.date);
    return (
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
       <div class="calenderAndClases">
       <label for="startDate">Select a day</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateDayOfWeek(e.target.value)} ></input>
            </div>
        <SchoolClassList schoolClasses={ this.context.schoolClasses.filter(schoolClass => schoolClass.dayOfWeek[this.state.dayOfWeek]==true && new Date(schoolClass.startdate)<= new Date(this.state.date) && new Date(schoolClass.finishdate)>= new Date(this.state.date))} ></SchoolClassList>
       
       Homework due that day:
       <HomeworkList homeworkList={   this.context.homeworkList.filter(homework => homework.duedate==this.state.date)} ></HomeworkList>
      </span>
    )
  }
}