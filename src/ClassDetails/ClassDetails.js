import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink, Link } from 'react-router-dom';
import './ClassDetails.css';


export default class ClassDetails extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
  }

  cancelHandle() {
    //e.preventDefault();
    // this.props.history.goBack();
    this.context.closeClass();
  }


  render() {
    console.log(this.props.id);
    let schoolClass = this.context.getClass(this.props.id);
    console.log(schoolClass);

   
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

