import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';
import ClassDetails from '../ClassDetails/ClassDetails';
import ApiContext from '../ApiContext/ApiContext';
import Placeholder from '../Placeholder/Placeholder';
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
        display=  <Placeholder
        message={message}
      
      />;
    }
    else{
      display = <div>
      {/*if a class is clicked show class details, else show class list */
      (this.context.classClicked) ? <ClassDetails id={this.context.getClassId()} hideClass={() => { this.setState({ clicked: false }) }} /> :
        <div className="classList">
          <ul className='SchoolClassList__list' aria-live='polite'>
            {schoolClasses.map(schoolClass =>

              <li key={schoolClass.id} id="class" onClick={() => this.context.setClassClicked(schoolClass.id)}>
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

    return (
      <div className='SchoolClassList'>
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
      </div>
    );
  }
}

export default SchoolClassList;