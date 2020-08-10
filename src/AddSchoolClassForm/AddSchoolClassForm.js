
import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './AddSchoolClassForm.css';

class AddSchoolClassForm extends React.Component {
  static contextType = ApiContext;
 // static contextType = ApiContext;
  // component that allows user
  // to fill in show details
  static defaultProps = {
    id: '',
    classname: '',
    finishdate: '',
    startdate: '',
    building: '',
    room: '',
    teacher: '',
   
    sun: false,
            mon: false,
            tue: false,
            wed: false,
            thurs: false,
            fri: false,
            sat: false,
 
            starttime:'',
            endtime:''
  };

  constructor(props) {
    //states a show can have
    super(props);
    this.state = {
      id: '',
      classname: {
        value: '',
        touched: false
      },
      finishdate: "",
      startdate: "",
      building: {
        value: '',
        touched: false
      },
      room: {
        value: '',
        touched: false
      },
      teacher: {
        value: '',
        touched: false
      },
      
        sun: false,
                mon: false,
                tue: false,
                wed: false,
                thurs: false,
                fri: false,
                sat: false,
       
        room: {
            value: '',
            touched: false
          },
          starttime: "1:00am",
          endtime: "1:00am"
       

    };
  }
  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
   // this.props.history.push(`/`);
   this.props.history.goBack();
  }

  updateClassName(classname) {
    console.log("classname is " + classname);
    this.setState({ classname: { value: classname, touched: true } });
    console.log("state classname "+ this.state.classname);
  }

  updateBuilding(building) {
    this.setState({ building: { value: building, touched: true } });
  }

  updateRoom(room) {
    console.log("update room");
    this.setState({ room: { value: room, touched: true } });
  }

  updateTeacher(teacher) {
    this.setState({ teacher: { value: teacher, touched: true } });
  }

  updateDay(dayOfWeek) {
    console.log(dayOfWeek);
    console.log(this.state);
    let days={...this.state.dayOfWeek};
    let checked=!this.state.dayOfWeek[dayOfWeek];
    days[dayOfWeek] = checked;
    this.setState({ dayOfWeek:  days});
    console.log(this.state);
  }

  updateSunday(dayOfWeek) {
    console.log(dayOfWeek);
    console.log(this.state);
    let checked=!this.state.sun;
    this.setState({ sun:  checked});
    console.log(this.state);
  }

  updateMonday() {
    let checked=!this.state.mon;
    this.setState({ mon:  checked});
  }

  updateTuesday() {
    let checked=!this.state.tue;
    this.setState({ tue:  checked});
  }

  updateWednesday() {
    let checked=!this.state.wed;
    this.setState({ wed:  checked});
  }

  updateThursday() {
    let checked=!this.state.thurs;
    this.setState({ thurs:  checked});
  }

  updateFriday() {
    let checked=!this.state.fri;
    this.setState({ fri : checked});
  }

  updateSaturday() {
    let checked=!this.state.sat;
    this.setState({ sat : checked});
  }

  updateStartDate(date) {
    this.setState({ startdate: date });
  }

  updateFinishDate(date) {
    this.setState({ finishdate: date });
  }

  updateStartTime =(event)=> {

    this.setState({ starttime: event.target.value });
  };
  

updateEndTime =(event)=> {
 
  this.setState({ endtime: event.target.value });
};
  render() {

    return (
      <div id="show-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let schoolClass = {
            classname: this.state.classname.value,
            finishdate: this.state.finishdate,
            startdate: this.state.startdate,
            building: this.state.building.value,
            room: this.state.room.value,
            teacher: this.state.teacher.value,
            starttime:this.state.starttime,
            endtime: this.state.endtime,
            sun: this.state.sun,
            mon: this.state.mon,
            tue: this.state.tue,
            wed: this.state.wed,
            thurs: this.state.thurs,
            fri: this.state.fri,
            sat: this.state.sat,
           
          }
          

          console.log("object classname"+schoolClass);
          //we needed a callback function for 
          // add show
          // in app.js add show does a call/promise to backend
          // can happen asyncronously
          // callback function ensures we have newid from add show context method
        this.context.addSchoolClass(schoolClass);
       // this.props.history.push(`/`);
       this.props.history.goBack();
        }}>
          <div className="class-details">
          <div className="classDetailsHeading">
          <h2 > Class Details</h2>
          </div>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class-form">
            
            <label htmlFor="classname">Name *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.classname.value} onChange={e => this.updateClassName(e.target.value)} required="required"/>
            <br/>
          
            <label for="startDate">Start Date</label>
            <input type="date" id="startDate" name="startDate" onChange={e => this.updateStartDate(e.target.value)}  required="required"></input>
            <br/>
            <label for="finishDate">Finish Date</label>
            <input type="date" id="finishDate" name="finishDate" onChange={e => this.updateFinishDate(e.target.value)} required="required"></input>
            <br/>
            <label htmlFor="name">Building*</label>
            <input type="text" className="folder__control"
              name="building" id="building" value={this.state.building.value} onChange={e => this.updateBuilding(e.target.value)} required="required"/>
 <br/>           
            <label htmlFor="name">Room *</label>
            <input type="text"  className="room"
              name="room" id="room" value={this.state.room.value} onChange={e => this.updateRoom(e.target.value)} required="required" />
             <br/>
            <label htmlFor="name">Teacher *</label>
            <input type="text" className="folder__control"
              name="showdescription" id="showdescription" value={this.state.teacher.value} onChange={e => this.updateTeacher(e.target.value)} required="required"/>
         <br/>
        
           <input type="checkbox"  id="sun" value={'sun'} onChange={e=>this.updateSunday(e.target.value)} />
           <label htmlFor="sun">  Sun</label><br></br>
         
           <input type="checkbox"  id="mon" value={'mon'}  onChange={e=>this.updateMonday(e.target.value)} />
           <label for="mon"> Mon</label><br></br>
           <input type="checkbox"  id="tue" value={'tue'}  onChange={e=>this.updateTuesday(e.target.value)} />
           <label for="tues"> Tues</label><br></br>
           <input type="checkbox"  id="wed" value={'wed'}   onChange={e=>this.updateWednesday(e.target.value)} />
           <label for="wed"> Wed</label><br></br>
           <input type="checkbox"  id="thurs" value={'thurs'} onChange={e=>this.updateThursday(e.target.value)} />
           <label for="thurs"> Thurs</label><br></br>
           <input type="checkbox"  id="fri" value={'fri'} onChange={e=>this.updateFriday(e.target.value)} />
           <label for="fri"> Fri</label><br></br>
           <input type="checkbox"  id="sat" value={'sat'}  onChange={e=>this.updateSaturday(e.target.value)} />
           <label for="sat"> Sat</label><br></br>
        
           <label htmlFor="name">Start Time</label>
           <select className="starttime" name="starttime" id="starttime" onChange={this.updateStartTime} required="required">
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
             <label htmlFor="name">End Time</label>
             <select name="endtime" id="endtime" onChange={this.updateEndTime} required="required">
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
          
          <div className="addClass__button__group">
          
            <button type="submit" className="saveClassButton" onClick={this.context.a}>
              Save
        </button>
        </div>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddSchoolClassForm ;