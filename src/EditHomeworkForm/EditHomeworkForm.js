import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class EditHomeworkForm extends React.Component {
  static contextType = ApiContext;
 // static contextType = ApiContext;
  // component that allows user
  // to fill in show details
  static defaultProps = {
    homeworkId: '',
    classId:'',
    description: '',
    schoolClass: '',
    type: '',
    dueDate: '',
    dueTime: '',
    priority: ''
  };

  constructor(props) {
    //states a show can have
    super(props);
    console.log(this.props.schoolClass);
    this.state = {
      homeworkId: this.props.homeworkId,
      classId:this.props.classId,
      description: {
        value: this.props.description,
        touched: false
      },
      schoolClass:this.props.schoolClass,
      type: this.props.type,
      dueDate:this.props.dueDate,
      dueTime: {
        value: this.props.dueTime,
        touched: false
      },
      priority:this.props.priority
    };
    console.log(this.state.schoolClass);

  }
  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
    //this.props.history.push(`/`);
    this.props.history.goBack();
  }

  
  deleteHandle = (e) => {
    e.preventDefault();
    this.context.deleteHomework(this.context.getHomeworkId());
  
      this.props.history.goBack();
    }

  updateDescription(description) {
  
    this.setState({ description: { value: description, touched: true } });
   
  }

  updateClass =(event)=> {
    console.log(this.context.getClass(event.target.value).className);
    this.setState({classId:event.target.value})
    this.setState({ schoolClass: this.context.getClass(event.target.value).className });
    console.log(this.state);
  };
  updateType =(event)=> {
    
    this.setState({ type: event.target.value });
  };

  updateDueDate(date) {
    console.log(date);
    var d = new Date(date);
var n = d.getDay();
console.log(n);
    this.setState({ dueDate: date });
  }

  updateDueTime(time) {
  
    this.setState({ dueTime: { value: time, touched: true} });
  }

  updatePriority =(event)=> {
    
    this.setState({ priority: event.target.value });
  };

  

  render() {
    let classList=  this.context.schoolClasses;
    return (
      <div id="homework-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            homeworkId: this.state.homeworkId,
            classId: this.state.classId,
           description: this.state.description.value,
           schoolClass: this.state.schoolClass,
            type: this.state.type,
            dueDate: this.state.dueDate,
            dueTime: this.state.dueTime.value,
            priority: this.state.priority
           
          }
    
          this.context.updateHomework(homework,this.context.getHomeworkId());
      
        this.props.history.goBack();
        console.log("Homework"+ this.context.homeworkList);
        }}>
          <h2 className="classDetailsHeading"> Homework Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="homeworkDesc">Description *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.description.value} onChange={e => this.updateDescription(e.target.value)}/>
           <label for="cars">Class:</label>
            <select name="schoolClass" id="schoolClass" value={this.state.classId} onChange={this.updateClass} required="required">
              {

                classList.map(schoolClass =>

                  <option value={schoolClass.classId}>{schoolClass.className}</option>
                )
              }
            </select>
         <label for="classType">Type:</label>
            <select name="classType" id="classType" value={this.state.type} onChange={this.updateType}>
            <option value="Homework">Homework</option>
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
            <input type="date" id="finishDate" name="finishDate" onChange={e => this.updateDueDate(e.target.value)}   value={this.state.dueDate} required></input>
          
          
           <label htmlFor="name">Due Time e.g. 8:30 or 2:15 pm *</label>
           <input type="text" className="folder__control"
              name="startTime" id="startTime" value={this.state.dueTime.value} onChange={e => this.updateDueTime(e.target.value)}  value={this.state.dueTime.value} />
           <label for="priority">Priority</label>
          <select name="priority" id="priority" value={this.state.priority} onChange={this.updatePriority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>      
            </select>
          </div>
          <div className="addShow__button__group">

            <button type="submit" className="saveShowButton" >
              Save
        </button>
        <button type="reset" className="delShowButton" onClick={this.deleteHandle}>
                Delete
        </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditHomeworkForm ;