import React, {useEffect, useState, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpClient from './utils/HttpClient';
// import axios from 'axios'
// ROUTER IMPORTS
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'
// // NAVBAR IMPORT
import Navbar from './components/Navbar/navbar';
// import Register from './components/Register/Register';
// // PAGE IMPORTS
// import HomePage from './pages/HomePage/HomePage';
// import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
// import Dashboard from './pages/Dashboard/Dashboard';
// // REDUX IMPORTS
import { store } from "./store";
import { loadUser } from "./actions/authActions"
// axios.defaults.baseURL = 'http://localhost:8081';

import opencollective from "./pages/Opencollective/Opencollective"
import signin from "./pages/AuthPage/Login"


class App extends Component{
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }
  // const [calendars] = useCalendars();

  render() {

    return (
      <div className="App">
      <Router>
          <Navbar />
          {/* <Route exact path='/' component={HomePage} /> */}
          <Route exact path='/opencollective' component={opencollective} />
          <Route exact path='/signin' component={signin} />
          {/* <Route exact path='/auth' component={AuthenticationPage} /> */}
          {/* <Route exact path='/register' component={Register} /> */}
          {/* <PrivateRoute exact path='/dashboard/:tab' component={Dashboard} /> */}
        </Router>
    </div>
  );
}
}

export default App;
