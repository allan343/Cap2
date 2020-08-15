import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink} from 'react-router-dom';
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

    let homework = this.context.getHomework(this.props.homeworkid);

    return (

      <div className='HomeworkDetails__row'>
        <button type="cancel" className="cancelShowButton" onClick={this.props.hideHomework}>
          Back
        </button>
        {<div className="description"><span id="item-details-label"> Description:</span> {homework.homeworkdescription}</div>}
        {<div className="class"><span id="item-details-label"> Class: </span>{homework.schoolclass}</div>}
        {<div className="type"> <span id="item-details-label">Type:</span> {homework.homeworktype}</div>}
        {<div className="dueDate"><span id="item-details-label"> Due date: </span>{this.context.formatDate(homework.duedate)}</div>}
        {<div className="dueTime"><span id="item-details-label"> Due time:  </span>{homework.duetime}</div>}

        <NavLink className="editHomeworkPath"
          to={`/HomeworkDetails/Edit/${this.context.getHomeworkId()}`}
        >
          Edit
            </NavLink>

      </div>



    )
  }
}

