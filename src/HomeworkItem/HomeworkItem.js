import React from 'react';
import './HomeworkItem.css';

export default function HomeworkItem(props) {
  let homeworkItem= props
  console.log("props "+ homeworkItem.homeworkdescription);

  return (
        <div className='HomeworkItem__row'>
    { <div className="homeworkDescription"> {props.homeworkdescription}</div>}
    { <div className="schoolClass"> Class {props.schoolclass}</div>}
    { <div className="dueDate"> Due Date {props.duedate}</div>}
    { <div className="dueTime"> Due time {props.duetime}</div>}
     
      </div>
    
   
    
  )
}