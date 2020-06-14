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
            console.log(res.data);
            this.setState({validation: res.data.result});
            let Parameters = {
                validFlight : res.data.result,
                airline: res.data.airline,
                originAirport: res.data.originAirport,
                destinationAirport: res.data.destinationAirport
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
          //pass through state
        }
    }

    render(){
        return(
<<<<<<< Updated upstream
            <div>
                <div>
                    {/**Logo goes here */}
=======
            <div class="user_flightCode">
                {this.renderRedirect()}
                <div class="panelLanguages">
>>>>>>> Stashed changes
                    <Languages languageChange={this.onLanguageChange.bind(this)} />
                </div>
                <div className="jumbotron jumbotron-fluid is-fullheight">
                    <div className="container absolutelyOneThird">
                        <h1 className="display-4">Please enter the code provided by your flight attendants.</h1>
                        <input type="text" className="form-control mr-50" placeholder="Example: A8B6F6" id="flightCode" />
                        <br /> <br />
                        <button type="button" className="btn btn-dark" onClick={() => this.validateCode(document.getElementById("flightCode").value)}>Submit</button>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default FlightCode;