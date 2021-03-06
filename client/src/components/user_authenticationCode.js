import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

class AuthenticationCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            localization : {
                thanks: en.AuthenticationCode.thanks,
                for_flying: en.AuthenticationCode.for_flying,
                from: en.AuthenticationCode.from,
                to: en.AuthenticationCode.to,
                subtitle: en.AuthenticationCode.subtitle,
                passportNum: en.AuthenticationCode.passportNum,
                submit: en.AuthenticationCode.submit
            }
        }
    }

    onLanguageChange(lang){
        let tempState = this.state;

        if(lang === 'en'){
            tempState.localization.thanks = en.AuthenticationCode.thanks;
            tempState.localization.for_flying = en.AuthenticationCode.for_flying;
            tempState.localization.from = en.AuthenticationCode.from;
            tempState.localization.to = en.AuthenticationCode.to;
            tempState.localization.subtitle = en.AuthenticationCode.subtitle;
            tempState.localization.passportNum = en.AuthenticationCode.passportNum;
            tempState.localization.submit = en.AuthenticationCode.submit;
        }
        else if(lang === 'fr'){
            tempState.localization.thanks = fr.AuthenticationCode.thanks;
            tempState.localization.for_flying = fr.AuthenticationCode.for_flying;
            tempState.localization.from = fr.AuthenticationCode.from;
            tempState.localization.to = fr.AuthenticationCode.to;
            tempState.localization.subtitle = fr.AuthenticationCode.subtitle;
            tempState.localization.passportNum = fr.AuthenticationCode.passportNum;
            tempState.localization.submit = fr.AuthenticationCode.submit;
        }else if(lang === 'es'){
            tempState.localization.thanks = es.AuthenticationCode.thanks;
            tempState.localization.for_flying = es.AuthenticationCode.for_flying;
            tempState.localization.from = es.AuthenticationCode.from;
            tempState.localization.to = es.AuthenticationCode.to;
            tempState.localization.subtitle = es.AuthenticationCode.subtitle;
            tempState.localization.passportNum = es.AuthenticationCode.passportNum;
            tempState.localization.submit = es.AuthenticationCode.submit;
        }
        else{
            console.log("error switching languages");
        }
        
        this.setState(tempState);
    }

    authenticateCode(code){
        //validated from the value
        axios.post(`api/user/passportValidation`, { code })
        .then(res => {
            this.setState({validation: res.data.result});
            let tempState = this.state;
            if(this.state.validation === true){
                tempState.redirect = true;
                this.props.setState({identificationNumber: code});
            }
            else{
                console.log("WRONG PASSENGER NUMBER");
                tempState.errorMessage = true;
            }
            this.setState(tempState);
      })
    }

    renderRedirect = () => {
        const destination = '/form/'.concat(this.props.Parameters.accompanyingForm);
        

        if (this.state.redirect) {

            return <Redirect to='/form/Canada' />
            /*
            console.log(this.props.Parameters.accompanyingForm);
            if(this.props.Parameters.accompanyingForm == "Canada"){
                return <Redirect to='/form/Canada' />
            }*/
            //return <Redirect to={destination} />
            //redirects to the proper form
        }
    }

    render(){
        const Data = this.props.Parameters;
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
                        <p className="is-size-2"><strong>{localization.thanks}</strong> {localization.for_flying} <strong>{Data.airline}</strong>, {localization.from} <strong>{Data.originAirport}</strong> {localization.to} <strong>{Data.destinationAirport}</strong>.</p>
                        <br />
                        <div className = "box">{localization.subtitle}</div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.passportNum}</label>
                            <div className="control">
                                <input className="input" type="text" id="passportNumber" />
                            </div>
                            {this.state.errorMessage ? 
                                <p className="help has-text-right has-text-white">Passport Number Not Valid!</p>
                                :
                                <div />
                            }
                        </div>
                        <button type="button" className="button is-dark" onClick={() => this.authenticateCode(document.getElementById("passportNumber").value)}>{localization.submit}</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default AuthenticationCode;
/*


                    <div className="jumbotron jumbotron-fluid is-fullheight">
                        <div className="container absolutelyOneThird">
                            <h2>Thank you for flying with us, {Data.airline}, from {Data.originAirport} to {Data.destinationAirport}.</h2>
                            <h4>For verification that you are a passenger, please enter your passport #.</h4>
                            <input type="text" className="form-control mr-50" id="passportNumber" />
                            <br /> <br />
                            <button type="button" class="Submit btn-lg" onClick={() => this.authenticateCode(document.getElementById("passportNumber").value)}>Submit</button>
                        </div>
                    </div>
                    
                </div>
*/