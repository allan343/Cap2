import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
//import './ShowDetails.css';

class EditSchoolClassForm extends React.Component {
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
      thursday: false,
      friday: false,
      sat: false,
    
    starttime: '',
    endtime: ''
  };

  constructor(props) {
    //states a show can have
    super(props);
    console.log(this.props.dayOfWeek);
    this.state = {
     id: this.props.id,
      classname: {
        value: this.props.classname,
        touched: false
      },
      finishdate: this.props.finishdate,
      startdate: this.props.startdate,
      building: {
        value: this.props.building,
        touched: false
      },
      room: {
        value: this.props.room,
        touched: false
      },
      teacher: {
        value: this.props.teacher,
        touched: false
      },
      sun: this.props.sun,
      mon: this.props.mon,
      tue: this.props.tue,
      wed: this.props.wed,
      thurs: this.props.thurs,
      fri: this.props.fri,
      sat: this.props.sat,
      starttime: {
        value: this.props.starttime,
        touched: false
      },
      endtime: {
        value: this.props.endtime,
        touched: false
      }


    };
  }

  deleteHandle = (e) => {
    e.preventDefault();
    this.context.deleteClass(this.context.getClassId());
    this.context.closeClass();
    this.props.history.goBack();
  }

  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  updateClassName(classname) {
    console.log("classname is " + classname);
    this.setState({ classname: { value: classname, touched: true } });
    console.log("state classname " + this.state.classname);
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
    console.log(this.state.dayOfWeek);
    let days = { ...this.state.dayOfWeek };
    let checked = !this.state.dayOfWeek[dayOfWeek];
    days[dayOfWeek] = checked;
    this.setState({ dayOfWeek: days });
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

  updateStartTime(time) {
    this.setState({ starttime: { value: time, touched: true } });
  }

  updateEndTime(time) {
    this.setState({ endtime: { value: time, touched: true } });
  }

  render() {
    console.log(this.props.startdate);
    console.log(this.state);
    return (
      <div id="show-details">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let schoolClass = {
            id: this.state.id,
            classname: this.state.classname.value,
            finishdate: this.state.finishdate,
            startdate: this.state.startdate,
            building: this.state.building.value,
            room: this.state.room.value,
            teacher: this.state.teacher.value,
            starttime: this.state.starttime.value,
            endtime: this.state.endtime.value,
            sun: this.state.sun,
            mon: this.state.mon,
            tue: this.state.tue,
            wed: this.state.wed,
            thurs: this.state.thurs,
            fri: this.state.fri,
            sat: this.state.sat,

          }

          console.log("object classname" + schoolClass);
          //we needed a callback function for 
          // add show
          // in app.js add show does a call/promise to backend
          // can happen asyncronously
          // callback function ensures we have newid from add show context method
          this.context.updateClass(schoolClass, this.context.getClassId());
          this.props.history.goBack();
        }}>
          <h2 className="classDetailsHeading"> Class Details</h2>
          <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
            Back
        </button>
          <div className="class__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="classname">Name *</label>
            <input type="text" className="folder__control"
              name="classname" id="classname" value={this.state.classname.value} onChange={e => this.updateClassName(e.target.value)} required="required"/>
            <label for="startDate">Start Date</label>

            <input type="date" id="startDate" name="startDate" value={this.state.startdate} onChange={e => this.updateStartDate(e.target.value)} ></input>

            <label for="finishDate">Finish Date</label>
            <input type="date" id="finishDate" name="finishDate" value={this.state.finishdate} onChange={e => this.updateFinishDate(e.target.value)}></input>

            <label htmlFor="name">Building*</label>
            <input type="text" className="folder__control"
              name="building" id="building" value={this.state.building.value} onChange={e => this.updateBuilding(e.target.value)} />
            <label htmlFor="name">Room *</label>
            <input type="text" className="room"
              name="room" id="room" value={this.state.room.value} onChange={e => this.updateRoom(e.target.value)} />
            <label htmlFor="name">Teacher *</label>
            <input type="text" className="folder__control"
              name="showdescription" id="showdescription" value={this.state.teacher.value} onChange={e => this.updateTeacher(e.target.value)} />
             <input type="checkbox" id="sun" value={'sun'} defaultChecked={this.state.dayOfWeek.sun ? true: false} onChange={e => this.updateSunday(e.target.value)} />
            <label for="sun"> Sun</label><br></br>
            <input type="checkbox" id="mon" value={'mon'} defaultChecked={this.state.dayOfWeek.mon ? true: false} onChange={e => this.updateMonday(e.target.value)} />
            <label for="son"> Mon</label><br></br>
            <input type="checkbox" id="tue" value={'tue'} defaultChecked={this.state.dayOfWeek.tue ? true: false} onChange={e => this.updateTuesday(e.target.value)} />
            <label for="tue"> Tues</label><br></br>
            <input type="checkbox" id="wed" value={'wed'} defaultChecked={this.state.dayOfWeek.wed ? true: false } onChange={e => this.updateWednesday(e.target.value)} />
            <label for="wed"> Wed</label><br></br>
            <input type="checkbox" id="thurs" value={'thurs'} defaultChecked={this.state.dayOfWeek.thurs ? true: false} onChange={e => this.updateThursday(e.target.value)} />
            <label for="thurs"> Thurs</label><br></br>
            <input type="checkbox" id="fri" value={'fri'} defaultChecked={this.state.dayOfWeek.fri ? true: false} onChange={e => this.updateFriday(e.target.value)} />
            <label for="fri"> Fri</label><br></br>
            <input type="checkbox" id="sat" value={'sat'} defaultChecked={this.state.dayOfWeek.sat ? true: false} onChange={e => this.updateSaturday(e.target.value)} />
            <label for="sat"> Sat</label><br></br>
            <label htmlFor="name">Start Time e.g. 8:30 or 2:15 pm *</label>
            <input type="text" className="folder__control"
              name="startTime" id="startTime" value={this.state.starttime.value} onChange={e => this.updateStartTime(e.target.value)} />
            <label htmlFor="name">End Time e.g. 8:30 or 2:15 pm *</label>
            <input type="text" className="folder__control"
              name="endTime" id="endTime" value={this.state.endtime.value} onChange={e => this.updateEndTime(e.target.value)} />
          </div>
          <div className="addShow__button__group">

            <button type="submit" className="saveShowButton" onClick={this.context.a}>
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

export default EditSchoolClassForm;