import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HomeworkItem from '../HomeworkItem/HomeworkItem';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails';
import Placeholder from '../Placeholder/Placeholder';
import ApiContext from '../ApiContext/ApiContext';
import './HomeworkList.css';

class HomeworkList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    homeworkList: [],
    heading: '',
    message: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  homeworkClicked(homeworkId) {
    this.setState({ clicked: true });
    this.context.setHomeworkId(homeworkId);
  }

  closeHomework() {
    this.setState({ clicked: false });
  }


  render() {
    const { homeworkList } = this.props;
    const { message } = this.props;
    return (
      <div className='HomeWorkList'>
        <div className='titleAndAddButton'>
          <div className='homeworkTitle'>
            {this.props.heading}
          </div>
          <div className="addHomeWorkPath">
            {/*if user has added a school class enable add homework button */}
            {(this.context.schoolClasses.length) ?
              <NavLink
                to={`/add-homework`}
              >
                Add Homework
        </NavLink> : ""
            }
          </div>
        </div>
        {
        /*if user has added homework show homework list, otherwise show place holder with instructions get started.  Acts as a landing page */
          (homeworkList.length) ?
            (this.state.clicked) ? <HomeworkDetails homeworkid={this.context.getHomeworkId()} hideHomework={() => { this.setState({ clicked: false }) }} /> :
              <div className="hwlist">
                <ul className='HomeworkList__list' aria-live='polite'>
                  {homeworkList.map(homework =>
                    <li key={homework.homeworkid} id="homework" onClick={() => this.homeworkClicked(homework.homeworkid)}>
                      <HomeworkItem
                        key={homework.homeworkid}
                        {...homework}
                      />
                    </li>
                  )}
                </ul>
              </div>
            : <div>  <Placeholder
              message={message}

            /></div>
        }
      </div>

    );
  }
}

export default HomeworkList;
