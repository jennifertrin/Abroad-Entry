import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';

class AuthenticationCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }

    onLanguageChange(lang){

    }

    authenticateCode(code){
        //validated from the value
        axios.post(`api/user/passportValidation`, { code })
        .then(res => {
            this.setState({validation: res.data.result});
            if(this.state.validation === true){
                let tempState = this.state;
                tempState.redirect = true;
                this.setState(tempState);
                this.props.setState({identificationNumber: code});
            }
            else{
                console.log("WRONG PASSENGER NUMBER");
            }
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

        return(
            <div>
                {this.renderRedirect()}
                <Navbar languageChange={this.onLanguageChange.bind(this)} />
                <div className="hero is-fullheight is-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#F2F5EA" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,245.3C960,267,1200,277,1320,282.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>

                    <div className="absolutelyCentered">
                        <p className="is-size-2"><strong>Thank you</strong> for flying with us, <strong>{Data.airline}</strong>, from <strong>{Data.originAirport}</strong> to <strong>{Data.destinationAirport}</strong>.</p>
                        <br />
                        <div className = "box">For verification that you are a passenger, please enter your passport #.</div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Passport Number:</label>
                            <div className="control">
                                <input className="input" type="text" id="passportNumber" />
                            </div>
                        </div>
                        <button type="button" className="button is-dark" onClick={() => this.authenticateCode(document.getElementById("passportNumber").value)}>Submit</button>
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