import React from 'react';



export default function HomeworkItem(props) {
  let homeworkItem= props
  console.log("props "+ homeworkItem.description);

  return (
        <div className='HomeworkItem__row'>
    { <h3> {props.description}</h3>}
    { <h3> Class{props.schoolClass}</h3>}
    { <h3> Due Date{props.dueDate}</h3>}
    { <h3> Due time {props.dueTime}</h3>}
     
      </div>
    
   
    
  )
}