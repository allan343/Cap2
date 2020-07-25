import React from 'react';



export default function SchoolClassItem(props) {
  let schoolItem = props
  console.log("props " + schoolItem.classname);
  let Sun = schoolItem.dayOfWeek.sun ? 'Sun' : '';
  let Mon = schoolItem.dayOfWeek.mon ? 'Mon' : '';
  let Tue = schoolItem.dayOfWeek.tue ? 'Tue' : '';
  let Wed = schoolItem.dayOfWeek.wed ? 'Wed' : '';
  let Thurs = schoolItem.dayOfWeek.thurs ? 'Thurs' : '';
  let Fri = schoolItem.dayOfWeek.fri ? 'Fri' : '';
  let Sat = schoolItem.dayOfWeek.sat ? 'Sat' : '';
  let days = `${Sun} ${Mon} ${Tue} ${Wed} ${Thurs} ${Fri} ${Sat}`;

  return (
    <div className='SchoolClassItem__row'>
      {<h3> {props.classname}</h3>}
      {days}

      {<h3> {props.starttime}</h3>}  {<h3> {props.endtime}</h3>}

    </div>



  )
}

