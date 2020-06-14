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
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';
import es from '../i18n/es.json';

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
            redirect: false,
            localization : {
                back: en.Form_Canada.back,
                next: en.Form_Canada.next,
                section1_title: en.Form_Canada.section1_title,
                section1_subtitle: en.Form_Canada.section1_subtitle,
                section2_title: en.Form_Canada.section2_title,
                section2_subtitle: en.Form_Canada.section2_subtitle,
                section2_minmax: en.Form_Canada.section2_minmax,
                section2_fName: en.Form_Canada.section2_fName,
                section2_mName: en.Form_Canada.section2_mName,
                section2_lName: en.Form_Canada.section2_lName,
                section2_dob: en.Form_Canada.section2_dob,
                section2_citizenship: en.Form_Canada.section2_citizenship,
                section3_title: en.Form_Canada.section3_title,
                section3_subtitle: en.Form_Canada.section3_subtitle,
                section3_address: en.Form_Canada.section3_address,
                section3_city: en.Form_Canada.section3_city,
                section3_province: en.Form_Canada.section3_province,
                section3_country: en.Form_Canada.section3_country,
                section3_zip: en.Form_Canada.section3_zip,
                section4_title: en.Form_Canada.section4_title,
                section4_subtitle: en.Form_Canada.section4_subtitle,
                section4_method: en.Form_Canada.section4_method,
                section4_air: en.Form_Canada.section4_air,
                section4_rail: en.Form_Canada.section4_rail,
                section4_marine: en.Form_Canada.section4_marine,
                section4_highway: en.Form_Canada.section4_highway,
                section4_name: en.Form_Canada.section4_name,
                section5_title: en.Form_Canada.section5_title,
                section5_subtitle: en.Form_Canada.section5_subtitle,
                section5_purpose: en.Form_Canada.section5_purpose,
                section6_title: en.Form_Canada.section6_title,
                section6_subtitle: en.Form_Canada.section6_subtitle,
                section6_from: en.Form_Canada.section6_from,
                section7_title: en.Form_Canada.section7_title,
                section7_subtitle: en.Form_Canada.section7_subtitle,
                section7_declaration: en.Form_Canada.section7_declaration,
                section7_firearm: en.Form_Canada.section7_firearm,
                section7_goods: en.Form_Canada.section7_goods,
                section7_animals: en.Form_Canada.section7_animals,
                section7_money: en.Form_Canada.section7_money,
                section7_unaccompany: en.Form_Canada.section7_unaccompany,
                section7_farm: en.Form_Canada.section7_farm,
                section7_dateLeft: en.Form_Canada.section7_dateLeft,
                section7_value: en.Form_Canada.section7_value,
                section8_title: en.Form_Canada.section8_title,
                section8_subtitle: en.Form_Canada.section8_subtitle,
                section8_stay: en.Form_Canada.section8_stay,
                section8_exceed: en.Form_Canada.section8_exceed,
                section9_title: en.Form_Canada.section7_title,
                section9_subtitle: en.Form_Canada.section7_subtitle,
                section9_exceed: en.Form_Canada.section7_declaration,
                section10_title: en.Form_Canada.section7_firearm,
                section10_subtitle: en.Form_Canada.section7_goods,
                section10_minmax: en.Form_Canada.section7_animals,
                section10_person1: en.Form_Canada.section7_money,
                section10_person2: en.Form_Canada.section7_unaccompany,
                section10_person3: en.Form_Canada.section7_farm,
                section10_person4: en.Form_Canada.section7_dateLeft,
                section10_date: en.Form_Canada.section7_value
            }
        }
    }

    onLanguageChange(lang){
        let tempState = this.state;

        if(lang === 'en'){
            tempState.localization.back = en.Form_Canada.back;
            tempState.localization.next = en.Form_Canada.next;

            tempState.localization.section1_title = en.Form_Canada.section1_title;
            tempState.localization.section1_subtitle = en.Form_Canada.section1_subtitle;

            tempState.localization.section2_title = en.Form_Canada.section2_title;
            tempState.localization.section2_subtitle = en.Form_Canada.section2_subtitle;
            tempState.localization.section2_minmax = en.Form_Canada.section2_minmax;
            tempState.localization.section2_fName = en.Form_Canada.section2_fName;
            tempState.localization.section2_mName = en.Form_Canada.section2_mName;
            tempState.localization.section2_lName = en.Form_Canada.section2_lName;
            tempState.localization.section2_dob = en.Form_Canada.section2_dob;
            tempState.localization.section2_citizenship = en.Form_Canada.section2_citizenship;

            tempState.localization.section3_title = en.Form_Canada.section3_title;
            tempState.localization.section3_subtitle = en.Form_Canada.section3_subtitle;
            tempState.localization.section3_address = en.Form_Canada.section3_address;
            tempState.localization.section3_city = en.Form_Canada.section3_city;
            tempState.localization.section3_province = en.Form_Canada.section3_province;
            tempState.localization.section3_country = en.Form_Canada.section3_country;
            tempState.localization.section3_zip = en.Form_Canada.section3_zip;

            tempState.localization.section4_title = en.Form_Canada.section4_title;
            tempState.localization.section4_subtitle = en.Form_Canada.section4_subtitle;
            tempState.localization.section4_method = en.Form_Canada.section4_method;
            tempState.localization.section4_air = en.Form_Canada.section4_air;
            tempState.localization.section4_rail = en.Form_Canada.section4_rail;
            tempState.localization.section4_marine = en.Form_Canada.section4_marine;
            tempState.localization.section4_highway = en.Form_Canada.section4_highway;
            tempState.localization.section4_name = en.Form_Canada.section4_name;
            
            tempState.localization.section5_title = en.Form_Canada.section5_title;
            tempState.localization.section5_subtitle = en.Form_Canada.section5_subtitle;
            tempState.localization.section5_purpose = en.Form_Canada.section5_purpose;

            tempState.localization.section6_title = en.Form_Canada.section6_title;
            tempState.localization.section6_subtitle = en.Form_Canada.section6_subtitle;
            tempState.localization.section6_from = en.Form_Canada.section6_from;

            tempState.localization.section7_title = en.Form_Canada.section7_title;
            tempState.localization.section7_subtitle = en.Form_Canada.section7_subtitle;
            tempState.localization.section7_declaration = en.Form_Canada.section7_declaration;
            tempState.localization.section7_firearm = en.Form_Canada.section7_firearm;
            tempState.localization.section7_goods = en.Form_Canada.section7_goods;
            tempState.localization.section7_animals = en.Form_Canada.section7_animals;
            tempState.localization.section7_money = en.Form_Canada.section7_money;
            tempState.localization.section7_unaccompany = en.Form_Canada.section7_unaccompany;
            tempState.localization.section7_farm = en.Form_Canada.section7_farm;
            tempState.localization.section7_dateLeft = en.Form_Canada.section7_dateLeft;
            tempState.localization.section7_value = en.Form_Canada.section7_value;

            tempState.localization.section8_title = en.Form_Canada.section8_title;
            tempState.localization.section8_subtitle = en.Form_Canada.section8_subtitle;
            tempState.localization.section8_stay = en.Form_Canada.section8_stay;
            tempState.localization.section8_exceed = en.Form_Canada.section8_exceed;

            tempState.localization.section9_title = en.Form_Canada.section9_title;
            tempState.localization.section9_subtitle = en.Form_Canada.section9_subtitle;
            tempState.localization.section9_exceed = en.Form_Canada.section9_exceed;

            tempState.localization.section10_title = en.Form_Canada.section10_title;
            tempState.localization.section10_subtitle = en.Form_Canada.section10_subtitle;
            tempState.localization.section10_minmax = en.Form_Canada.section10_minmax;
            tempState.localization.section10_person1 = en.Form_Canada.section10_person1;
            tempState.localization.section10_person2 = en.Form_Canada.section10_person2;
            tempState.localization.section10_person3 = en.Form_Canada.section10_person3;
            tempState.localization.section10_person4 = en.Form_Canada.section10_person4;
            tempState.localization.section10_date = en.Form_Canada.section10_date;

        }
        else if(lang === 'fr'){
            tempState.localization.back = fr.Form_Canada.back;
            tempState.localization.next = fr.Form_Canada.next;

            tempState.localization.section1_title = fr.Form_Canada.section1_title;
            tempState.localization.section1_subtitle = fr.Form_Canada.section1_subtitle;

            tempState.localization.section2_title = fr.Form_Canada.section2_title;
            tempState.localization.section2_subtitle = fr.Form_Canada.section2_subtitle;
            tempState.localization.section2_minmax = fr.Form_Canada.section2_minmax;
            tempState.localization.section2_fName = fr.Form_Canada.section2_fName;
            tempState.localization.section2_mName = fr.Form_Canada.section2_mName;
            tempState.localization.section2_lName = fr.Form_Canada.section2_lName;
            tempState.localization.section2_dob = fr.Form_Canada.section2_dob;
            tempState.localization.section2_citizenship = fr.Form_Canada.section2_citizenship;

            tempState.localization.section3_title = fr.Form_Canada.section3_title;
            tempState.localization.section3_subtitle = fr.Form_Canada.section3_subtitle;
            tempState.localization.section3_address = fr.Form_Canada.section3_address;
            tempState.localization.section3_city = fr.Form_Canada.section3_city;
            tempState.localization.section3_province = fr.Form_Canada.section3_province;
            tempState.localization.section3_country = fr.Form_Canada.section3_country;
            tempState.localization.section3_zip = fr.Form_Canada.section3_zip;

            tempState.localization.section4_title = fr.Form_Canada.section4_title;
            tempState.localization.section4_subtitle = fr.Form_Canada.section4_subtitle;
            tempState.localization.section4_method = fr.Form_Canada.section4_method;
            tempState.localization.section4_air = fr.Form_Canada.section4_air;
            tempState.localization.section4_rail = fr.Form_Canada.section4_rail;
            tempState.localization.section4_marine = fr.Form_Canada.section4_marine;
            tempState.localization.section4_highway = fr.Form_Canada.section4_highway;
            tempState.localization.section4_name = fr.Form_Canada.section4_name;

            tempState.localization.section5_title = fr.Form_Canada.section5_title;
            tempState.localization.section5_subtitle = fr.Form_Canada.section5_subtitle;
            tempState.localization.section5_purpose = fr.Form_Canada.section5_purpose;

            tempState.localization.section6_title = fr.Form_Canada.section6_title;
            tempState.localization.section6_subtitle = fr.Form_Canada.section6_subtitle;
            tempState.localization.section6_from = fr.Form_Canada.section6_from;

            tempState.localization.section7_title = fr.Form_Canada.section7_title;
            tempState.localization.section7_subtitle = fr.Form_Canada.section7_subtitle;
            tempState.localization.section7_declaration = fr.Form_Canada.section7_declaration;
            tempState.localization.section7_firearm = fr.Form_Canada.section7_firearm;
            tempState.localization.section7_goods = fr.Form_Canada.section7_goods;
            tempState.localization.section7_animals = fr.Form_Canada.section7_animals;
            tempState.localization.section7_money = fr.Form_Canada.section7_money;
            tempState.localization.section7_unaccompany = fr.Form_Canada.section7_unaccompany;
            tempState.localization.section7_farm = fr.Form_Canada.section7_farm;
            tempState.localization.section7_dateLeft = fr.Form_Canada.section7_dateLeft;
            tempState.localization.section7_value = fr.Form_Canada.section7_value;

            tempState.localization.section8_title = fr.Form_Canada.section8_title;
            tempState.localization.section8_subtitle = fr.Form_Canada.section8_subtitle;
            tempState.localization.section8_stay = fr.Form_Canada.section8_stay;
            tempState.localization.section8_exceed = fr.Form_Canada.section8_exceed;

            tempState.localization.section9_title = fr.Form_Canada.section9_title;
            tempState.localization.section9_subtitle = fr.Form_Canada.section9_subtitle;
            tempState.localization.section9_exceed = fr.Form_Canada.section9_exceed;

            tempState.localization.section10_title = fr.Form_Canada.section10_title;
            tempState.localization.section10_subtitle = fr.Form_Canada.section10_subtitle;
            tempState.localization.section10_minmax = fr.Form_Canada.section10_minmax;
            tempState.localization.section10_person1 = fr.Form_Canada.section10_person1;
            tempState.localization.section10_person2 = fr.Form_Canada.section10_person2;
            tempState.localization.section10_person3 = fr.Form_Canada.section10_person3;
            tempState.localization.section10_person4 = fr.Form_Canada.section10_person4;
            tempState.localization.section10_date = fr.Form_Canada.section10_date;

        }else if(lang === 'es'){
            tempState.localization.back = es.Form_Canada.back;
            tempState.localization.next = es.Form_Canada.next;

            tempState.localization.section1_title = es.Form_Canada.section1_title;
            tempState.localization.section1_subtitle = es.Form_Canada.section1_subtitle;

            tempState.localization.section2_title = es.Form_Canada.section2_title;
            tempState.localization.section2_subtitle = es.Form_Canada.section2_subtitle;
            tempState.localization.section2_minmax = es.Form_Canada.section2_minmax;
            tempState.localization.section2_fName = es.Form_Canada.section2_fName;
            tempState.localization.section2_mName = es.Form_Canada.section2_mName;
            tempState.localization.section2_lName = es.Form_Canada.section2_lName;
            tempState.localization.section2_dob = es.Form_Canada.section2_dob;
            tempState.localization.section2_citizenship = es.Form_Canada.section2_citizenship;

            tempState.localization.section3_title = es.Form_Canada.section3_title;
            tempState.localization.section3_subtitle = es.Form_Canada.section3_subtitle;
            tempState.localization.section3_address = es.Form_Canada.section3_address;
            tempState.localization.section3_city = es.Form_Canada.section3_city;
            tempState.localization.section3_province = es.Form_Canada.section3_province;
            tempState.localization.section3_country = es.Form_Canada.section3_country;
            tempState.localization.section3_zip = es.Form_Canada.section3_zip;

            tempState.localization.section4_title = es.Form_Canada.section4_title;
            tempState.localization.section4_subtitle = es.Form_Canada.section4_subtitle;
            tempState.localization.section4_method = es.Form_Canada.section4_method;
            tempState.localization.section4_air = es.Form_Canada.section4_air;
            tempState.localization.section4_rail = es.Form_Canada.section4_rail;
            tempState.localization.section4_marine = es.Form_Canada.section4_marine;
            tempState.localization.section4_highway = es.Form_Canada.section4_highway;
            tempState.localization.section4_name = es.Form_Canada.section4_name;

            tempState.localization.section5_title = es.Form_Canada.section5_title;
            tempState.localization.section5_subtitle = es.Form_Canada.section5_subtitle;
            tempState.localization.section5_purpose = es.Form_Canada.section5_purpose;

            tempState.localization.section6_title = es.Form_Canada.section6_title;
            tempState.localization.section6_subtitle = es.Form_Canada.section6_subtitle;
            tempState.localization.section6_from = es.Form_Canada.section6_from;

            tempState.localization.section7_title = es.Form_Canada.section7_title;
            tempState.localization.section7_subtitle = es.Form_Canada.section7_subtitle;
            tempState.localization.section7_declaration = es.Form_Canada.section7_declaration;
            tempState.localization.section7_firearm = es.Form_Canada.section7_firearm;
            tempState.localization.section7_goods = es.Form_Canada.section7_goods;
            tempState.localization.section7_animals = es.Form_Canada.section7_animals;
            tempState.localization.section7_money = es.Form_Canada.section7_money;
            tempState.localization.section7_unaccompany = es.Form_Canada.section7_unaccompany;
            tempState.localization.section7_farm = es.Form_Canada.section7_farm;
            tempState.localization.section7_dateLeft = es.Form_Canada.section7_dateLeft;
            tempState.localization.section7_value = es.Form_Canada.section7_value;

            tempState.localization.section8_title = es.Form_Canada.section8_title;
            tempState.localization.section8_subtitle = es.Form_Canada.section8_subtitle;
            tempState.localization.section8_stay = es.Form_Canada.section8_stay;
            tempState.localization.section8_exceed = es.Form_Canada.section8_exceed;

            tempState.localization.section9_title = es.Form_Canada.section9_title;
            tempState.localization.section9_subtitle = es.Form_Canada.section9_subtitle;
            tempState.localization.section9_exceed = es.Form_Canada.section9_exceed;

            tempState.localization.section10_title = es.Form_Canada.section10_title;
            tempState.localization.section10_subtitle = es.Form_Canada.section10_subtitle;
            tempState.localization.section10_minmax = es.Form_Canada.section10_minmax;
            tempState.localization.section10_person1 = es.Form_Canada.section10_person1;
            tempState.localization.section10_person2 = es.Form_Canada.section10_person2;
            tempState.localization.section10_person3 = es.Form_Canada.section10_person3;
            tempState.localization.section10_person4 = es.Form_Canada.section10_person4;
            tempState.localization.section10_date = es.Form_Canada.section10_date;
        }
        else{
            console.log("error switching languages");
        }
        
        this.setState(tempState);
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
        const localization = this.props.state.localization;

        return (
            <div>
                <img src={canada} alt="Flag of Canada" width="200px" height="200px" />
                <p className="title">{localization.section1_title}</p>
                <p className="subtitle">{localization.section1_subtitle}</p>
                <button className="button is-outlined is-light" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

        return (
            <div>
                <img src={family} alt="Icon of a family" width="175px" height="150px" id="familyPhoto" />
                <p className="title">{localization.section2_title}</p>
                <p className="subtitle">{localization.section2_subtitle}</p>
                <p className="subtitle">{localization.section2_minmax}</p>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_fName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_mName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_lName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_dob}</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_citizenship}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_fName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_mName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_lName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_dob}</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_citizenship}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_fName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_mName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_lName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_dob}</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_citizenship}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_fName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_mName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_lName}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_dob}</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section2_citizenship}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                    </div>    
                </div>
                <button className="button is-outlined is-light" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

        return (
            <div>
                <img src={house} alt="Icon of a house" width="150px" height="150px" id="housePhoto" />
                <p className="title">{localization.section3_title}</p>
                <p className="subtitle">{localization.section3_subtitle}</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section3_address}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section3_city}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section3_province}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section3_country}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section3_zip}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-variable is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

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
                <p className="title">{localization.section4_title}</p>
                <p className="subtitle">{localization.section4_subtitle}</p>
                <div className="columns is-3">
                    <label className="label has-text-left has-text-white">{localization.section4_method}</label>
                    <div class="dropdown is-hoverable control">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>{localization.section4_subtitle}</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    {localization.section4_air}
                                </a>
                                <a class="dropdown-item">
                                    {localization.section4_rail}
                                </a>
                                <a href="#" class="dropdown-item is-active">
                                    {localization.section4_marine}
                                </a>
                                <a href="#" class="dropdown-item">
                                    {localization.section4_highway}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section4_name}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div className="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

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
                <p className="title">{localization.section5_title}</p>
                <p className="subtitle">{localization.section5_subtitle}</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section5_purpose}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

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
                <p className="title">{localization.section6_title}</p>
                <p className="subtitle">{localization.section6_subtitle}</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section6_from}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={duties} alt="Icon of a tax" width="150px" height="150px" id="taxPhoto" />
                    </div>
                </div>
                <p className="title">{localization.section7_title}</p>
                <p className="subtitle">{localization.section7_subtitle}</p>
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="subtitle">{localization.section7_declaration}</p>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_firearm}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_goods}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_animals}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_money}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_unaccompany}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_farm}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_dateLeft}</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_value}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                        <hr />
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_dateLeft}</label>
                            <div className="control">
                                <input className="input" type="date" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section7_value}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={visiting} alt="Icon of a visitor" width="150px" height="150px" id="visitorPhoto" />
                    </div>
                </div>
                <p className="title">{localization.section8_title}</p>
                <p className="subtitle">{localization.section8_subtitle}</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section8_stay}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section8_exceed}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={peopleHouse} alt="Icon of a peopleinhouse" width="150px" height="150px" id="peopleHousePhoto" />
                    </div>
                </div>
                <p className="title">{localization.section9_title}</p>
                <p className="subtitle">{localization.section9_subtitle}</p>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section9_exceed}</label>
                    <div className="control">
                        <input className="input" type="text" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
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
        const localization = this.props.state.localization;

        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <img src={signature} alt="Icon of a digitial signature" width="150px" height="150px" id="signaturePhoto" />
                    </div>
                </div>
                <p className="title">{localization.section10_title}</p>
                <p className="subtitle">{localization.section10_subtitle}</p>
                <p className="subtitle">{localization.section10_minmax}</p>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section10_person1}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section10_person2}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section10_person3}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-left has-text-white">{localization.section10_person4}</label>
                            <div className="control">
                                <input className="input" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-left has-text-white">{localization.section10_date}</label>
                    <div className="control">
                        <input className="input" type="date" />
                    </div>
                </div>
                <hr />
                <div class="columns is-6">
                    <button className="button is-outlined is-light column" onClick={() => this.back()} >{localization.back}</button>
                    <button className="button is-outlined is-light column" onClick={() => this.next()} >{localization.next}</button>
                </div>
            </div>

        );
    }

}