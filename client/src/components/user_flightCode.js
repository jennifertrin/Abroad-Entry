import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Navbar from './navbar';
import axios from 'axios';
import $ from 'jquery';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

class FlightCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            validation: false,
            redirect: false,
            errorMessage: false,
            localization : {
                title: en.FlightCode.title,
                subtitle: en.FlightCode.subtitle,
                code: en.FlightCode.code,
                example: en.FlightCode.example,
                submit: en.FlightCode.submit
            }
        }
    }

    onLanguageChange(lang){
        let tempState = this.state;

        if(lang === 'en'){
            tempState.localization.title = en.FlightCode.title;
            tempState.localization.subtitle = en.FlightCode.subtitle;
            tempState.localization.code = en.FlightCode.code;
            tempState.localization.example = en.FlightCode.example;
            tempState.localization.submit = en.FlightCode.submit;
        }
        else if(lang === 'fr'){
            tempState.localization.title = fr.FlightCode.title;
            tempState.localization.subtitle = fr.FlightCode.subtitle;
            tempState.localization.code = fr.FlightCode.code;
            tempState.localization.example = fr.FlightCode.example;
            tempState.localization.submit = fr.FlightCode.submit;
        }else if(lang === 'es'){
            tempState.localization.title = es.FlightCode.title;
            tempState.localization.subtitle = es.FlightCode.subtitle;
            tempState.localization.code = es.FlightCode.code;
            tempState.localization.example = es.FlightCode.example;
            tempState.localization.submit = es.FlightCode.submit;
        }
        else{
            console.log("error switching languages");
        }
        
        this.setState(tempState);
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
            let tempState = this.state;
            if(this.state.validation === true){
                tempState.redirect = true;
                //send state up to state
            }
            else{
                console.log("WRONG FLIGHT CODE");
                tempState.errorMessage = true;
            }
            this.setState(tempState);
      })
      //go to next page with code that stored in this.state.validation
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/auth' />
        }
    }

    render(){
        const localization = this.state.localization;

        return(
            <div>
                {this.renderRedirect()}
                <Navbar languageChange={this.onLanguageChange.bind(this)} />
                <div className="hero is-fullheight is-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#F2F5EA" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,245.3C960,267,1200,277,1320,282.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>
                    <div className="absolutelyCentered">
                        <p className="is-size-1">{localization.title}</p>
                        <div className = "box">{localization.subtitle}</div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.code}</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Example: A8B6F6" id="flightCode" />
                                
                            </div>
                            {this.state.errorMessage ? 
                                <p className="help has-text-right has-text-white">Flight Code Not Valid!</p>
                                :
                                <div />
                            }
                            
                        </div>
                        <button type="button" className="button is-dark" onClick={() => this.validateCode(document.getElementById("flightCode").value)}>{localization.submit}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlightCode;