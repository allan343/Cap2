import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink} from 'react-router-dom';
import './ClassDetails.css';

export default class ClassDetails extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
  }

  cancelHandle() {
    this.context.closeClass();
  }

  render() {
    let schoolClass = this.context.getClass(this.props.id);
    /*checks if school class lies on a week day.  If so week day is included in days of week string */
    let Sun = schoolClass.sun ? 'Sun' : '';
    let Mon = schoolClass.mon ? 'Mon' : '';
    let Tue = schoolClass.tue ? 'Tue' : '';
    let Wed = schoolClass.wed ? 'Wed' : '';
    let Thurs = schoolClass.thurs ? 'Thurs' : '';
    let Fri = schoolClass.fri ? 'Fri' : '';
    let Sat = schoolClass.sat ? 'Sat' : '';
    let days = `${Sun} ${Mon} ${Tue} ${Wed} ${Thurs} ${Fri} ${Sat}`;

    return (
      <div className='SchoolClassItem__row'>
        <button type="cancel" className="cancelShowButton" onClick={() => this.cancelHandle()}>
          Back
        </button>
        {/*provides summary of class details */}
        {<div className="schoolClassName"> {schoolClass.classname}</div>}
        {<div className="startDate"> Started: {this.context.formatDate(schoolClass.startdate)}</div>}
        {<div className="endDate"> Ends: {this.context.formatDate(schoolClass.finishdate)}</div>}
        {<div className="location"> Location: {schoolClass.building}</div>}
        {<div className="teacher"> Teacher: {schoolClass.teacher}</div>}
        {<div className="startTime"> Class Start Time: {schoolClass.starttime}</div>}
        {<div className="endTime"> Class End Time: {schoolClass.endtime}</div>}
        {<h3 className="classTimes"> Class Times </h3>}
        {<div className="classTimes"> {days}</div>}
        <NavLink className="editClassPath"
          to={`/ClassDetails/Edit/${this.context.getClassId()}`}
        >
          Edit
            </NavLink>

      </div>



    )
  }
}

