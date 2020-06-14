import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';

export default class FlightAttendantInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect : false
    }
  }

  componentDidMount(){
    //fetch UA357
  }

  sendForm(){
    let date = document.getElementById("date").value;
    let arrival = document.getElementById("arrival").value;
    let departure = document.getElementById("departure").value;

    let tempState = this.state;
    tempState.redirect = true;
    this.setState(tempState);

    axios.post(`/api/flight/formSubmit`, { date, arrival, departure })
        .then(res => {
            this.props.setState({flightCode: res.data.code});
      })
    
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/flight/code' />
    }
  }

  render() {
    return (
      <div>
                {this.renderRedirect()}
                <div className="hero is-fullheight is-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="#F2F5EA" fill-opacity="1" d="M0,192L24,181.3C48,171,96,149,144,133.3C192,117,240,107,288,128C336,149,384,203,432,208C480,213,528,171,576,138.7C624,107,672,85,720,90.7C768,96,816,128,864,160C912,192,960,224,1008,250.7C1056,277,1104,299,1152,261.3C1200,224,1248,128,1296,96C1344,64,1392,96,1416,112L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
                    </svg>
                    <div className="absolutelyCentered">
                        <p className="title" >Welcome, UA3513</p>
                        <p className="subtitle" >Enter your departure city:</p>
                        <input type="text" id="departure"/>
                        <br /><br />
                        <p className="subtitle">Enter your arrival city:</p>
                        <input type="text" id="arrival"/>
                        <br /><br />
                        <p className="subtitle">Enter your arrival date:</p>
                        <input type="date" id="date" />
                        <hr />
                        <button type="button" className="button is-dark" onClick={() => this.sendForm()}>Submit</button>
                    </div>
                </div>
            </div>
    );
  }
}