const express = require('express');
const path = require('path');
const e = require('express');
const bodyParser = require('body-parser');
var CryptoJS = require("crypto-js");

const app = express();

//MongoDB user: dbAdmin
//MongoDB pass: d1WfVPEg62NVFNYY

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
	"originAirport" : "JFK",
    "destinationAirport" : "YYZ",
    "destinationDate": '',
    "accompanyingForm" : "Canada ",
	"passengerForms" : [
		{
            "Passport": "A832DF",
            "MedicalRecords": {

            },
            "Form": {

            }
		},{
            "Passport": "B832DF",
            "MedicalRecords": {

            },
            "Form": {
                
            }
		},{
            "Passport": "C832DF",
            "MedicalRecords": {

            },
            "Form": {
                
            }
		},{
            "Passport": "D832DF",
            "MedicalRecords": {

            },
            "Form": {
                
            }
		},
	]
}

//Validates the flight code
app.post('/api/user/codeValidation', (req,res) => {
    //console.log(exampleData.flightCode);
    //console.log(req.body.code);
    if(exampleData.flightCode == req.body.code){ //validated
        res.status(200).send({"result": true, "airline": exampleData.airline, "originAirport": exampleData.originAirport, "destinationAirport": exampleData.destinationAirport, "accompanyingForm": exampleData.accompanyingForm});
        //Should merge passportInfo into here to send back the data which could be moved within react
    }
    else{ //not validated
        res.status(200).send({"result": false});
    }
});

//Validates the passport number as a passenger of the plane
app.post('/api/user/passportValidation', (req,res) => {
    let validation = false;
    for(let i = 0; i < exampleData.passengerForms.length ; i++){
        if(req.body.code == exampleData.passengerForms[i].Passport){
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
app.post('/api/user/medicalEncrypt', (req,res) => {

    var encrypted = CryptoJS.AES.encrypt(req.body.penicillin, "Secret Passphrase").toString();
    var encrypted2 = CryptoJS.AES.encrypt(req.body.novocaine, "Secret Passphrase").toString();
    var encrypted3 = CryptoJS.AES.encrypt(req.body.aspirin, "Secret Passphrase").toString();
    var encrypted4 = CryptoJS.AES.encrypt(req.body.analgin, "Secret Passphrase").toString();
    res.status(200).send({"penicillin": encrypted, "novocaine": encrypted2, "aspirin": encrypted3, "analgin": encrypted4});
});

//Submits the user form
app.get('/api/user/formSubmit', (req,res) => {
    let formSubmit = false;
    for(let i = 0; i < exampleData.passengerForms.length ; i++){
        if(req.body.ID == exampleData.passengerForms[i].Passport){
            exampleData.MedicalRecords = req.body.MedicalData;
            exampleData.Form = req.body.Data;
            formSubmit = true;
            break;
        }
    }
    if(formSubmit){
        res.send({"result": true});
    }
    else{
        res.send({"result": false});
    }
    //req.post to api
});

//Submits the flight attendant form
app.post('/api/flight/formSubmit', (req,res) => {
    exampleData.destinationDate = req.body.date;
    exampleData.originAirport = req.body.departure;
    exampleData.destinationAirport = req.body.arrival;

    res.send(200, {"code": exampleData.flightCode});

    //req.post to api, make a random code and send back the code as well as pushing to api
});

// Handles any requests that don't match the ones above
app.post('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});