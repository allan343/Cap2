import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';
import SchoolClassList from '../SchoolClassList/SchoolClassList';
import HomeworkList from '../HomeworkList/HomeworkList'
import '../main.css';


export default class Home extends React.Component {
 static contextType = ApiContext;

   //filter shows by their not yet watching state
  //only show shows that have that state for this view
  
  render() {
    console.log(this.context);
    let message ="This is where all your classes will be displayed.  Click on Add Class to add a class";
    let homeworkMessage="This is where your assignments, tests and projects will be displayed. First add a school class, then add a homework by clicking on Add Homework."
    let emptyHomework="There is no homework for this class."
    return (
      
      <div className='HomeworkMain__button-container'>
       
       <HeaderNav></HeaderNav>
      
   <div className="columns">
    <SchoolClassList message ={message} schoolClasses={this.context.schoolClasses} ></SchoolClassList>

{(this.context.classClicked)? <HomeworkList message ={emptyHomework} heading = "Homework" homeworkList={this.context.homeworkList.filter(homework=>homework.classid== this.context.getClassId())} ></HomeworkList> :
<HomeworkList message = {homeworkMessage} heading = "Homework" homeworkList={this.context.homeworkList} ></HomeworkList>
   
    } 
    </div>
    </div>
    )
  }
}