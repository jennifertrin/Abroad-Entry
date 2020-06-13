import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlightCode from './components/user_flightCode';
import AuthenticationCode from './components/user_authenticationCode';
import Summary from './components/user_summary';
import FlightAttendantCode from './components/FlightAttendantCode';
import FlightAttendantInput from './components/FlightAttendantInput'

function App() {
  return (
    <div className="App">
      {/*<FlightCode />*/}
      {/*<AuthenticationCode />*/}
      {/*<Summary />*/}
      {/*<FlightAttendantCode />*/}
      <FlightAttendantInput />
    </div>
  );
}

export default App;
