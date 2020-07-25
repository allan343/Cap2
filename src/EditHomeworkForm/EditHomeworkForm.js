import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class EditHomeworkForm extends React.Component {
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
    console.log(this.props.schoolclass);
    this.state = {
      homeworkid: this.props.homeworkid,
      classid:this.props.classid,
      homeworkdescription: {
        value: this.props.homeworkdescription,
        touched: false
      },
      schoolclass:this.props.schoolclass,
      homeworktype: this.props.homeworktype,
      duedate:this.props.duedate,
      duetime: {
        value: this.props.duetime,
        touched: false
      },
      homeworkpriority:this.props.hoemworkpriority
    };
    console.log(this.state.schoolclass);

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
  
    this.setState({ homeworkdescription: { value: description, touched: true } });
   
  }

  updateClass =(event)=> {
    console.log(this.context.getClass(event.target.value).classname);
    this.setState({classid:event.target.value})
    this.setState({ schoolclass: this.context.getClass(event.target.value).classname });
    console.log(this.state);
  };
  updateType =(event)=> {
    
    this.setState({ homeworktype: event.target.value });
  };

  updateDueDate(date) {
    console.log(date);
    var d = new Date(date);
var n = d.getDay();
console.log(n);
    this.setState({ duedate: date });
  }

  updateDueTime(time) {
  
    this.setState({ duetime: { value: time, touched: true} });
  }

  updatePriority =(event)=> {
    
    this.setState({ homeworkpriority: event.target.value });
  };

  

  render() {
    let classList=  this.context.schoolClasses;
    return (
      <div id="homework-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            homeworkid: this.state.homeworkid,
            classid: this.state.classid,
           homeworkdescription: this.state.homeworkdescription.value,
           schoolclass: this.state.schoolclass,
            homeworktype: this.state.homeworktype,
            duedate: this.state.duedate,
            duetime: this.state.duetime.value,
            homeworkpriority: this.state.homeworkpriority
           
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
              name="classname" id="classname" value={this.state.homeworkdescription.value} onChange={e => this.updateDescription(e.target.value)}/>
           <label for="cars">Class:</label>
            <select name="schoolClass" id="schoolClass" value={this.state.classid} onChange={this.updateClass} required="required">
              {

                classList.map(schoolClass =>

                  <option value={schoolClass.id}>{schoolClass.classname}</option>
                )
              }
            </select>
         <label for="classType">Type:</label>
            <select name="classType" id="classType" value={this.state.homeworktype} onChange={this.updateType}>
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
            <input type="date" id="finishDate" name="finishDate" onChange={e => this.updateDueDate(e.target.value)}   value={this.state.duedate} required></input>
          
          
           <label htmlFor="name">Due Time e.g. 8:30 or 2:15 pm *</label>
           <input type="text" className="folder__control"
              name="startTime" id="startTime" value={this.state.duetime.value} onChange={e => this.updateDueTime(e.target.value)}  value={this.state.duetime.value} />
           <label for="priority">Priority</label>
          <select name="priority" id="priority" value={this.state.homeworkpriority} onChange={this.updatePriority}>
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