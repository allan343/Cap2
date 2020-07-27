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
        //fetches the shows from my endpoint and placed them in my array in state


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



    contest = (classId) => {
        alert('hi');
    }
    setClassClicked = (classId) => {
        console.log("classid " + classId);
        this.setState({ classClicked: true });
        this.setClassId(classId);
        //alert("hi!");
        //console.log("h1!"+ this.context.getClassId());
    }

    closeClass = () => {
        console.log("closeclass?")
        this.setState({ classClicked: false });

    }


    handleUpdateSchoolClass = (classObject, classId) => {


        let schoolClass = this.state.schoolClasses.find(schoolClass => schoolClass.id == classId);
        for (let key in schoolClass) {
            schoolClass[key] = classObject[key];
        }
        this.setState({
            schoolClasses: this.state.schoolClasses
        });


    };


    handleAddSchoolClass = (classObject) => {
        console.log(classObject);
        console.log(config.API_ENDPOINT);
        console.log("add") ;
            fetch(`${config.API_ENDPOINT}/schoolClass`, { headers: { 'content-type': 'application/json' }, method: "POST", body: JSON.stringify(classObject) })
                .then(response => response.json())
                .then(responseJson => {
                    console.log("add2") ;
                    if (responseJson.id) {
                        let newid = responseJson.id;
                        const newArr = [...this.state.schoolClasses, responseJson];
                        this.setState({
                            schoolClasses: newArr
                        });
                        // newId(newid);
                        console.log("add3") ;
                    }
                })
        /*
                console.log(classObject);
                    // this.state.schoolClasses.push(classObject);
                    const newArr= [...this.state.schoolClasses, classObject];
                     this.setState({
                        schoolClasses: newArr
                    });  */
     };

    //deletes a show from the backend
    // deletes a show from the front end in the state array holding all shows
    handleDeleteClass = classId => {
        console.log(classId);
        this.setState({
            schoolClasses: this.state.schoolClasses.filter(schoolClass => schoolClass.id != classId)
        });

    };

    handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
                return schoolClass.id == id;
            });
    };

    setClassId = (classId) => {
        //console.log("context id "+classId);
        this.setState({
            id: classId
        });
        //console.log("set id "+this.state.classId);

    };

    getClassId = () => {
        console.log("get id " + this.state.id);
        return this.state.id;
    };


    handleUpdateSchoolClass = (classObject, classId) => {


        let schoolClass = this.state.schoolClasses.find(schoolClass => schoolClass.id == classId);
        for (let key in schoolClass) {
            schoolClass[key] = classObject[key];
        }
        this.setState({
            schoolClasses: this.state.schoolClasses
        });


    };

/*
    handleAddSchoolClass = (classObject) => {
        console.log(classObject);
        // this.state.schoolClasses.push(classObject);
        const newArr = [...this.state.schoolClasses, classObject];
        this.setState({
            schoolClasses: newArr
        });
    };
*/
    //deletes a show from the backend
    // deletes a show from the front end in the state array holding all shows
    handleDeleteClass = classId => {
        fetch(`${config.API_ENDPOINT}/schoolClass/${classId}`, { method: "DELETE" })
        .then(response => {response.json()
            console.log(response);
        })
        .then(responseJson => {
            console.log("here?");
            console.log()
            this.setState({
                schoolClasses: this.state.schoolClasses.filter(schoolClass => schoolClass.id != classId)
            });
        });

        /*
        console.log(classId);
        this.setState({
            schoolClasses: this.state.schoolClasses.filter(schoolClass => schoolClass.id != classId)
        });*/
    };

    handleGetClass = (id) => {
        return this.state.schoolClasses.find(
            function (schoolClass) {
                return schoolClass.id == id;
            });
    };

    setClassId = (classId) => {
        //console.log("context id "+classId);
        this.setState({
            id: classId
        });
        //console.log("set id "+this.state.classId);

    };

    getClassId = () => {
        console.log("get id " + this.state.id);
        return this.state.id;
    };


    //homework methods
    //
    //
    //

    handleUpdateHomework = (homeworkObject, homeworkId) => {

        console.log("update being called?");
        let homework = this.state.homeworkList.find(homework => homework.homeworkid == homeworkId);
        for (let key in homework) {
            homework[key] = homeworkObject[key];
        }
        this.setState({
            homeworkList: this.state.homeworkList
        });
    };


    handleAddHomework = (homeworkObject) => {

        fetch(`${config.API_ENDPOINT}/homework`, { headers: { 'content-type': 'application/json' }, method: "POST", body: JSON.stringify(homeworkObject) })
        .then(response => response.json())
        .then(responseJson => {
            console.log("addhw2") ;
            console.log(responseJson);
            if (responseJson.homeworkid) {
                let newid = responseJson.id;
                const newArr = [...this.state.homeworkList, responseJson];
                this.setState({
                    homeworkList: newArr
                });
             
                console.log("addhw3") ;
            }
        })






/*

        const newArr = [...this.state.homeworkList, homeworkObject];
        console.log(newArr);
        this.setState({
            homeworkList: newArr
        });*/
        //console.log("homeworkList"+this.state.homeworkList);
    };

    //deletes a show from the backend
    // deletes a show from the front end in the state array holding all shows
    handleDeleteHomework = homeworkId => {
        this.setState({
            homeworkList: this.state.homeworkList.filter(homeworkClass => homeworkClass.homeworkid != homeworkId)
        });

    };

    handleGetHomework = (id) => {
        return this.state.homeworkList.find(
            function (homework) {
                return homework.homeworkid == id;
            });
    };

    setHomeworkId = (homeworkId) => {
        console.log(homeworkId);
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
            getFirstClassName: this.getFirstClassName,
            getFirstClassId: this.getFirstClassId
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