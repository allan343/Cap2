import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import './EditSchoolClassForm.css';


class EditSchoolClassForm extends React.Component {
  static contextType = ApiContext;
  // component that allows user
  // to fill in class details

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
    //states a class can have
    super(props);

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
      starttime: this.props.starttime,
      endtime: this.props.endtime
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
    this.setState({ classname: { value: classname, touched: true } });
  }

  updateBuilding(building) {
    this.setState({ building: { value: building, touched: true } });
  }

  updateRoom(room) {
    this.setState({ room: { value: room, touched: true } });
  }

  updateTeacher(teacher) {
    this.setState({ teacher: { value: teacher, touched: true } });
  }

  updateSunday() {
    let checked = !this.state.sun;
    this.setState({ sun: checked });
  }

  updateMonday() {
    let checked = !this.state.mon;
    this.setState({ mon: checked });
  }

  updateTuesday() {
    let checked = !this.state.tue;
    this.setState({ tue: checked });
  }

  updateWednesday() {
    let checked = !this.state.wed;
    this.setState({ wed: checked });
  }

  updateThursday() {
    let checked = !this.state.thurs;
    this.setState({ thurs: checked });
  }

  updateFriday() {
    let checked = !this.state.fri;
    this.setState({ fri: checked });
  }

  updateSaturday() {
    let checked = !this.state.sat;
    this.setState({ sat: checked });
  }

  updateStartDate(date) {
    let startDate = date + "T00:00:00.000Z";
    this.setState({ startdate: startDate });
    this.setState({ displaystartdate: date });
  }

  updateFinishDate(date) {
    let finishDate = date + "T00:00:00.000Z";
    this.setState({ finishdate: finishDate });
    this.setState({ displayfinishdate: date });
  }

  updateStartTime = (event) => {
    this.setState({ starttime: event.target.value });
  };

  updateEndTime = (event) => {
    this.setState({ endtime: event.target.value });
  };

  render() {
    return (
      <div id="schoolClassDetails">
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
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            sun: this.state.sun,
            mon: this.state.mon,
            tue: this.state.tue,
            wed: this.state.wed,
            thurs: this.state.thurs,
            fri: this.state.fri,
            sat: this.state.sat,
          };

          this.context.updateClass(schoolClass, this.context.getClassId());
          this.props.history.goBack();
        }}>
          <div className="class-details">
            <h2 className="classDetailsHeading"> Class Details</h2>
            <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
              Back
        </button>
            <div className="form-group">
              <label htmlFor="classname">Name *</label>
              <input type="text" className="folder__control"
                name="classname" id="classname" value={this.state.classname.value} onChange={e => this.updateClassName(e.target.value)} required="required" />
              <br />
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" value={this.context.formatDate(this.state.startdate)} onChange={e => this.updateStartDate(e.target.value)} required="required"></input>
              <br />
              <label htmlFor="finishDate">Finish Date</label>
              <input type="date" id="finishDate" name="finishDate" value={this.context.formatDate(this.state.finishdate)} onChange={e => this.updateFinishDate(e.target.value)} required="required"></input>
              <br />
              <label htmlFor="name">Building*</label>
              <input type="text" className="folder__control"
                name="building" id="building" value={this.state.building.value} onChange={e => this.updateBuilding(e.target.value)} required="required" />
              <br />
              <label htmlFor="name">Room *</label>
              <input type="text" className="room"
                name="room" id="room" value={this.state.room.value} onChange={e => this.updateRoom(e.target.value)} required="required" />
              <br />
              <label htmlFor="name">Teacher *</label>
              <input type="text" className="folder__control"
                name="showdescription" id="showdescription" value={this.state.teacher.value} onChange={e => this.updateTeacher(e.target.value)} required="required" />
              <br />
              <input type="checkbox" id="sun" value={'sun'} defaultChecked={this.state.sun ? true : false} onChange={e => this.updateSunday(e.target.value)} />
              <label className = "day-check" htmlFor="sun"> Sun</label><br></br>
              <input type="checkbox" id="mon" value={'mon'} defaultChecked={this.state.mon ? true : false} onChange={e => this.updateMonday(e.target.value)} />
              <label className = "day-check" htmlFor="mon"> Mon</label><br></br>
              <input type="checkbox" id="tue" value={'tue'} defaultChecked={this.state.tue ? true : false} onChange={e => this.updateTuesday(e.target.value)} />
              <label className = "day-check" htmlFor="tue"> Tues</label><br></br>
              <input type="checkbox" id="wed" value={'wed'} defaultChecked={this.state.wed ? true : false} onChange={e => this.updateWednesday(e.target.value)} />
              <label className = "day-check" htmlFor="wed"> Wed</label><br></br>
              <input type="checkbox" id="thurs" value={'thurs'} defaultChecked={this.state.thurs ? true : false} onChange={e => this.updateThursday(e.target.value)} />
              <label className = "day-check" htmlFor="thurs"> Thurs</label><br></br>
              <input type="checkbox" id="fri" value={'fri'} defaultChecked={this.state.fri ? true : false} onChange={e => this.updateFriday(e.target.value)} />
              <label className = "day-check" htmlFor="fri"> Fri</label><br></br>
              <input type="checkbox" id="sat" value={'sat'} defaultChecked={this.state.sat ? true : false} onChange={e => this.updateSaturday(e.target.value)} />
              <label className = "day-check" htmlFor="sat"> Sat</label><br></br>
              <label htmlFor="name">Start Time</label>
              <select className="starttime" name="starttime" id="starttime" value={this.state.starttime} onChange={this.updateStartTime} required="required">
                <option value="1:00am">1:00am</option>
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
              <label htmlFor="name">End Time</label>
              <select name="endtime" id="endtime" value={this.state.endtime} onChange={this.updateEndTime} required="required">
                <option value="1:00am">1:00am</option>
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
            </div>
            <div className="editClass__button__group">
              <button type="submit" className="saveClassButton" >
                Save
        </button>
              <button type="reset" className="delClassButton" onClick={this.deleteHandle}>
                Delete
        </button>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default EditSchoolClassForm;