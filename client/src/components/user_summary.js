import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import {Redirect} from 'react-router-dom';
import Navbar from './navbar';

class Summary extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect : false
        }
    }
    onLanguageChange(lang){

    }
    
    send(){
        //Send code to server
        let tempState = this.state;
        tempState.redirect = true;
        this.setState(tempState);
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                <Navbar languageChange={this.onLanguageChange.bind(this)} />
                <div className="hero is-fullheight is-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#F2F5EA" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,245.3C960,267,1200,277,1320,282.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                    </svg>

                    <div className="absolutelyCentered">
                        <p className="is-size-1">Thank you for filling in the information.</p>
                        <div className = "box">By submitting, you agree to the <a>Terms and Conditions</a>.</div>
                        <br />
                        <button type="button" className="button is-dark" onClick={() => this.send()}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;