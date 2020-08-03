import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HomeworkItem from '../HomeworkItem/HomeworkItem';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails';
import ApiContext from '../ApiContext/ApiContext';
import './HomeworkList.css';

class HomeworkList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    homeworkList: []
  };

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  homeworkClicked(homeworkId) {
    console.log("homeworkid " + homeworkId);
    this.setState({ clicked: true });
    this.context.setHomeworkId(homeworkId);
    console.log("h2!" + this.context.getHomeworkId());
  }

  closeHomework(classId) {

    this.setState({ clicked: false });

  }


  render() {
    const { homeworkList } = this.props
    console.log(homeworkList);
    return (
      <section className='HomeWorkList'>
         <div className= 'titleAndAddButton'>
          <span className='homeworkTitle'>
            Homework
            </span>
        {(this.context.schoolClasses.length)?
          <NavLink className="addHomeWorkPath"
            to={`/add-homework`}
          >
            Add Homework
        </NavLink>:""
       
        }
        </div>
        {


          (this.state.clicked) ? <HomeworkDetails homeworkid={this.context.getHomeworkId()} hideHomework={() => { this.setState({ clicked: false }) }} /> :
            <ul className='SchoolClassList__list' aria-live='polite'>
              {homeworkList.map(homework =>
                <li id="homework" onClick={() => this.homeworkClicked(homework.homeworkid)}>
                  <HomeworkItem
                    key={homework.homeworkid}
                    {...homework}
                  />
                </li>
              )}
            </ul>
        }
      </section>
    );
  }
}

export default HomeworkList;
