import React from 'react';
import ApiContext from '../ApiContext/ApiContext';
import HeaderNav from '../HeaderNav/HeaderNav';
import SchoolClassList from '../SchoolClassList/SchoolClassList';
import HomeworkList from '../HomeworkList/HomeworkList'
import '../main.css';

export default class Home extends React.Component {
  static contextType = ApiContext;

  render() {
    //in the event a user has not added a school class yet, this message in the placeholder component
    // tells the user how to get started.  acts as a landing page with instructins
    let message = "This is where all your classes will be displayed.  Click on \"Add Class\" to add a class. \
     Then click on a class to see class details and homework due for that class.";
    //in the event a user has not added a homework yet, this message in the placeholder component
    // tells the user how to get started.  acts as a landing page with instructins
    let homeworkMessage = "This is where your assignments, tests and projects will be displayed. First add a school class, then add a homework by clicking on \"Add Homework\"."
    // when a user selects a class with no homework, this message shows
    let emptyHomework = "There is no homework for this class."
    return (

      <div className='HomeworkMain__button-container'>

        <HeaderNav></HeaderNav>

        <div className="columns">
          <SchoolClassList message={message} schoolClasses={this.context.schoolClasses} ></SchoolClassList>
          {/* if a class is clicked, only show homework that class has. otherwise show all homework */}
          {(this.context.classClicked) ? <HomeworkList message={emptyHomework} heading="Homework" homeworkList={this.context.homeworkList.filter(homework => homework.classid == this.context.getClassId())} ></HomeworkList> :
            <HomeworkList message={homeworkMessage} heading="Homework" homeworkList={this.context.homeworkList} ></HomeworkList>

          }
        </div>
      </div>
    )
  }
}