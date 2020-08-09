import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './EditHomeworkForm.css';

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
    let dueDateString='';
    let dueDateDayString='';
    console.log(this.props.duedate);
    console.log(new Date(this.props.duedate).getUTCDate());
    if(new Date(this.props.duedate).getUTCDate() < 10)
    {
      dueDateDayString=`0${new Date(this.props.duedate).getUTCDate()}`
      console.log(dueDateString);
    }
    else {
      dueDateDayString = `${new Date(this.props.duedate).getUTCDate()}`
      console.log(dueDateString);
    }
    if((new Date(this.props.duedate).getUTCMonth())< 9 )
    { 
      dueDateString= `${new Date(this.props.duedate).getFullYear()}-0${new Date(this.props.duedate).getUTCMonth()+1}-${dueDateDayString}`
  }
    else
    {
      dueDateString=`${new Date(this.props.duedate).getFullYear()}-${new Date(this.props.duedate).getUTCMonth()+1}-${dueDateDayString}`;
  }
    console.log(dueDateString);
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
      displayduedate:dueDateString,
      duetime:this.props.duetime,
       
      homeworkpriority:this.props.homeworkpriority
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
let dueDate = date;
    this.setState({ duedate: dueDate });
    this.setState({displayduedate:date});
  }

  updateDueTime =(event)=> {

    this.setState({ duetime: event.target.value });
  };

  updatePriority =(event)=> {
    
    this.setState({ homeworkpriority: event.target.value });
  };

  

  render() {
    let classList=  this.context.schoolClasses;
    return (
      <div className="homeworkDetails">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            homeworkid: this.state.homeworkid,
            classid: this.state.classid,
           homeworkdescription: this.state.homeworkdescription.value,
           schoolclass: this.state.schoolclass,
            homeworktype: this.state.homeworktype,
            duedate: this.state.duedate,
            duetime: this.state.duetime,
            homeworkpriority: this.state.homeworkpriority
           
          }
    
          this.context.updateHomework(homework,this.context.getHomeworkId());
      
        this.props.history.goBack();
        console.log("Homework"+ this.context.homeworkList);
        }}>
           <div className="homework-details">
          <h2 className="homeworkDetailsHeading"> Homework Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="form-group">
            <label htmlFor="homeworkDesc">Description *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.homeworkdescription.value} onChange={e => this.updateDescription(e.target.value)} required="required"/>
            <br/>
           <label for="cars">Class:</label>
            <select name="schoolclass" id="schoolclass" value={this.state.classid} onChange={this.updateClass} required="required">
              {

                classList.map(schoolClass =>

                  <option value={schoolClass.id}>{schoolClass.classname}</option>
                )
              }
            </select>
            <br/>
            
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
            

            <br/>
            <label for="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" onChange={e => this.updateDueDate(e.target.value)}   value={this.state.displayduedate} required="required"></input>
          
            <br/>
           <label htmlFor="name">Due Time *</label>
           <select name="starttime" id="starttime"  value={this.state.duetime} onChange={this.updateDueTime} required="required">
              <option selected="selected" value="1:00am">1:00am</option>
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
            <br/>
            <br/>
           <label for="priority">Priority</label>
          <select name="priority" id="priority" value={this.state.homeworkpriority} onChange={this.updatePriority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>      
            </select>
            <br/>
          </div>
          <div className="editHomework__button__group">

            <button type="submit" className="saveHomeworkButton" >
              Save
        </button>
        <button type="reset" className="delHomeworkButton" onClick={this.deleteHandle}>
                Delete
        </button>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditHomeworkForm ;