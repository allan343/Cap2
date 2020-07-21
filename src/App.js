import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AddSchoolClassForm from './AddSchoolClassForm/AddSchoolClassForm';
import EditSchoolClassForm from './EditSchoolClassForm/EditSchoolClassForm';
import Home from './Home/Home';
import Calender from './Calender/Calender';
import Homework from './Homework/Homework';
import AddHomeworkForm from './AddHomeworkForm/AddHomeworkForm';
import EditHomeworkForm from './EditHomeworkForm/EditHomeworkForm';
import ApiContext from './ApiContext/ApiContext';



class App extends Component {
    state = {
        //array that holds all shows
       
        schoolClasses: [],
        homeworkList: [],
        classId:'',
        homeworkId:'',
        classClicked: false
    };

    contest = (classId)=> {
        alert('hi');
      }
  setClassClicked = (classId)=> {
    console.log("classid "+classId);
    this.setState({  classClicked: true });
    this.setClassId(classId);
  //alert("hi!");
  //console.log("h1!"+ this.context.getClassId());
  }

  closeClass=()=> {
    console.log("closeclass?")
    this.setState({  classClicked: false });
   
  }

    
    handleUpdateSchoolClass = (classObject, classId) => {

  
                    let schoolClass = this.state.schoolClasses.find(schoolClass => schoolClass.classId == classId);
                    for (let key in schoolClass) {
                        schoolClass[key] = classObject[key];
                    }
                    this.setState({
                        schoolClasses: this.state.schoolClasses
                    });
                
        
    };


    handleAddSchoolClass = (classObject) => {
                console.log(classObject);
                    // this.state.schoolClasses.push(classObject);
                    const newArr= [...this.state.schoolClasses, classObject];
                     this.setState({
                        schoolClasses: newArr
                    });  
     };

      //deletes a show from the backend
    // deletes a show from the front end in the state array holding all shows
    handleDeleteClass = classId => {
        console.log(classId);
                this.setState({
                    schoolClasses: this.state.schoolClasses.filter(schoolClass => schoolClass.classId != classId)
                });
            
    };

     handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
            return schoolClass.classId == id;
        });
    };

    setClassId = (classId) => {
        //console.log("context id "+classId);
        this.setState({
            classId: classId
        });
        //console.log("set id "+this.state.classId);
     
    };

    getClassId = () => {
        console.log("get id "+this.state.classId);
        return this.state.classId;
    };


    handleUpdateSchoolClass = (classObject, classId) => {

  
                    let schoolClass = this.state.schoolClasses.find(schoolClass => schoolClass.classId == classId);
                    for (let key in schoolClass) {
                        schoolClass[key] = classObject[key];
                    }
                    this.setState({
                        schoolClasses: this.state.schoolClasses
                    });
                
        
    };


    handleAddSchoolClass = (classObject) => {
                console.log(classObject);
                    // this.state.schoolClasses.push(classObject);
                    const newArr= [...this.state.schoolClasses, classObject];
                     this.setState({
                        schoolClasses: newArr
                    });  
     };

      //deletes a show from the backend
    // deletes a show from the front end in the state array holding all shows
    handleDeleteClass = classId => {
        console.log(classId);
                this.setState({
                    schoolClasses: this.state.schoolClasses.filter(schoolClass => schoolClass.classId != classId)
                });
            
    };

     handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
            return schoolClass.classId == id;
        });
    };

    setClassId = (classId) => {
        //console.log("context id "+classId);
        this.setState({
            classId: classId
        });
        //console.log("set id "+this.state.classId);
     
    };

    getClassId = () => {
        console.log("get id "+this.state.classId);
        return this.state.classId;
    };


    //homework methods
    //
    //
    //

    handleUpdateHomework = (homeworkObject, homeworkId) => {

        console.log("update being called?");
        let homework = this.state.homeworkList.find(homework => homework.homeworkId == homeworkId);
        for (let key in homework) {
            homework[key] = homeworkObject[key];
        }
        this.setState({
            homeworkList: this.state.homeworkList
        });
    

};


handleAddHomework = (homeworkObject) => {
        
        const newArr= [...this.state.homeworkList, homeworkObject];
        console.log(newArr);
         this.setState({
           homeworkList: newArr
        });  
        //console.log("homeworkList"+this.state.homeworkList);
};

//deletes a show from the backend
// deletes a show from the front end in the state array holding all shows
handleDeleteHomework = homeworkId => {
    this.setState({
        homeworkList: this.state.homeworkList.filter(homeworkClass => homeworkClass.homeworkId != homeworkId)
    });

};

handleGetHomework = (id) => {
return this.state.homeworkList.find(
function (homework) {
return homework.homeworkId == id;
});
};

setHomeworkId = (homeworkId) => {
console.log(homeworkId);
this.setState({
homeworkId: homeworkId
});


};

getHomeworkId = () => {

return this.state.homeworkId;
};

    renderNavRoutes() {

        return (
            <>
                <Route
                    key={'/'}
                    exact path={'/'}
                    component={Home}
                />

                <Route
                    key={'/calender'}
                    exact path={'/calender'}
                    component={Calender}
                />

                <Route
                    key={'/homework'}
                    exact path={'/homework'}
                    component={Homework}
                />

                <Route exact path="/add-class" render={
                    (routeProps) => {
                        return <AddSchoolClassForm {...routeProps}>
                        </AddSchoolClassForm>
                    }} />
              
              <Route exact path="/edit-class" render={
                    (routeProps) => {
                        return <EditSchoolClassForm {...routeProps}>
                        </EditSchoolClassForm>
                    }} />

            <Route exact path="/ClassDetails/Edit/:classId" render={
                    (routeProps) => {
                        return <EditSchoolClassForm {...this.handleGetClass(routeProps.match.params.classId)}  {...routeProps}>
                        </EditSchoolClassForm>
                    }} />

<Route exact path="/add-homework" render={
                    (routeProps) => {
                        return <AddHomeworkForm {...routeProps}>
                        </AddHomeworkForm>
                    }} />

<Route exact path="/edit-homework" render={
                    (routeProps) => {
                        return <EditHomeworkForm {...routeProps}>
                        </EditHomeworkForm>
                    }} />

            <Route exact path="/HomeworkDetails/Edit/:homeworkId" render={
                    (routeProps) => {
                        return <EditHomeworkForm {...this.handleGetHomework(routeProps.match.params.homeworkId)}  {...routeProps}>
                        </EditHomeworkForm>
                    }} />
            </>
        );
    }

    renderMainRoutes() {
    }


    render() {
        const value = {
            schoolClasses: this.state.schoolClasses,
            homeworkList: this.state.homeworkList,
            classClicked: this.state.classClicked,
            addSchoolClass: this.handleAddSchoolClass,
            deleteClass: this.handleDeleteClass,
            updateClass: this.handleUpdateSchoolClass,
            setClassId: this.setClassId,
            getClassId: this.getClassId,
            getClass: this.handleGetClass,
            addHomework: this.handleAddHomework,
            deleteHomework: this.handleDeleteHomework,
            updateHomework: this.handleUpdateHomework,
            setHomeworkId: this.setHomeworkId,
            getHomeworkId: this.getHomeworkId,
            getHomework: this.handleGetHomework,
            setClassClicked: this.setClassClicked,
            closeClass: this.closeClass,
            constest: this.contest


           
        };
        return (
           
           <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App__header">
              
                    </header>
                    <div >{this.renderNavRoutes()}</div>
                  <div >{this.renderMainRoutes()}</div>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;