import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HomeworkItem from '../HomeworkItem/HomeworkItem';
import HomeworkDetails from '../HomeworkDetails/HomeworkDetails';
import ApiContext from '../ApiContext/ApiContext';

class HomeworkList extends Component {
  static contextType = ApiContext;

  static defaultProps = {
    homeworkList: []
  };

  constructor(props)
  {
    super(props);
  this.state = {
    clicked: false
  };
  }
  homeworkClicked(homeworkId) {
    console.log("homeworkid "+homeworkId);
    this.setState({  clicked: true });
    this.context.setHomeworkId(homeworkId);
  //alert("hi!");
  console.log("h2!"+ this.context.getHomeworkId());
  }

  closeHomework(classId) {
 
    this.setState({  clicked: false });
   
  }


  render() {
    const { homeworkList } = this.props
    console.log(homeworkList);
    return (
      <section className='HomeWorkList'>
        {
     <NavLink className="addHomeWorkPath"
        to={`/add-homework`}  
        >
        Homework  +
        </NavLink>
  }
     {
   
       
     (this.state.clicked)? <HomeworkDetails homeworkId={this.context.getHomeworkId()} hideHomework={()=>{this.setState({clicked:false})}} /> :
      <ul className='SchoolClassList__list' aria-live='polite'>
          {homeworkList.map(homework =>
            <li id="homework" onClick={() => this.homeworkClicked(homework.homeworkId)}>
              <HomeworkItem
              key={homework.homeworkId}
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
