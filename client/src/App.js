import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlightCode from './components/user_flightCode';
import AuthenticationCode from './components/user_authenticationCode';
import Summary from './components/user_summary';
import FlightAttendantCode from './components/FlightAttendantCode';
import FlightAttendantInput from './components/FlightAttendantInput'
import FormCanada from './components/form_Canada';

function App() {
  return (
    <div className="App">
      
      {/*<AuthenticationCode />*/}
      {/*<Summary />*/}
      {/*<FlightAttendantCode />*/}
      {/*<FlightAttendantInput />*/}
      <FormCanada />
    </div>
  );
}

export default App;
