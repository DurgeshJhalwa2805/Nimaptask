import React,{ Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Signin from "./components/auth/Signin";
import Home from "./components/Home";
import Task from "./components/Task";
import User from "./components/User";

function App() {

  //authentication check creating
  const [isAuthenticated,setAuthentication] = useState(false)

    // new user gets create
  const [user ,setNewUser]=useState({
    username:"",
    password:""
  })

  return (
    <Fragment>
    <Router>
    <Switch>
    <Route exact path="/login"><Signin  setNewUser={setNewUser} setAuthentication={setAuthentication} history={useHistory} /></Route>
    <Route exact path="/"><Home history={useHistory} isAuthenticated={isAuthenticated} /></Route>
    <Route exact path="/task"><Task isAuthenticated={isAuthenticated} history={useHistory} /></Route>
    <Route exact path="/user"><User  user={user} history={useHistory} isAuthenticated={isAuthenticated} logout={setAuthentication} changePassword={setNewUser} /></Route>
    </Switch>
    </Router>
    </Fragment>
  );
}

export default App;
