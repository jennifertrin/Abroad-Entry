import React, { Component } from 'react';
import '../style/style.css';
import Languages from './languages';

class Summary extends Component {
    onLanguageChange(lang){

    }
    
    send(){
        //Send code to server
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
                        <h2>Thank you for filling in the information.</h2>
                        <h6>By submitting, you agree to the <a>Terms and Conditions</a>.</h6>
                        <button type="button" className="btn btn-dark" onClick={() => this.send()}>Submit</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Summary;