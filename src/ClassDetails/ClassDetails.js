import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink, Link } from 'react-router-dom';
import HomeworkList from '../HomeworkList/HomeworkList'


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
    { <h3> {schoolClass.classname}</h3>}
  { <h3> Started {schoolClass.startdate}</h3>}
  { <h3> Ends {schoolClass.finishdate}</h3>}
    { <h3> Location {schoolClass.building}</h3>}  
    { <h3> Teacher {schoolClass.teacher}</h3>}  
    { <h3> Class Start Time {schoolClass.starttime}</h3>}  
    { <h3> Class End Time {schoolClass.endtime}</h3>}  
    
    <NavLink className="addClassPath"
            to={`/ClassDetails/Edit/${this.context.getClassId()}`}
          >
            Edit
            </NavLink>
          
</div>
    
   
    
  )
  }
}

