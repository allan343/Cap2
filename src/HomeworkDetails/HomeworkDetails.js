import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import { NavLink, Link } from 'react-router-dom';

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
    console.log(homework.homeworkdescription);
    return (
      <div className='SchoolClassItem__row'>

        <button type="cancel" className="cancelShowButton" onClick={this.props.hideHomework}>
          Back
        </button>
        {<h3> Description: {homework.homeworkdescription}</h3>}
        {<h3> Due date: {homework.duedate}</h3>}
        {<h3> Due  time:  {homework.duetime}</h3>}


        <NavLink className="addClassPath"
          to={`/HomeworkDetails/Edit/${this.context.getHomeworkId()}`}
        >
          Edit
            </NavLink>

      </div>



    )
  }
}

