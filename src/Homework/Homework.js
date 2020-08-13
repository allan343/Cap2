import React from 'react';

import HomeworkList from '../HomeworkList/HomeworkList';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';
import '../main.css';

export default class Home extends React.Component {
  static contextType = ApiContext;

  render() {
    // get the present date
    var Now = Date.now();
    let pendingMessage="Nothing upcoming.";
    let dueMessage ="Nothing is late."
    return (
      <div className='HomeWorkPage'>
       
       <HeaderNav></HeaderNav>
       <div className="columns">
      {/*filter by homework that has due date before now date, hence it is late*/}
      <HomeworkList message ={dueMessage} heading="Late" homeworkList={this.context.homeworkList.filter(homework =>new Date(homework.duedate) < Now)} ></HomeworkList>
          {/*filter by homework that has due date after now date, hence it is not late*/}
       <HomeworkList  message= {pendingMessage}heading = "Upcoming" homeworkList={this.context.homeworkList.filter(homework => new Date(homework.duedate) > Now)} ></HomeworkList>
    
      </div>
      </div>
    )
  }
}