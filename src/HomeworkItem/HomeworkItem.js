import React from 'react';
import './HomeworkItem.css';
import ApiContext from '../ApiContext/ApiContext';

export default function HomeworkItem(props) {
  const context = React.useContext(ApiContext)
  let homeworkItem= props
  console.log("props "+ homeworkItem.homeworkdescription);

  return (
        <div className='HomeworkItem__row'>
    { <div className="homeworkDescription"> {props.homeworkdescription}</div>}
    { <div className="schoolClass"> Class {props.schoolclass}</div>}
    { <div className="dueDate"> Due Date {context.formatDate(props.duedate)}</div>}
    { <div className="dueTime"> Due time {props.duetime}</div>}
     
      </div>
    
   
    
  )
}