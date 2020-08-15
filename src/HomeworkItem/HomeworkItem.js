import React from 'react';
import './HomeworkItem.css';
import ApiContext from '../ApiContext/ApiContext';

export default function HomeworkItem(props) {
  const context = React.useContext(ApiContext)
  return (
    <div className='HomeworkItem__row'>
      {<h4 className="homeworkDescription"> {props.homeworkdescription}</h4>}
      {<div className="schoolClass"><span id="item-details-label"> Class: </span>{props.schoolclass}</div>}
      {<div className="dueDate"><span id="item-details-label"> Due Date: </span>{context.formatDate(props.duedate)}</div>}
      {<div className="dueTime"><span id="item-details-label"> Due time: </span> {props.duetime}</div>}
    </div>
  )
}