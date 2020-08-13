import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './AddHomeworkForm.css';

class AddHomeworkForm extends React.Component {
  static contextType = ApiContext;
  // static contextType = ApiContext;
  // component that allows user
  // to fill in homework details
  static defaultProps = {
    homeworkid: '',
    classid: '',
    homeworkdescription: '',
    schoolclass: '',
    homeworktype: '',
    duedate: '',
    duetime: '',
    homeworkpriority: ''
  };

  constructor(props) {
    //states a homework can have
    super(props);
    this.state = {
      homeworkid: '',
      classid: '',
      homeworkdescription: {
        value: '',
        touched: false
      },
      schoolclass: "",
      homeworktype: "Homework",
      duedate: "",
      duetime: "1:00am",
      homeworkpriority: "High"
    };

  }
  //methods to update homework state from user input
  cancelHandle = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  //update homework description
  updateDescription(homeworkdescription) {
    this.setState({ homeworkdescription: { value: homeworkdescription, touched: true } });
  }

  //update class
  //a homework belongs to a school class
  //user can update this field
  updateClass = (event) => {
    this.setState({ classid: event.target.value })
    this.setState({ schoolclass: this.context.getClass(event.target.value).classname });
  };

  //update homework type: reading, homework, quiz etc.
  updateType = (event) => {
    this.setState({ homeworktype: event.target.value });
  };

  //update priority: high medium low etc.
  updatePriority = (event) => {
    this.setState({ homeworkpriority: event.target.value });
  };

  updateDueDate(dueDate) {
    this.setState({ duedate: dueDate });
  }

  updateDueTime = (event) => {
    this.setState({ duetime: event.target.value });
  };

  render() {
    let classList = this.context.schoolClasses;
    return (
      <div className="homeworkDetails">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            classid: this.state.classid,
            homeworkdescription: this.state.homeworkdescription.value,
            schoolclass: this.state.schoolclass,
            homeworktype: this.state.homeworktype,
            duedate: this.state.duedate,
            duetime: this.state.duetime,
            homeworkpriority: this.state.homeworkpriority
          };
          //the user has to create a class before he can add a homework
          //if the user only created one class
          //a homework created will belong to that one class (ie. user created class math  homework belongs to math)
          if (homework.classid === "" || homework.schoolclass === "") {
            homework.classid = this.context.getFirstClassId();
            homework.schoolclass = this.context.getFirstClassName();
          }
          //add homework created to homework array 
          //navigate back to previous page.
          this.context.addHomework(homework);
          this.props.history.goBack();

        }}>
          <div className="homework-details">
            <h2 className="homeworkDetailsHeading"> Homework Details</h2>
            <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
              Back
        </button>
            <div className="form-group">
              <label htmlFor="homeworkDesc">Description *</label>
              <input type="text" className="folder__control"
                name="classname" id="classname" value={this.state.homeworkdescription.value} onChange={e => this.updateDescription(e.target.value)} required="required" />
              <br />
              <label htmlFor="class">Class:</label>
              <select className="schoolclass" name="schoolclass" id="schoolclass" value={this.state.classid} onChange={this.updateClass} required="required">
                { /* take all school classes and list them as drop down option */
                  classList.map(schoolClass =>
                    <option key={schoolClass.id} value={schoolClass.id}>{schoolClass.classname}</option>
                  )
                }
              </select>
              <br />
              <label htmlFor="classType">Type:</label>
              <select className="classType" name="classType" id="classType" onChange={this.updateType}>
                <option defaultValue value="Homework">Homework</option>
                <option value="Test">Test</option>
                <option value="Study">Study</option>
                <option value="Read">Read</option>
                <option value="Paper">Paper</option>
                <option value="Presentation">Presentation</option>
                <option value="Lab">Lab</option>
                <option value="Final">Final</option>
                <option value="Midterm">Midterm</option>
                <option value="Quiz">Quiz</option>
                <option value="Project">Project</option>
              </select>
              <br />
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" id="dueDate" name="dueDate" onChange={e => this.updateDueDate(e.target.value)} required="required"></input>
              <br />
              <label htmlFor="name">Due Time</label>
              <select name="starttime" id="starttime" onChange={this.updateDueTime} required="required">
                <option defaultValue value="1:00am">1:00am</option>
                <option value="2:00am">2:00am</option>
                <option value="3:00am">3:00am</option>
                <option value="4:00am">4:00am</option>
                <option value="5:00am">5:00am</option>
                <option value="6:00am">6:00am</option>
                <option value="7:00am">7:00am</option>
                <option value="8:00am">8:00am</option>
                <option value="9:00am">9:00am</option>
                <option value="10:00am">10:00am</option>
                <option value="11:00am">11:00am</option>
                <option value="12:00pm">12:00pm</option>
                <option value="1:00pm">1:00pm</option>
                <option value="2:00pm">2:00pm</option>
                <option value="3:00pm">3:00pm</option>
                <option value="4:00pm">4:00pm</option>
                <option value="5:00pm">5:00pm</option>
                <option value="6:00pm">6:00pm</option>
                <option value="7:00pm">7:00pm</option>
                <option value="8:00pm">8:00pm</option>
                <option value="9:00pm">9:00pm</option>
                <option value="10:00pm">10:00pm</option>
                <option value="11:00pm">11:00pm</option>
                <option value="12:00am">12:00am</option>
              </select>
              <br />
              <br />
              <label htmlFor="priority">Priority</label>
              <select name="priority" id="priority" onChange={this.updatePriority} >
                <option value="High" defaultValue>High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <br />
            </div>
            <div className="addHomework__button__group">
              <button type="submit" className="saveHomeworkButton">
                Save
        </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddHomeworkForm;

