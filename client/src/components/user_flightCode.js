import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';
import React, { Component } from 'react';
import Languages from './languages';

class FlightCode extends Component {
    onLanguageChange(lang){

    }
    
    validateCode(code){
        //validated from the value
    }

    render(){
        return(
            <div class="user_flightCode">
                <div class="panelLanguages">
                    <Languages languageChange={this.onLanguageChange.bind(this)} />
                </div>
                <div id="welcomeScreen">
                    <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                        <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
                        <text x="50%" y="10%" id="companyHeader">Welcome to Abroad Entry!</text>
                    </svg>
                </div>
                    <div className="container absolutelyOneThird">
                    <div class="panelTravel">
                        <h2>Please enter the code provided by your flight attendants.</h2>
                    </div>
                        <div class="input-group mb-3 input-group-lg code-input">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="codeSpan">Code</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Example: A8B6F6" id="flightCode" />
                        </div>
                        <button type="button" class="Submit btn-lg" onClick={() => this.validateCode(document.getElementById("flightCode").value)}>Submit</button>
                    </div>
                
            </div>
        );
    }
}

export default FlightCode;