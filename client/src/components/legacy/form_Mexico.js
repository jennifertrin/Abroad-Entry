import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';

class FormMexico extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Entry Information:</p>
                <p>Means of entry*:</p>
                <p>Point of entry*:</p>
                <p>Date of arrival to Mexico*:</p>
                <p>Date of departure*:</p>
                <p>Airline name*:</p>
                <p>Flight number*:</p>
                <hr />
                <p>Personal Information:</p>
                <p>Name(s)*:</p>
                <p>Surname(s)*:</p>
                <p>Gender*:</p>
                <p>Date of birth*:</p>
                <p>Nationality (Country)*:</p>
                <p>Country of birth*:</p>
                <hr />
                <p>Identification document:</p>
                <p>Type of document*:</p>
                <p>Document number*:</p>
                <p>Document number (Confirmation)*:</p>
                <p>Country of issue*:</p>
                <p>Date of issue*:</p>
                <p>Date of issue (Confirmation)*:</p>
                <p>Expiration date*:</p>
                <p>Expiration date (Confirmation)*:</p>
                <hr />
                <p>Place of residence:</p>
                <p>Country of residence*:</p>
                <p>Address of residence*:</p>
                <p>Trip Information:</p>
                <p>Reason of trip*:</p>
                <p>Specify*:</p>
                <p>State*:</p>
                <p>Address in Mexico*:</p>
                <hr />
                <p>Email:</p>
                <p>Email*:</p>
                <p>Email (Confirmation)*:</p>
                <p>Verification code*:</p>
            </div>
        );
    }
}

export default FormMexico;