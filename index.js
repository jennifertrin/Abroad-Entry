const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//Validates the flight code
app.get('/api/user/codeValidation', (req,res) => {
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
    console.log('Sent list of items');
});

//Returns flight information
app.get('/api/user/passportInfo', (req,res) => {
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
    console.log('Sent list of items');
});

//Validates the passport number as a passenger of the plane
app.get('/api/user/passportValidation', (req,res) => {
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
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
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
    console.log('Sent list of items');
});

//Submits the flight attendant form
app.get('/api/flight/formSubmit', (req,res) => {
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
    console.log('Sent list of items');
});

//Recieves the flight code
app.get('/api/flight/getCode', (req,res) => {
    /*var list = ["item1", "item2", "item3"];
    res.json(list);*/
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

let exampleData = {
    "airline" : "UA",
	"flightNumber" : "3513",
	"flightCode" : "A8F3C9",
	"originAirport" : "YYZ",
	"destinationAirport" : "JFK",
	"passengerForms" : [
		{
			"Passport#": "A832DF",
		},{
			"Passport#": "B832DF",
		},{
			"Passport#": "C832DF",
		},{
			"Passport#": "D832DF",
		},
	]
}