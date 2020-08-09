import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './AddHomeworkForm.css';

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
      duetime:"1:00am",
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
    let dueDate = date;
    console.log(dueDate);
    this.setState({ duedate: dueDate });
  }

  updateDueTime =(event)=> {

    this.setState({ duetime: event.target.value });
  };

  updatePriority(priority) {
    this.setState({ homeworkpriority: priority });
  }



  render() {
    let classList = this.context.schoolClasses;
    return (
      <div className="homeworkDetails">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let homework = {
            //homeworkid: Math.random(),
            classid: this.state.classid,
            homeworkdescription: this.state.homeworkdescription.value,
            schoolclass: this.state.schoolclass,
            homeworktype: this.state.homeworktype,
            duedate: this.state.duedate,
            duetime: this.state.duetime,
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

                  <option  value={schoolClass.id}>{schoolClass.classname}</option>
                )
              }
            </select>
            <br/>
            
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
           
            <br/>
            <label for="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" onChange={e => this.updateDueDate(e.target.value)} required="required"></input>

            <br/>
            <label htmlFor="name">Due Time</label>
            <select name="starttime" id="starttime" onChange={this.updateDueTime} required="required">
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
            <select name="priority" id="priority" onChange={this.updatePriority} >
              <option value="High" selected>High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <br/>
            
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

