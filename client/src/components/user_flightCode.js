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
            <div>
                <div>
                    {/**Logo goes here */}
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