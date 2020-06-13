import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import detectBrowserLanguage from 'detect-browser-language';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

class Languages extends Component {
    constructor(props){
        super(props);
        this.state = {
            en : false,
            fr : false,
            es : false,
            localization : {
                Languages: en.Languages.Languages,
                English : en.Languages.English,
                French : en.Languages.French,
                Spanish : en.Languages.Spanish
            }
        }
    }

    componentDidMount(){
        const userLocale = detectBrowserLanguage().substring(0,2);
        this.setState({ userLanguage: userLocale });
        if(userLocale != 'en'){ //if it's not the default loading locale, change it
            this.changeLanguage(userLocale);
        }
        {/*Have to work off detectBrowserLanguage() instead of setting to state right away as it isn't stored yet by the time it needs to be accessed */}
    }

    changeLanguage(language){
        let tempState = this.state;

        if(language == 'en'){
            tempState.localization.Languages = en.Languages.Languages;
            tempState.localization.English = en.Languages.English;
            tempState.localization.French = en.Languages.French;
            tempState.localization.Spanish = en.Languages.Spanish;
        }
        else if(language == 'fr'){
            tempState.localization.Languages = fr.Languages.Languages;
            tempState.localization.English = fr.Languages.English;
            tempState.localization.French = fr.Languages.French;
            tempState.localization.Spanish = fr.Languages.Spanish;
        }else if(language == 'es'){
            tempState.localization.Languages = es.Languages.Languages;
            tempState.localization.English = es.Languages.English;
            tempState.localization.French = es.Languages.French;
            tempState.localization.Spanish = es.Languages.Spanish;
        }
        else{
            console.log("error switching languages");
        }
        
        
        this.setState(tempState);
        this.props.languageChange();
    }

    render(){
        const localization = this.state.localization;
        return(
            <div className="dropdown">
                <span>{localization.Languages}</span>
                <div className="dropdown-content">
                    <button class="languageButton btn-sm" onClick = {() => this.changeLanguage('en')} >{localization.English}</button> <br />
                    <button class="languageButton btn-sm" onClick = {() => this.changeLanguage('fr')} >{localization.French}</button> <br />
                    <button class="languageButton btn-sm" onClick = {() => this.changeLanguage('es')} >{localization.Spanish}</button> <br />
                </div>
            </div>
        );
    }
}

export default Languages;