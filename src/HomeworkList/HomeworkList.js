import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HomeworkItem from '../HomeworkItem/HomeworkItem';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails';
import Placeholder from '../Placeholder/Placeholder';
import ApiContext from '../ApiContext/ApiContext';
import './HomeworkList.css';

class HomeworkList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    homeworkList: [],
    heading:'',
    message:''
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
    let display="none";
    
    const { homeworkList } = this.props;
    const {message} = this.props;
    console.log(homeworkList);
    return (
   
      <div className='HomeWorkList'>
         <div className= 'titleAndAddButton'>
           <div className='homeworkTitle'>
        
            {this.props.heading}
          
            </div>
            <div className="addHomeWorkPath">
        {(this.context.schoolClasses.length)?
        
          <NavLink
            to={`/add-homework`}
          >
            Add Homework
        </NavLink>:""
        }
        </div>
        </div>
        {
(homeworkList.length)?
          
          (this.state.clicked) ? <HomeworkDetails homeworkid={this.context.getHomeworkId()} hideHomework={() => { this.setState({ clicked: false }) }} /> :
            <div className="hwlist">
            <ul className='HomeworkList__list' aria-live='polite'>
              {homeworkList.map(homework =>
                <li  key={homework.homeworkid} id="homework" onClick={() => this.homeworkClicked(homework.homeworkid)}>
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
