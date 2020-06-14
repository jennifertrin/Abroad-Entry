import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import Navbar from './navbar';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';


class Medical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            otherCheck: false,
            localization: {
                part1: en.MedicalRecords.part1,
                testing: en.MedicalRecords.testing,
                close: en.MedicalRecords.close,
                title: en.MedicalRecords.title,
                blood: en.MedicalRecords.blood,
                negative: en.MedicalRecords.negative,
                positive: en.MedicalRecords.positive,
                allergyExists: en.MedicalRecords.allergyExists,
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

    submitRecord() {
        let tempState = this.state;
        tempState.redirect = true;
        this.setState(tempState);

    }

    otherCheck() {
        let tempState = this.state;
        if (tempState.otherCheck) {
            tempState.otherCheck = false;
        } else {
            tempState.otherCheck = true;
        }
        this.setState(tempState);
    }

    onLanguageChange(lang) {
        let tempState = this.state;

        if (lang === 'en') {
            tempState.localization.part1 = en.MedicalRecords.part1;
            tempState.localization.title = en.MedicalRecords.title;
            tempState.localization.testing = en.MedicalRecords.testing;
            tempState.localization.close = en.MedicalRecords.close;
            tempState.localization.blood = en.MedicalRecords.blood;
            tempState.localization.negative = en.MedicalRecords.negative;
            tempState.localization.positive = en.MedicalRecords.positive;
            tempState.localization.allergyExists = en.MedicalRecords.allergyExists;
            tempState.localization.allergies = en.MedicalRecords.allergies;
            tempState.localization.penicillin = en.MedicalRecords.penicillin;
            tempState.localization.novocaine = en.MedicalRecords.novocaine;
            tempState.localization.aspirin = en.MedicalRecords.aspirin;
            tempState.localization.analgin = en.MedicalRecords.analgin;
            tempState.localization.other = en.MedicalRecords.other;
            tempState.localization.submit = en.MedicalRecords.submit;
        }
        else if (lang === 'fr') {
            tempState.localization.part1 = fr.MedicalRecords.part1;
            tempState.localization.testing = fr.MedicalRecords.testing;
            tempState.localization.close = fr.MedicalRecords.close;
            tempState.localization.title = fr.MedicalRecords.title;
            tempState.localization.blood = fr.MedicalRecords.blood;
            tempState.localization.negative = fr.MedicalRecords.negative;
            tempState.localization.positive = fr.MedicalRecords.positive;
            tempState.localization.allergyExists = fr.MedicalRecords.allergyExists;
            tempState.localization.allergies = fr.MedicalRecords.allergies;
            tempState.localization.penicillin = fr.MedicalRecords.penicillin;
            tempState.localization.novocaine = fr.MedicalRecords.novocaine;
            tempState.localization.aspirin = fr.MedicalRecords.aspirin;
            tempState.localization.analgin = fr.MedicalRecords.analgin;
            tempState.localization.other = fr.MedicalRecords.other;
            tempState.localization.submit = fr.MedicalRecords.submit;
        } else if (lang === 'es') {
            tempState.localization.part1 = es.MedicalRecords.part1;
            tempState.localization.testing = es.MedicalRecords.testing;
            tempState.localization.close = es.MedicalRecords.close;
            tempState.localization.title = es.MedicalRecords.title;
            tempState.localization.blood = es.MedicalRecords.blood;
            tempState.localization.negative = es.MedicalRecords.negative;
            tempState.localization.positive = es.MedicalRecords.positive;
            tempState.localization.allergyExists = es.MedicalRecords.allergyExists;
            tempState.localization.allergies = es.MedicalRecords.allergies;
            tempState.localization.penicillin = es.MedicalRecords.penicillin;
            tempState.localization.novocaine = es.MedicalRecords.novocaine;
            tempState.localization.aspirin = es.MedicalRecords.aspirin;
            tempState.localization.analgin = es.MedicalRecords.analgin;
            tempState.localization.other = es.MedicalRecords.other;
            tempState.localization.submit = es.MedicalRecords.submit;
        }
        else {
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
                <div className="has-text-center">
                <div className="hero is-fullheight-with-navbar is-link is-bold">
                    <div className="hero-body">
                        <div className="container is-vcentered">
                            <h1 className="title">{localization.title}</h1>
                            <h2>{localization.part1}</h2>
                            <div class="field is-horizontal">
                                <div class="field-label">
                                    <label class="label subtitle">{localization.testing}</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <label class="radio">
                                                Yes
                                            <input type="radio" name="member" value="yes"></input>
                                            </label>
                                            <label class="radio">
                                                No
                                            <input type="radio" name="member" value="no"></input>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal has-text-centered">
                                <div class="field-label has-text-centered">
                                    <label class="label subtitle">{localization.close}</label>
                                </div>
                                <div class="field-body has-text-centered">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <label class="radio">
                                                Yes 
                                            <input type="radio" name="member" value="yes"></input>
                                            </label>
                                            <label class="radio">
                                                No 
                                            <input type="radio" name="member" value="no"></input>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label id="dropdown-label subtitle" for="dropdown">{localization.blood}:</label>
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
                                 <div class="field is-horizontal">
                                <div class="field-label">
                                    <label class="label subtitle">{localization.allergyExists}</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <label class="radio">
                                                Yes 
                                                <input type="radio" name="member" value="yes">
                                            </input>
                                            </label>
                                            <label class="radio">
                                                No
                                                <input type="radio" name="member" value="no">
                                                </input>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            </div>
        );
    }
}

export default Medical;

/*
<div class="medicalRecords">
                <label id="dropdown-label" for="dropdown">Blood type:</label>
                <select type="" id="dropdown" placeholder="Choose an option">
                    <option value="0">---</option>
                    <option value="1">O</option>
                    <option value="2">A</option>
                    <option value="3">B</option>
                    <option value="4">AB</option>
                </select>
                <input type="radio" name="radio-res" id="negative" value="-" ></input>
                <label id="radio-label" for="negative">- Negative</label>
                <input type="radio" name="radio-res" id="positive" value="+"></input>
                <label id="radio-label" for="positive">+ Positive</label>
                <label id="cur_state-label"  >Your medicines allergens:</label>
                <input type="checkbox" name="check" id="penicillin" value="penicillin" ></input>
                <label id="check" for="penicillin">Penicillin</label>
                <input type="checkbox" name="check" id="novocaine" value="novocaine" ></input>
                <label id="check" for="novocaine">Novocaine</label>
                <input type="checkbox" name="check" id="aspirin" value="aspirin" ></input>
                <label id="check" for="aspirin">Aspirin</label>
                <input type="checkbox" name="check" id="analgin" value="analgin" ></input>
                <label id="check" for="analgin">Analgin</label>
                <input type="checkbox" name="check" id="other" value="other" ></input>
                <label id="textarea-label" for="other">Other one</label>
                <textarea name="textarea" cols="35"
                    placeholder="Indicate which..." disabled></textarea>
            </div>
*/