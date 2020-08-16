import React from 'react';
import './HomeworkItem.css';
import ApiContext from '../ApiContext/ApiContext';

export default function HomeworkItem(props) {
  const context = React.useContext(ApiContext)
  return (
    <div className='HomeworkItem__row'>
      {<h4 className="homeworkDescription"> {props.homeworkdescription}</h4>}
      {<div className="schoolClass"><span id="item-details-label"> Class: </span> <span id="item-content">{props.schoolclass}</span></div>}
      {<div className="dueDate"><span id="item-details-label"> Due Date: </span><span id="duedatetext">{context.formatDate(props.duedate)}</span></div>}
      {<div className="dueTime"><span id="item-details-label"> Due time: </span> <span id="item-content">{props.duetime}</span></div>}
    </div>
  )
}