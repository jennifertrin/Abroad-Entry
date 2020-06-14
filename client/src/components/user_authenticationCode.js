import React, { Component } from 'react';
import '../style/style.css';
import Languages from './languages';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

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
            return <Redirect to={destination} />
            //redirects to the proper form
        }
    }

    render(){
        const Data = this.props.Parameters;

        return(
            <div>
                {this.renderRedirect()}
                <div class="panelLanguages">
                    {/**Logo goes here */}
                    <Languages languageChange={this.onLanguageChange.bind(this)} />
                </div>
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
        );
    }

}

export default AuthenticationCode;