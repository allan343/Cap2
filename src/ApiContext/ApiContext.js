import React from 'react';

export default React.createContext({
  //context methods

  schoolClasses: [],
  homeworkList: [],
  classClicked: false,
  addSchoolClass: () => { },
  deleteClass: () => { },
  getClass: () => { },
  updateClass: () => { },
  getClassId: () => { },
  setClassId: () => { },

  addHomework: () => { },
  deleteHomework: () => { },
  getHomework: () => { },
  updateHomework: () => { },
  getHomeworkId: () => { },
  setHomeworkId: () => { },
  setClassClicked: ()=>{ },
  closeClass: ()=>{ },
  contest: ()=>{},
  
})