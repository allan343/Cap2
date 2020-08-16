import React from 'react';
import './SchoolClassItem.css';

export default function SchoolClassItem(props) {
  let schoolItem = props
  let Sun = schoolItem.sun ? 'Sun' : '';
  let Mon = schoolItem.mon ? 'Mon' : '';
  let Tue = schoolItem.tue ? 'Tue' : '';
  let Wed = schoolItem.wed ? 'Wed' : '';
  let Thurs = schoolItem.thurs ? 'Thurs' : '';
  let Fri = schoolItem.fri ? 'Fri' : '';
  let Sat = schoolItem.sat ? 'Sat' : '';
  let days = `${Sun} ${Mon} ${Tue} ${Wed} ${Thurs} ${Fri} ${Sat}`;

  return (
    <div className='SchoolClassItem__row'>
      {<div className="courseName"> {props.classname}</div>}
      {<div className="days"> <span id="item-content">{days}</span></div>}
      {<div className="startEnd"> <span id="item-content">{props.starttime} - {props.endtime}</span></div>}
    </div>
  )
}

