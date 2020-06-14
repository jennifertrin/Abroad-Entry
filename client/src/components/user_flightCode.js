import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Languages from './languages';
import axios from 'axios';

class FlightCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            validation: false,
            redirect: false
        }
    }

    onLanguageChange(lang){

    }
    
    validateCode(code){
        axios.post(`api/user/codeValidation`, { code })
        .then(res => {
            this.setState({validation: res.data.result});
            let Parameters = {
                validFlight : res.data.result,
                airline: res.data.airline,
                originAirport: res.data.originAirport,
                destinationAirport: res.data.destinationAirport,
                accompanyingForm: res.data.accompanyingForm
            }
            this.props.setState({Parameters: Parameters});
            if(this.state.validation === true){
                let tempState = this.state;
                tempState.redirect = true;
                this.setState(tempState);
                //send state up to state
            }
            else{
                console.log("WRONG FLIGHT CODE");
            }
      })
      //go to next page with code that stored in this.state.validation
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/auth' />
        }
    }

    render(){
        return(
            <div class="user_flightCode">
                {this.renderRedirect()}
                <div class="panelLanguages">
                    {/**Logo goes here */}
                    <Languages languageChange={this.onLanguageChange.bind(this)} />
                </div>
                <div id="welcomeScreen">
                    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                        <text x="50%" y="15%" id="companyHeader">Welcome to Abroad Entry!</text>
                    </svg>
                </div>
                <div class="panelTravel">
                        <h2 class="instructions">Please enter the code provided by your flight attendants.</h2>
                </div>
                    <div class="input-group mb-3 input-group-lg code-input">
                        <div class="input-group-prepend">
                                <span class="input-group-text" id="codeSpan">Code</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Example: A8B6F6" id="flightCode" />
                    </div>
                <div class="SubmitButton">
                <button type="button" class="Submit btn-lg" onClick={() => this.validateCode(document.getElementById("flightCode").value)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default FlightCode;