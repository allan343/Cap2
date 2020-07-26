import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class AddHomeworkForm extends React.Component {
  static contextType = ApiContext;
  // static contextType = ApiContext;
  // component that allows user
  // to fill in show details
  static defaultProps = {
    homeworkid: '',
    classid:'',
    homeworkdescription: '',
    schoolclass: '',
    homeworktype: '',
    duedate: '',
    duetime: '',
    homeworkpriority: ''
  };

  constructor(props) {
    //states a show can have
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
      duetime: {
        value: '',
        touched: false
      },
      homeworkpriority: "High"
    };

   // this.updateClass = this.updateClass.bind(this);
  }
  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
   // this.props.history.push(`/`);
   this.props.history.goBack();
  }

  updateDescription(homeworkdescription) {

    this.setState({ homeworkdescription: { value: homeworkdescription, touched: true } });

  }
 
  updateClass =(event)=> {
    console.log(event.target.value);
    this.setState({classid:event.target.value})
    this.setState({ schoolclass: this.context.getClass(event.target.value).classname });
  };
  updateType =(event)=> {
    console.log(event.target.value);
    this.setState({ homeworktype: event.target.value });
  };

  updatePriority =(event)=> {
    console.log(event.target.value);
    this.setState({ homeworkpriority: event.target.value });
  };

  updateDueDate(date) {
    console.log(date);
    var d = new Date(date);
    var n = d.getDay();
    console.log(n);
    this.setState({ duedate: date });
  }

  updateDueTime(time) {

    this.setState({ duetime: { value: time, touched: true } });
  }

  updatePriority(priority) {
    this.setState({ homeworkpriority: priority });
  }



  render() {
    let classList = this.context.schoolClasses;
    return (
      <div id="homework-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            //homeworkid: Math.random(),
            classid: this.state.classid,
            homeworkdescription: this.state.homeworkdescription.value,
            schoolclass: this.state.schoolclass,
            homeworktype: this.state.homeworktype,
            duedate: this.state.duedate,
            duetime: this.state.duetime.value,
            homeworkpriority: this.state.homeworkpriority

          }
          if(homework.classid==""||homework.schoolclass=="")
          {
            console.log("here");
            homework.classid= this.context.getFirstClassId();
            homework.schoolclass=this.context.getFirstClassName();
          }
          this.context.addHomework(homework);

        //  this.props.history.push(`/`);
        this.props.history.goBack();
          console.log("Homework" + this.context.homeworkList);
        }}>
          <h2 className="classDetailsHeading"> Homework Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="homeworkDesc">Description *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.homeworkdescription.value} onChange={e => this.updateDescription(e.target.value)} required="required"/>
            <label for="cars">Class:</label>
            <select name="schoolclass" id="schoolclass" value={this.state.classid} onChange={this.updateClass} required="required">
              {
            
                classList.map(schoolClass =>

                  <option  value={schoolClass.id}>{schoolClass.classname}</option>
                )
              }
            </select>
            <label for="classType">Type:</label>
            <select name="classType" id="classType" onChange={this.updateType}>
              <option selected="selected" value="Homework">Homework</option>
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
            <label for="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" onChange={e => this.updateDueDate(e.target.value)} required="required"></input>


            <label htmlFor="name">Due Time e.g. 8:30 or 2:15 pm *</label>
            <input type="text" className="folder__control"
              name="startTime" id="startTime" onChange={e => this.updateDueTime(e.target.value)}required="required" />
            <label for="priority">Priority</label>
            <select name="priority" id="priority" onChange={this.updatePriority} >
              <option value="High" selected>High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="addShow__button__group">

            <button type="submit" className="saveShowButton">
              Save
        </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddHomeworkForm;

