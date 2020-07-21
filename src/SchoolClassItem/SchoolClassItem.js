import React from 'react';



export default function SchoolClassItem(props) {
  let schoolItem = props
  console.log("props " + schoolItem.className);
  let Sun = schoolItem.dayOfWeek.Sun ? 'Sun' : '';
  let Mon = schoolItem.dayOfWeek.Mon ? 'Mon' : '';
  let Tue = schoolItem.dayOfWeek.Tue ? 'Tue' : '';
  let Wed = schoolItem.dayOfWeek.Wed ? 'Wed' : '';
  let Thurs = schoolItem.dayOfWeek.Thurs ? 'Thurs' : '';
  let Fri = schoolItem.dayOfWeek.Fri ? 'Fri' : '';
  let Sat = schoolItem.dayOfWeek.Sat ? 'Sat' : '';
  let days = `${Sun} ${Mon} ${Tue} ${Wed} ${Thurs} ${Fri} ${Sat}`;

  return (
    <div className='SchoolClassItem__row'>
      {<h3> {props.className}</h3>}
      {days}

      {<h3> {props.startTime}</h3>}  {<h3> {props.endTime}</h3>}

    </div>



  )
}

