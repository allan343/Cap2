import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink, Link } from 'react-router-dom';



export default class ClassDetails extends React.Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
    }
  
    cancelHandle() {
        //e.preventDefault();
       // this.props.history.goBack();
       this.props.closeHomework();
      }
    

  render() {
    console.log(this. props.homeworkId);
  let homework = this.context.getHomework(this.props.homeworkId);
  console.log(homework.description);
  return (



      <div className='SchoolClassItem__row'>

<button type="cancel" className="cancelShowButton" onClick={this.props.hideHomework}>
            Back
        </button>
    { <h3> Description: {homework.description}</h3>}
  { <h3> Due date: {homework.dueDate}</h3>}
  { <h3> Due  time:  {homework.dueTime}</h3>}

    
    <NavLink className="addClassPath"
            to={`/HomeworkDetails/Edit/${this.context.getHomeworkId()}`}
          >
            Edit
            </NavLink>
     
      </div>
    
   
    
  )
  }
}

