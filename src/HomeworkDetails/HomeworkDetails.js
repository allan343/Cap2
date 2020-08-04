import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink, Link } from 'react-router-dom';
import './HomeworkDetails.css';



export default class ClassDetails extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
  }

  cancelHandle() {
    this.props.closeHomework();
  }


  render() {
    console.log(this.props.homeworkid);
    let homework = this.context.getHomework(this.props.homeworkid);
    console.log(homework.description);
    return (



      <div className='HomeworkDetails__row'>

        <button type="cancel" className="cancelShowButton" onClick={this.props.hideHomework}>
          Back
        </button>
        {<div className="description"> Description: {homework.homeworkdescription}</div>}
        {<div className="class"> Class: {homework.schoolclass}</div>}
        {<div className="type"> Type: {homework.homeworktype}</div>}
        {<div className="dueDate"> Due date: {homework.duedate}</div>}
        {<div className="dueTime"> Due time:  {homework.duetime}</div>}


        <NavLink className="editHomeworkPath"
          to={`/HomeworkDetails/Edit/${this.context.getHomeworkId()}`}
        >
          Edit
            </NavLink>

      </div>



    )
  }
}

