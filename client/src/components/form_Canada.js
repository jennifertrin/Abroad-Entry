import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import { Redirect } from 'react-router-dom';
import canada from '../images/canada.png'
import family from '../images/family.png'
import house from '../images/real-estate.png'
import airplane from '../images/air-plane.png'
import train from '../images/train.png'
import car from '../images/minibus.png'
import ship from '../images/ship.png'
import study from '../images/book.png'
import personal from '../images/tourist.png'
import business from '../images/portfolio.png'
import unitedStates from '../images/maps-and-location.png'
import northAmerica from '../images/north-america.png'
import world from '../images/international.png'
import duties from '../images/payable.png'
import visiting from '../images/tour-guide.png'
import peopleHouse from '../images/personhouse.png'
import signature from '../images/digital-signature.png'
import Navbar from './navbar';

class FormCanada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            part1: false,
            homeAddress: false,
            arrivingBy: false,
            purposeOfTraveller: false,
            arrivingFrom: false,
            bringingCanada: false,
            visitorsToCanada: false,
            residentsOfCanada: false,
            signatures: false,
            redirect: false
        }
    }

    onLanguageChange() {

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/MedicalRecords' />
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
                            {this.state.intro ? <Intro state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.part1 ? <Part1 state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.homeAddress ? <HomeAddress state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.arrivingBy ? <ArrivingBy state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.purposeOfTraveller ? <PurposeOfTraveller state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.arrivingFrom ? <ArrivingFrom state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.bringingCanada ? <BringingCanada state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.visitorsToCanada ? <VisitorsToCanada state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.residentsOfCanada ? <ResidentsOfCanada state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {this.state.signatures ? <Signatures state={this.state} setState={this.setState.bind(this)} /> : <div />}
                            {/**Upon each next, save the data in the state */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormCanada;

class Intro extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.intro = false;
        tempState.part1 = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <img src={canada} alt="Flag of Canada" width="200px" height="200px" />
                <p className="title">Welcome to Canada!</p>
                <p className="subtitle">Please fill out the form to enter into Canada.</p>
                <button className="button is-outlined is-light" onClick={() => this.next()} >Next</button>
            </div>

        );
    }

}

class Part1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondColumn: false,
            thirdColumn: false,
            fourthColumn: false
        }
    }
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.part1 = false;
        tempState.homeAddress = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <img src={family} alt="Icon of a family" width="175px" height="150px" id="familyPhoto" />
                <p className="title">Part 1</p>
                <p className="subtitle">All travelers living together at same address at home:</p>
                <p className="subtitle">1 Person Minimum | 4 People Maximum</p>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">First Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Middle Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Last Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Date of Birth:</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Citizenship:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">First Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Middle Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Last Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Date of Birth:</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Citizenship:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">First Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Middle Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Last Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Date of Birth:</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Citizenship:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">First Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Middle Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Last Name:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Date of Birth:</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Citizenship:</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <button className="button is-outlined is-light" onClick={() => this.next()} >Next</button>
            </div>

        );
    }

}

