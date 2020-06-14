import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import Navbar from './navbar';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

class Medical extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect : false,
            otherCheck : false,
            localization : {
                title: en.MedicalRecords.title,
                blood: en.MedicalRecords.blood,
                negative: en.MedicalRecords.negative,
                positive: en.MedicalRecords.positive,
                allergies: en.MedicalRecords.allergies,
                penicillin: en.MedicalRecords.penicillin,
                novocaine: en.MedicalRecords.novocaine,
                aspirin: en.MedicalRecords.aspirin,
                analgin: en.MedicalRecords.analgin,
                other: en.MedicalRecords.other,
                submit: en.MedicalRecords.submit
            }
        }
    }

    submitRecord(){
        let tempState = this.state;
        let penicillin = document.getElementById("penicillin").value;
        let novocaine = document.getElementById("novocaine").value;
        let aspirin = document.getElementById("aspirin").value;
        let analgin = document.getElementById("analgin").value;
        
        axios.post(`/api/user/medicalEncrypt`, { penicillin, novocaine, aspirin, analgin})
        .then(res => {
            console.log(res.data);
            let tempPropState = this.props.state;
            let MedicalData = {
                penicillin : res.data.penicillin,
                novocaine : res.data.novocaine,
                aspirin : res.data.aspirin,
                analgin : res.data.analgin
            }
            this.props.setState({MedicalData: MedicalData});
        })
        tempState.redirect = true;
        this.setState(tempState);
    }
    


    otherCheck(){
        let tempState = this.state;
        if(tempState.otherCheck){
            tempState.otherCheck = false;
        }else{
            tempState.otherCheck = true;
        }
        this.setState(tempState);
    }

    onLanguageChange(lang){
        let tempState = this.state;

        if(lang === 'en'){
            tempState.localization.title = en.MedicalRecords.title;
            tempState.localization.blood = en.MedicalRecords.blood;
            tempState.localization.negative = en.MedicalRecords.negative;
            tempState.localization.positive = en.MedicalRecords.positive;
            tempState.localization.allergies = en.MedicalRecords.allergies;
            tempState.localization.penicillin = en.MedicalRecords.penicillin;
            tempState.localization.novocaine = en.MedicalRecords.novocaine;
            tempState.localization.aspirin = en.MedicalRecords.aspirin;
            tempState.localization.analgin = en.MedicalRecords.analgin;
            tempState.localization.other = en.MedicalRecords.other;
            tempState.localization.submit = en.MedicalRecords.submit;
        }
        else if(lang === 'fr'){
            tempState.localization.title = fr.MedicalRecords.title;
            tempState.localization.blood = fr.MedicalRecords.blood;
            tempState.localization.negative = fr.MedicalRecords.negative;
            tempState.localization.positive = fr.MedicalRecords.positive;
            tempState.localization.allergies = fr.MedicalRecords.allergies;
            tempState.localization.penicillin = fr.MedicalRecords.penicillin;
            tempState.localization.novocaine = fr.MedicalRecords.novocaine;
            tempState.localization.aspirin = fr.MedicalRecords.aspirin;
            tempState.localization.analgin = fr.MedicalRecords.analgin;
            tempState.localization.other = fr.MedicalRecords.other;
            tempState.localization.submit = fr.MedicalRecords.submit;
        }else if(lang === 'es'){
            tempState.localization.title = es.MedicalRecords.title;
            tempState.localization.blood = es.MedicalRecords.blood;
            tempState.localization.negative = es.MedicalRecords.negative;
            tempState.localization.positive = es.MedicalRecords.positive;
            tempState.localization.allergies = es.MedicalRecords.allergies;
            tempState.localization.penicillin = es.MedicalRecords.penicillin;
            tempState.localization.novocaine = es.MedicalRecords.novocaine;
            tempState.localization.aspirin = es.MedicalRecords.aspirin;
            tempState.localization.analgin = es.MedicalRecords.analgin;
            tempState.localization.other = es.MedicalRecords.other;
            tempState.localization.submit = es.MedicalRecords.submit;
        }
        else{
            console.log("error switching languages");
        }
        
        this.setState(tempState);
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/summary' />
        }
    }

    render() {
        const localization = this.state.localization;

        return (
            <div>
                <nav className="navbar">
                    <Navbar languageChange={this.onLanguageChange.bind(this)} />    
                </nav>
                {this.renderRedirect()}
            
                <div className="hero is-fullheight-with-navbar is-link is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">{localization.title}</p>
                            <div>
                                <label id="dropdown-label" for="dropdown">{localization.blood}:</label>
                                <select type="" id="dropdown" placeholder="Choose an option">
                                    <option value="0">---</option>
                                    <option value="1">O</option>
                                    <option value="2">A</option>
                                    <option value="3">B</option>
                                    <option value="4">AB</option>
                                </select>
                                <input type="radio" name="radio-res" id="negative" value="-" ></input>
                                <label id="radio-label" for="negative">- {localization.negative}</label>
                                <input type="radio" name="radio-res" id="positive" value="+"></input>
                                <label id="radio-label" for="positive">+ {localization.positive}</label>
                            </div>
                            <br />
                            <div>
                                <p className="subtitle">{localization.allergies}</p>
                                <input type="checkbox" name="check" id="penicillin" value="penicillin" ></input>
                                <label id="check" for="penicillin">{localization.penicillin}</label>
                                <input type="checkbox" name="check" id="novocaine" value="novocaine" ></input>
                                <label id="check" for="novocaine">{localization.novocaine}</label>
                                <input type="checkbox" name="check" id="aspirin" value="aspirin" ></input>
                                <label id="check" for="aspirin">{localization.aspirin}</label>
                                <input type="checkbox" name="check" id="analgin" value="analgin" ></input>
                                <label id="check" for="analgin">{localization.analgin}</label>
                                <input type="checkbox" name="check" id="other" value="other" onClick={() => this.otherCheck()}></input>
                                <label id="textarea-label" for="other">{localization.other}</label>
                                {this.state.otherCheck ? 
                                <textarea name="textarea" cols="35" placeholder="Indicate which..." id="otherAllergy" />
                                :
                                <div />}
                            </div>
                            <br />
                            <button type="button" className="button is-dark" onClick={() => this.submitRecord()}>{localization.submit}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Medical;