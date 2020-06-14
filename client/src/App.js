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
import FlightAttendantInput from './components/FlightAttendantInput'
import FormCanada from './components/form_Canada';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <FlightCode />
          </Route>
          <Route path="/auth">
            <AuthenticationCode />
          </Route>
          <Route path="/form/Canada">
            <FormCanada />
          </Route>
          {/**Medical Records should be a component of the forms */}
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/flight/form">
            <FlightAttendantCode />
          </Route>
          <Route path="/flight/code">
            <FlightAttendantInput />
          </Route>
        </Switch>
      </Router>
    </div>
  );
=======
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
        destinationAirport: ''
      }
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
              <AuthenticationCode Parameters={this.state.Parameters} />
            </Route>
            <Route path="/form/Canada">
              <FormCanada />
            </Route>
            {/**Medical Records should be a component of the forms */}
            <Route path="/summary">
              <Summary />
            </Route>
            <Route path="/flight/form">
              <FlightAttendantCode />
            </Route>
            <Route path="/flight/code">
              <FlightAttendantInput />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } 
>>>>>>> Stashed changes
}

export default App;
