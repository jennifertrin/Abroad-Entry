import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import FlightCode from './components/user_flightCode';
import AuthenticationCode from './components/user_authenticationCode';
import Summary from './components/user_summary';
import FlightAttendantCode from './components/FlightAttendantCode';
import FlightAttendantInput from './components/FlightAttendantInput';
import Medical from './components/medicalRecords';
import FormCanada from './components/form_Canada';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Data: [

      ],
      Parameters: {
        validFlight : false,
        airline: '',
        originAirport: '',
        destinationAirport: '',
        accompanyingForm: ''
      },
      identificationNumber: ''
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <FlightCode setState={this.setState.bind(this)} />
            </Route>
            <Route path="/auth">
              <AuthenticationCode Parameters={this.state.Parameters} setState={this.setState.bind(this)} />
            </Route>
            <Route path="/form/Canada">
              <FormCanada />
            </Route>
            {/*<Route path="/form/America">
              <FormAmerica />
            </Route>
            <Route path="/form/Mexico">
              <FormMexico />
            </Route>*/}
            <Route path="/MedicalRecords">
              <Medical />
            </Route>
            <Route path="/summary">
              <Summary />
            </Route>
            <Route path="/flight/code">
              <FlightAttendantCode />
            </Route>
            <Route path="/flight/form">
              <FlightAttendantInput />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
