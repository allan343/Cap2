import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';
import ClassDetails from '../ClassDetails/ClassDetails';
import ApiContext from '../ApiContext/ApiContext';
import './SchoolClassList.css';


class SchoolClassList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    schoolclasses: [],
    message:''
  };

  constructor(props) {
    super(props);
  }

  render() {

    const { schoolClasses } = this.props;
    const {message}= this.props;
    let display=""
    if(schoolClasses.length==0){
        display=message;
    }
    else{
      display = <div>
      {(this.context.classClicked) ? <ClassDetails id={this.context.getClassId()} hideClass={() => { this.setState({ clicked: false }) }} /> :
        <div className="classList">
          <ul className='SchoolClassList__list' aria-live='polite'>
            {schoolClasses.map(schoolClass =>

              <li id="class" onClick={() => this.context.setClassClicked(schoolClass.id)}>
                <SchoolClassItem
                  key={schoolClass.id}
                  {...schoolClass}
                />
              </li>
            )}
          </ul>
        </div>
         }
         </div>
    }
    console.log(schoolClasses);
    console.log(this.context.classClicked);
    return (
      <section className='SchoolClassList'>
        <div className= 'titleAndAddButton'>
          <span className='classTitle'>
        Classes
        </span>
        <NavLink className="addClassPath"
          to={`/add-class`}
        >
          Add Class
            </NavLink>
            </div>
           {display}
      </section>
    );
  }
}

export default SchoolClassList;