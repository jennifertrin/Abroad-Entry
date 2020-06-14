const express = require('express');
const path = require('path');
const e = require('express');
const bodyParser = require('body-parser');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

let exampleData = {
    "airline" : "United Airlines",
	"flightNumber" : "3513",
	"flightCode" : "A8F3C9",
	"originAirport" : "YYZ",
	"destinationAirport" : "JFK",
	"passengerForms" : [
		{
			"Passport": "A832DF",
		},{
			"Passport": "B832DF",
		},{
			"Passport": "C832DF",
		},{
			"Passport": "D832DF",
		},
	]
}

//Validates the flight code
app.post('/api/user/codeValidation', (req,res) => {
    //console.log(exampleData.flightCode);
    //console.log(req.body.code);
    if(exampleData.flightCode == req.body.code){ //validated
        res.status(200).send({"result": true, "airline": exampleData.airline, "originAirport": exampleData.originAirport, "destinationAirport": exampleData.destinationAirport});
        //Should merge passportInfo into here to send back the data which could be moved within react
    }
    else{ //not validated
        res.status(200).send({"result": false});
    }
});

//Returns flight information
app.get('/api/user/passportInfo', (req,res) => {
    //later req will find the flightData
    res.json({
        airline : exampleData.airline,
        originAirport : exampleData.originAirport,
        destinationAirport : exampleData.destinationAirport
    });
    console.log('Sent list of items');
});

//Validates the passport number as a passenger of the plane
app.get('/api/user/passportValidation', (req,res) => {
    let validation = false;
    for(let i = 0; i < exampleData.passengerForms.length ; i++){
        if(req == exampleData.passengerForms[i].Passport){
            validation = true;
            break;
        }
    }
    if(validation){
        res.send(200, {"result": true});
    }
    else{
        res.send(200, {"result": false});
    }
    console.log('Sent list of items');
});

//Encrypts the medical record data
app.get('/api/user/medicalEncrypt', (req,res) => {
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
    console.log('Sent list of items');
});

//Submits the user form
app.get('/api/user/formSubmit', (req,res) => {
    //req.post to api
});

//Submits the flight attendant form
app.get('/api/flight/formSubmit', (req,res) => {
    //req.post to api, make a random code and send back the code as well as pushing to api
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});