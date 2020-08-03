import React from 'react';
import './SchoolClassItem.css';


export default function SchoolClassItem(props) {
  let schoolItem = props
  console.log("props " + schoolItem.classname);
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
      {<h3 className="courseName"> {props.classname}</h3>}
      {days}

      {<h3> {props.starttime}</h3>}  {<h3> {props.endtime}</h3>}

    </div>



  )
}

