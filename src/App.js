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
import config from './config';

class App extends Component {
    state = {
        //array that holds all shows
        schoolClasses: [],
        homeworkList: [],
        id: '',
        homeworkid: '',
        classClicked: false
    };

    componentDidMount() {
        //fetches the schoolclasses and homework from my endpoint and placed them in my array in state

        fetch(`${config.API_ENDPOINT}/schoolClass`)
            .then((classRes) => {
                if (!classRes.ok)
                    return classRes.json().then(e => Promise.reject(e));
                return (classRes.json());
            })
            .then((schoolClasses) => {
                this.setState({ schoolClasses: schoolClasses });
            })
            .catch(error => {
            });

        fetch(`${config.API_ENDPOINT}/homework`)
            .then((homeworkRes) => {
                if (!homeworkRes.ok)
                    return homeworkRes.json().then(e => Promise.reject(e));
                return (homeworkRes.json());
            })
            .then((homeworkList) => {
                this.setState({ homeworkList: homeworkList });
            })
            .catch(error => {
            });
    }
    //keeps track of which class is clicked on to show revelant class details
    setClassClicked = (classId) => {
        this.setState({ classClicked: true });
        this.setClassId(classId);
    }

    //close class details
    closeClass = () => {
        this.setState({ classClicked: false });
    }

    //adds a school class to database and array in state
    handleAddSchoolClass = (classObject) => {

        fetch(`${config.API_ENDPOINT}/schoolClass`, { headers: { 'content-type': 'application/json' }, method: "POST", body: JSON.stringify(classObject) })
            .then(response => response.json())
            .then(responseJson => {

                if (responseJson.id) {
                    const newArr = [...this.state.schoolClasses, responseJson];
                    this.setState({
                        schoolClasses: newArr
                    });
                }
            })
    };

    handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
                return schoolClass.id == id;
            });
    };

    setClassId = (classId) => {
        this.setState({
            id: classId
        });
    };

    getClassId = () => {
        return this.state.id;
    };

    //updates class object in database and updates class array in state
    handleUpdateSchoolClass = (classObject, classId) => {

        fetch(`${config.API_ENDPOINT}/schoolClass/${classId}`, { headers: { 'content-type': 'application/json' }, method: "PATCH", body: JSON.stringify(classObject) })
            .then(response => response.json())
            .then(responseJson => {

                if (responseJson.id && responseJson.classname) {
                    let schoolClass = this.state.schoolClasses.find(schoolClass => schoolClass.id == classId);
                    for (let key in schoolClass) {
                        schoolClass[key] = classObject[key];
                    }
                    this.setState({
                        schoolClasses: this.state.schoolClasses
                    });
                }
            });

    };

    //deletes a class from the backend
    // deletes a class from the front end in the state array holding all classes
    handleDeleteClass = classId => {
        fetch(`${config.API_ENDPOINT}/schoolClass/${classId}`, { method: "DELETE" })
            .then(response => {
                response.json()
            })
            .then(responseJson => {
                this.setState({
                    schoolClasses: this.state.schoolClasses.filter(schoolClass => schoolClass.id !== classId)
                });
                let filteredHomework = this.state.homeworkList.filter(homework => homework.classid !== classId)
                this.setState({
                    homeworkList: filteredHomework
                });
            });
    };

    handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
                return schoolClass.id == id;
            });
    };

    setClassId = (classId) => {
        this.setState({
            id: classId
        });
    };

    getClassId = () => {
        return this.state.id;
    };


    //homework methods
    //
    //
    //

    //updates a homework object in database and updates in array holding all homework in state
    handleUpdateHomework = (homeworkObject, homeworkId) => {

        fetch(`${config.API_ENDPOINT}/homework/${homeworkId}`, { headers: { 'content-type': 'application/json' }, method: "PATCH", body: JSON.stringify(homeworkObject) })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.homeworkid && responseJson.homeworkdescription) {
                    let homework = this.state.homeworkList.find(homework => homework.homeworkid == homeworkId);
                    for (let key in homework) {
                        homework[key] = homeworkObject[key];
                    }
                    this.setState({
                        homeworkList: this.state.homeworkList
                    });
                }
            });

    };

    //adds a homework in database and array in state
    handleAddHomework = (homeworkObject) => {

        fetch(`${config.API_ENDPOINT}/homework`, { headers: { 'content-type': 'application/json' }, method: "POST", body: JSON.stringify(homeworkObject) })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.homeworkid) {
                    const newArr = [...this.state.homeworkList, responseJson];
                    this.setState({
                        homeworkList: newArr
                    });
                }
            })
    };

    //deletes a homework from the backend
    // deletes a homework from the front end in the state array holding all homework
    handleDeleteHomework = homeworkId => {

        fetch(`${config.API_ENDPOINT}/homework/${homeworkId}`, { method: "DELETE" })
            .then(response => {
                response.json()
            })
            .then(responseJson => {
                this.setState({
                    homeworkList: this.state.homeworkList.filter(homeworkClass => homeworkClass.homeworkid !== homeworkId)
                });
            });
    };

    handleGetHomework = (id) => {
        return this.state.homeworkList.find(
            function (homework) {
                return homework.homeworkid == id;
            });
    };

    setHomeworkId = (homeworkId) => {
        this.setState({
            homeworkid: homeworkId
        });
    };

    getHomeworkId = () => {
        return this.state.homeworkid;
    };

    getFirstClassName = () => {
        return this.state.schoolClasses[0].classname;
    }

    getFirstClassId = () => {
        return this.state.schoolClasses[0].id;
    }

    formatDate(date) {
        let DayString = '';
        let DateString = '';
        if (new Date(date).getUTCDate() < 10) {
            DayString = `0${new Date(date).getUTCDate()}`
        }
        else {
            DayString = `${new Date(date).getUTCDate()}`
        }
        if ((new Date(date).getUTCMonth()) < 9) {
            DateString = `${new Date(date).getFullYear()}-0${new Date(date).getUTCMonth() + 1}-${DayString}`
        }
        else {
            DateString = `${new Date(date).getFullYear()}-${new Date(date).getUTCMonth() + 1}-${DayString}`;
        }
        return (DateString);
    }

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
            getFirstClassName: this.getFirstClassName,
            getFirstClassId: this.getFirstClassId,
            formatDate: this.formatDate
        };
        return (

            <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App__header">

                    </header>
                    <div >{this.renderNavRoutes()}</div>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;