class HomeAddress extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.homeAddress = false;
        tempState.arrivingBy = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.homeAddress = false;
        tempState.part1 = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <img src={house} alt="Icon of a house" width="150px" height="150px" id="housePhoto" />
                <p className="title">Part 2</p>
                <p className="subtitle">Home Address:</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">Home address (Number, street, apartment number)</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">City/Town</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">Province/State</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">Country</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">Postal/Zip code</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-variable is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class ArrivingBy extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.arrivingBy = false;
        tempState.purposeOfTraveller = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.arrivingBy = false;
        tempState.homeAddress = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={airplane} alt="Icon of an airplane" width="150px" height="150px" id="airplanePhoto" />
                    </div>
                    <div className="column">
                        <img src={train} alt="Icon of a train" width="150px" height="150px" id="trainPhoto" />
                    </div>
                    <div className="column">
                        <img src={ship} alt="Icon of a ship" width="150px" height="150px" id="shipPhoto" />
                    </div>
                    <div className="column">
                        <img src={car} alt="Icon of a car" width="150px" height="150px" id="carPhoto" />
                    </div>
                </div>
                <p className="title">Part 3</p>
                <p className="subtitle">Arriving by:</p>
                <div className="columns is-3">
                    <label className="label has-text-left has-text-white">Method of arrival</label>
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Arriving By</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    Air
      </a>
                                <a class="dropdown-item">
                                    Rail
      </a>
                                <a href="#" class="dropdown-item is-active">
                                    Marine
      </a>
                                <a href="#" class="dropdown-item">
                                    Highway
      </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">Airline/flight No., train No. or vessel name</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div className="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class PurposeOfTraveller extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.purposeOfTraveller = false;
        tempState.arrivingFrom = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.purposeOfTraveller = false;
        tempState.arrivingBy = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={study} alt="Icon of a person with a book" width="150px" height="150px" id="bookPhoto" />
                    </div>
                    <div className="column">
                        <img src={personal} alt="Icon of a tourist" width="150px" height="150px" id="touristPhoto" />
                    </div>
                    <div className="column">
                        <img src={business} alt="Icon of a briefcase" width="150px" height="150px" id="briefcasePhoto" />
                    </div>
                </div>
                <p className="title">Part 4</p>
                <p className="subtitle">Purpose of Trip:</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">Study, Personal, or Business</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class ArrivingFrom extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.arrivingFrom = false;
        tempState.bringingCanada = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.arrivingFrom = false;
        tempState.purposeOfTraveller = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={unitedStates} alt="Icon of a United States" width="150px" height="150px" id="unitedStates" />
                    </div>
                    <div className="column">
                        <img src={northAmerica} alt="Icon of a North America" width="150px" height="150px" id="North America" />
                    </div>
                    <div className="column">
                        <img src={world} alt="Icon of Earth" width="150px" height="150px" id="earthPhoto" />
                    </div>
                </div>
                <p className="title">Part 5</p>
                <p className="subtitle">Arriving From:</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">U.S. only, Other country direct, or Other countries via the U.S.</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class BringingCanada extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.bringingCanada = false;
        tempState.visitorsToCanada = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.bringingCanada = false;
        tempState.arrivingFrom = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={duties} alt="Icon of a tax" width="150px" height="150px" id="taxPhoto" />
                    </div>
                </div>
                <p className="title">Part 6</p>
                <p className="subtitle">Declarations:</p>
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="subtitle">I am/we are bringing into Canada (Answer with Yes or No to the questions):</p>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Firearms or other weapons (e.g. switchblades, Mace or pepper spray).</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Commercial goods, whether or not for resale (e.g. samples, tools, equipment).</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Meat, fish, seafood, eggs, dairy products, fruits, vegetables, seeds, nuts, plants, flowers, wood, animals, birds, insects, and any parts, products or by-products of any of the foregoing.</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Currency and/or monetary instruments totaling CAN$10,000 or more.</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">I/we have unaccompanied goods.</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">I/we have visited a farm and will be going to a farm in Canada.</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">Date left Canada YY - MM - DD</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Value of goods – CAN$ purchased or received abroad (including gifts, alcohol & tobacco</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                        <div className="field">
                            <label className="label has-text-left has-text-white">Date left Canada YY - MM - DD</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">Value of goods – CAN$ purchased or received abroad (including gifts, alcohol & tobacco</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class VisitorsToCanada extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.visitorsToCanada = false;
        tempState.residentsOfCanada = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.visitorsToCanada = false;
        tempState.bringingCanada = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={visiting} alt="Icon of a visitor" width="150px" height="150px" id="visitorPhoto" />
                    </div>
                </div>
                <p className="title">Part 7</p>
                <p className="subtitle">Visitors to Canada:</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">Duration of stay in Canada (How many days)</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">Do you or any person listed above exceed the duty-free allowances per person? (See instructions on the left.) - Yes or No</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class ResidentsOfCanada extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.residentsOfCanada = false;
        tempState.signatures = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.residentsOfCanada = false;
        tempState.visitorsToCanada = true;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={peopleHouse} alt="Icon of a peopleinhouse" width="150px" height="150px" id="peopleHousePhoto" />
                    </div>
                </div>
                <p className="title">Part 8</p>
                <p className="subtitle">Residents of Canada:</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">Do you or any person listed above exceed the exemptions per person? (See instructions on the left.) - Yes or No</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}

class Signatures extends Component {
    //set inputted data into react

    next() {
        let tempState = this.props.state;
        tempState.signatures = false;
        tempState.intro = true;
        tempState.redirect = true;
        this.props.setState(tempState);
    }

    back() {
        let tempState = this.props.state;
        tempState.residentsOfCanada = true;
        tempState.signatures = false;
        this.props.setState(tempState);
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={signature} alt="Icon of a digitial signature" width="150px" height="150px" id="signaturePhoto" />
                    </div>
                </div>
                <p className="title">Part 9</p>
                <p className="subtitle">Signatures (age 16 and older): I certify that my declaration is true and complete</p>
                <p className="subtitle">1 signature minimum | 4 signatures maximum</p>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">Person #1 (E-signature)</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">Person #2 (E-signature)</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">Person #3 (E-signature)</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">Person #4 (E-signature)</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">Date</label>
                    <div className="control">
                        <input className="input" type="date" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >Back</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >Next</button>
                </div>
            </div>

        );
    }

}