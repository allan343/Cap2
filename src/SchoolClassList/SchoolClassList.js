import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import SchoolClassItem from '../SchoolClassItem/SchoolClassItem';
import ClassDetails from '../ClassDetails/ClassDetails';
import ApiContext from '../ApiContext/ApiContext';

class SchoolClassList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    schoolclasses: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { schoolClasses } = this.props
    console.log(schoolClasses);
    console.log(this.context.classClicked);
    return (
      <section className='SchoolClassList'>
        Classes
        <NavLink className="addClassPath"
          to={`/add-class`}
        >
          Classes  +
            </NavLink>
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

      </section>
    );
  }
}

export default SchoolClassList;
