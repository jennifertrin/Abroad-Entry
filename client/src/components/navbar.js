import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import detectBrowserLanguage from 'detect-browser-language';
import React, { Component } from 'react';
import $ from 'jquery';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';
import logo from '../images/Abroad-entry.png'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            localization : {
                Languages: en.Languages.Languages,
                English : en.Languages.English,
                French : en.Languages.French,
                Spanish : en.Languages.Spanish
            }
        }
    }

    componentDidMount(){
        $(document).ready(function() { // Check for click events on the navbar burger icon
            $("#language").hover(function() { // Toggle the "is-active" class on the dropdown when hovered
                $("#language").toggleClass("is-active");
            })
        });
        const userLocale = detectBrowserLanguage().substring(0,2);
        this.setState({ userLanguage: userLocale });
        if(userLocale != 'en'){ //if it's not the default loading locale, change it
            this.onLanguageChange(userLocale);
        }
        //else if() states saved language is not english{}
    }

    onLanguageChange(lang){
        let tempState = this.state;

        if(lang === 'en'){
            tempState.localization.Languages = en.Languages.Languages;
            tempState.localization.English = en.Languages.English;
            tempState.localization.French = en.Languages.French;
            tempState.localization.Spanish = en.Languages.Spanish;
        }
        else if(lang === 'fr'){
            tempState.localization.Languages = fr.Languages.Languages;
            tempState.localization.English = fr.Languages.English;
            tempState.localization.French = fr.Languages.French;
            tempState.localization.Spanish = fr.Languages.Spanish;
        }else if(lang === 'es'){
            tempState.localization.Languages = es.Languages.Languages;
            tempState.localization.English = es.Languages.English;
            tempState.localization.French = es.Languages.French;
            tempState.localization.Spanish = es.Languages.Spanish;
        }
        else{
            console.log("error switching languages");
        }
        
        this.setState(tempState);
        this.props.languageChange(lang);
    }
    
    
    render(){
        const localization = this.state.localization;
        
        return(
                <div className="z-index10">
                    <div className="logo ml-40 mr-40 mt-30 mb-30">
                    <img src={logo} alt="Logo of Abroad Entry" width="125px" height="125px" id="logo" />
                    </div>
                    <div className="languages ml-40 mr-40 mt-30 mb-30">
                        <div className="dropdown is-right" id="language">
                            <div className="dropdown-trigger">
                                <button className="button is-dark is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-language fa-lg"></i>
                                    </span>
                                    <span><strong>{localization.Languages}</strong></span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down"></i>
                                    </span>
                                </button>
                            </div>
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <button onClick={() => this.onLanguageChange('en')} className="dropdown-item invisible">
                                        {localization.English}
                                    </button>
                                    <button onClick={() => this.onLanguageChange('fr')} className="dropdown-item invisible">
                                        {localization.French}
                                    </button>
                                    <button onClick={() => this.onLanguageChange('es')} className="dropdown-item invisible">
                                        {localization.Spanish}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Navbar;