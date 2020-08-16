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
        {<div className="schoolClassName"> <span id="item-details-label">{schoolClass.classname}</span></div>}
        {<div className="startDate"> <span id="item-details-label">Started:</span> <span id="item-content">{this.context.formatDate(schoolClass.startdate)}</span></div>}
        {<div className="endDate"> <span id="item-details-label">Ends:</span> <span id="item-content">{this.context.formatDate(schoolClass.finishdate)}</span></div>}
        {<div className="location"> <span id="item-details-label">Location: </span><span id="item-content">{schoolClass.building}</span></div>}
        {<div className="teacher"> <span id="item-details-label">Teacher:</span> <span id="item-content">{schoolClass.teacher}</span></div>}
        {<div className="startTime"> <span id="item-details-label">Class Start Time:</span> <span id="item-content"> {schoolClass.starttime}</span> </div>}
        {<div className="endTime"> <span id="item-details-label">Class End Time:</span> <span id="item-content"> {schoolClass.endtime}</span></div>}
        {<h4 className="classTimes"> Class Times </h4>}
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

