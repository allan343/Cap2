import React from 'react';

export default function HomeworkItem(props) {
  let homeworkItem= props
  console.log("props "+ homeworkItem.homeworkdescription);

  return (
        <div className='HomeworkItem__row'>
    { <h3> {props.homeworkdescription}</h3>}
    { <h3> Class{props.schoolclass}</h3>}
    { <h3> Due Date{props.duedate}</h3>}
    { <h3> Due time {props.duedime}</h3>}
     
      </div>
    
   
    
  )
}