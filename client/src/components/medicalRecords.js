import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import Navbar from './navbar';

class Medical extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect : false,
            otherCheck : false
        }
    }

    submitRecord(){
        let tempState = this.state;
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

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/summary' />
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <Navbar languageChange={this.onLanguageChange.bind(this)} />    
                </nav>
                {this.renderRedirect()}
            
                <div className="hero is-fullheight-with-navbar is-link is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">Medical Records</p>
                            <div>
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
                            </div>
                            <br />
                            <div>
                                <p className="subtitle">Your medicines allergens:</p>
                                <input type="checkbox" name="check" id="penicillin" value="penicillin" ></input>
                                <label id="check" for="penicillin">Penicillin</label>
                                <input type="checkbox" name="check" id="novocaine" value="novocaine" ></input>
                                <label id="check" for="novocaine">Novocaine</label>
                                <input type="checkbox" name="check" id="aspirin" value="aspirin" ></input>
                                <label id="check" for="aspirin">Aspirin</label>
                                <input type="checkbox" name="check" id="analgin" value="analgin" ></input>
                                <label id="check" for="analgin">Analgin</label>
                                <input type="checkbox" name="check" id="other" value="other" onClick={() => this.otherCheck()}></input>
                                <label id="textarea-label" for="other">Other one</label>
                                {this.state.otherCheck ? 
                                <textarea name="textarea" cols="35" placeholder="Indicate which..." id="otherAllergy" />
                                :
                                <div />}
                            </div>
                            <br />
                            <button type="button" className="button is-dark" onClick={() => this.submitRecord()}>Submit</button>
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