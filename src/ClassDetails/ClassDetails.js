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

  return (



      <div className='SchoolClassItem__row'>

<button type="cancel" className="cancelShowButton" onClick={()=>this.cancelHandle()}>
            Close Details
        </button>
    { <div className="schoolClassName"> {schoolClass.classname}</div>}
  { <div className="startDate"> Started: {schoolClass.startdate}</div>}
  { <div className="endDate"> Ends: {schoolClass.finishdate}</div>}
    { <div className="location"> Location: {schoolClass.building}</div>}  
    { <div className="teacher"> Teacher: {schoolClass.teacher}</div>}  
    { <div className="startTime"> Class Start Time: {schoolClass.starttime}</div>}  
    { <div className="endTime"> Class End Time: {schoolClass.endtime}</div>}  
    
    <NavLink className="addClassPath"
            to={`/ClassDetails/Edit/${this.context.getClassId()}`}
          >
            Edit
            </NavLink>
          
</div>
    
   
    
  )
  }
}

