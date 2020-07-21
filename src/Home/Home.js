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
    return (
      
      <span className='NoteListMain__button-container'>
       
       <HeaderNav></HeaderNav>
      
       
    <SchoolClassList schoolClasses={this.context.schoolClasses} ></SchoolClassList>
    {/*
    <NavLink className="addHomeWorkPath"
            to={`/add-homework`}
          >
          Homework  +
    </NavLink>*/}

{(this.context.classClicked)? <HomeworkList homeworkList={this.context.homeworkList.filter(homework=>homework.classId== this.context.getClassId())} ></HomeworkList> :
<HomeworkList homeworkList={this.context.homeworkList} ></HomeworkList>
   
    } </span>
    )
  }
}