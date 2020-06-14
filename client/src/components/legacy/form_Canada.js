import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';
import canada from '../images/canada.png'
import family from '../images/family.png'

class FormCanada extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="formCanada">
                <div class="welcomeCountry shadow p-3 mb-5 bg-white rounded">
                    <div class="smallColumn">
                        <img src={canada}
                            alt="Flag of Canada" width="150px" height="150px"></img>
                    </div>
                    <div id="welcomeCanada largeColumn">
                        <h1>Welcome to Canada!</h1>
                        <p>Please fill out the form to enter into Canada.</p>
                    </div>
                </div>
                <div class="section" id="sectionOneCanada">
                    <div class="smallColumn">
                        <img src={family} alt="Icon of a family" width="175px" height="150px" id="familyPhoto"></img></div>
                    <div class="largecolumn">
                        <h1>Part 1</h1>
                        <h2>All travelers living together at same address at home:</h2>
                    </div>
                </div>
                <div class="FormSection">
                    <div class="input-group mb-3 col-md">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">First Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="First Name" aria-describedby="basic-addon1"></input>
                    </div>
                    <div class="input-group mb-3 col-md">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Middle Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Middle Name" aria-describedby="basic-addon1"></input>
                    </div>
                    <div class="input-group mb-3 col-md">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Last Name</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Last Name" aria-describedby="basic-addon1"></input>
                    </div>
                    <div class="input-group mb-3 col-md">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Date of Birth</span>
                        </div>
                        <input type="date" class="form-control" aria-label="Date of Birth" aria-describedby="basic-addon1"></input>
                    </div>
                    <div class="input-group mb-3 col-md">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Citizenship</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Citizenship" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
                <div class="buttonRow">
                <button class="btn btn-primary addTraveler">Add Another Traveler</button>
                <button class="btn btn-secondary next">Next</button>
                </div>
                <h2>Home Address:</h2>
                <p>Home address (Number, street, apartment number)</p>
                <p>City/Town</p>
                <p>Prov./State</p>
                <p>Country</p>
                <p>Postal/Zip code</p>
                <hr />
                <h2>Arriving by:</h2>
                <p>Check with Air, Rail, Marine, Highway</p>
                <p>Airline/flight No., train No. or vessel name</p>
                <hr />
                <h2>Purpose of Trip:</h2>
                <p>Study</p>
                <p>Personal</p>
                <p>Business</p>
                <hr />
                <h2>Arriving From:</h2>
                <p>U.S. only</p>
                <p>Other country direct</p>
                <p>Other countries via the U.S.</p>
                <hr />
                <h2>I am/we are bringing into Canada (Check with Yes or No to the question)</h2>
                <p>Firearms or other weapons (e.g. switchblades, Mace or pepper spray). </p>
                <p>Commercial goods, whether or not for resale (e.g. samples, tools, equipment).</p>
                <p>Meat, fish, seafood, eggs, dairy products, fruits, vegetables, seeds, nuts, plants, flowers, wood, animals, birds, insects, and any parts, products or by-products of any of the foregoing.</p>
                <p>Currency and/or monetary instruments totaling CAN$10,000 or more.</p>
                <p>I/we have unaccompanied goods. </p>
                <p>I/we have visited a farm and will be going to a farm in Canada.</p>
                <br />
                <p>Date left Canada YY - MM - DD</p>
                <p>Value of goods – CAN$ purchased or received abroad (including gifts, alcohol & tobacco</p>
                <p>Date left Canada YY - MM - DD</p>
                <p>Value of goods – CAN$ purchased or received abroad (including gifts, alcohol & tobacco)</p>
                <hr />
                <h2>Visitors to Canada:</h2>
                <p>Duration of stay in Canada (How many days)</p>
                <p>Do you or any person listed above exceed the duty-free allowances per person? (See instructions on the left.) - Yes or No</p>
                <hr />
                <h2>Residents of Canada:</h2>
                <p>Do you or any person listed above exceed the exemptions per person? (See instructions on the left.) - Yes or No</p>
                <hr />
                <h2>Signatures (age 16 and older): I certify that my declaration is true and complete.</h2>
                <p>Date</p>
            </div>
        );
    }
}

export default FormCanada;

// for "All travelers living together at same address at home:, have a button to select more members of the same family"