import React, { Component } from "react";
import '../style/css/custom-bulma.css';
import '../style/css/style.css';

export default class FlightAttendantCode extends Component {
  render() {
    return (
      <div>
        <div className="hero is-fullheight is-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F2F5EA" fill-opacity="1" d="M0,192L24,181.3C48,171,96,149,144,133.3C192,117,240,107,288,128C336,149,384,203,432,208C480,213,528,171,576,138.7C624,107,672,85,720,90.7C768,96,816,128,864,160C912,192,960,224,1008,250.7C1056,277,1104,299,1152,261.3C1200,224,1248,128,1296,96C1344,64,1392,96,1416,112L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
          </svg>
          <div className="absolutelyCentered">
            <p className="title" >Thank you, UA35313 for entering your flight information.</p>
            <p className="subtitle" >Here is your code:</p>
            <input className="input is-large" type="text"value={this.props.flightCode} disabled />
          </div>
        </div>
      </div>
    );
  }
}