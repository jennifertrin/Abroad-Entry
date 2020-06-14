import React, { Component } from 'react';
import '../style/css/custom-bulma.css';
import '../style/css/style.css';

class FormAmerica extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>Personal Details:</p>
                <p>Family Name, First (Given), Middle</p>
                <p>Birth Date (Month, Day, Year)</p>
                <p>Number of Family members traveling with you</p>
                <p>(a) U.S. Street Address (hotel name/destination, city, state)</p>
                <p>Passport issued by (country)</p>
                <p>Passport number</p>
                <p>Country of Residence</p>
                <hr />
                <p>Transit Information:</p>
                <p>Countries visited on this trip prior to U.S. arrival</p>
                <p>Airline/Flight No. or Vessel Name</p>
                <p>The primary purpose of this trip is business: (Yes or No)</p>
                <hr />
                <p>I am (We are) bringing:</p>
                <p>fruits, vegetables, plants, seeds, food, insects: </p>
                <p>meats, animals, animal/wildlife products: </p>
                <p>disease agents, cell cultures, snails: </p>
                <p>soil or have been on a farm/ranch/pasture: </p>
                <hr />
                <p>I have (We have) been in close proximity of livestock: (such as touching or handling) (Yes or No)</p>
                <p>I am (We are) carrying currency or monetary instruments over $10,000 U.S. or foreign equivalent: (see definition of monetary instruments on reverse) (Yes or No)</p>
                <p>I have (We have) commercial merchandise: (articles for sale, samples used for soliciting orders, or goods that are not considered personal effects) (Yes or No)</p>
                <hr />
                <p>RESIDENTS—the total value of all goods, including commercial merchandise I/we have purchased or acquired abroad, (including gifts for someone else, but not items mailed to the U.S.) and am/are bringing to the U.S. is: </p>
                <p>VISITORS—the total value of all articles that will remain in the U.S., including commercial merchandise is:</p>
                <hr />
                <p>I HAVE READ THE IMPORTANT INFORMATION ON THE REVERSE SIDE OF THIS FORM AND HAVE MADE A TRUTHFUL DECLARATION.</p>
            </div>
        );
    }
}

export default FormAmerica;