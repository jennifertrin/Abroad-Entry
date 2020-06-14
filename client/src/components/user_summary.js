import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import {Redirect} from 'react-router-dom';
import Navbar from './navbar';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

class Summary extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect : false,
            localization : {
                title: en.Summary.title,
                subtitle: en.Summary.subtitle,
                tandc: en.Summary.tandc,
                submit: en.Summary.submit
            }
        }
    }

    onLanguageChange(lang){
        let tempState = this.state;

        if(lang === 'en'){
            tempState.localization.title = en.Summary.title;
            tempState.localization.subtitle = en.Summary.subtitle;
            tempState.localization.tandc = en.Summary.tandc;
            tempState.localization.submit = en.Summary.submit;
        }
        else if(lang === 'fr'){
            tempState.localization.title = fr.Summary.title;
            tempState.localization.subtitle = fr.Summary.subtitle;
            tempState.localization.tandc = fr.Summary.tandc;
            tempState.localization.submit = fr.Summary.submit;
        }else if(lang === 'es'){
            tempState.localization.title = es.Summary.title;
            tempState.localization.subtitle = es.Summary.subtitle;
            tempState.localization.tandc = es.Summary.tandc;
            tempState.localization.submit = es.Summary.submit;
        }
        else{
            console.log("error switching languages");
        }
        
        this.setState(tempState);
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
                        <div className = "box">{localization.subtitle} <a>{localization.tandc}</a>.</div>
                        <br />
                        <button type="button" className="button is-dark" onClick={() => this.send()}>{localization.submit}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;