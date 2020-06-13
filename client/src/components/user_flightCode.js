import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';
import React, { Component } from 'react';
import Languages from './languages';
import axios from 'axios';

class FlightCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            validation: false
        }
    }

    onLanguageChange(lang){

    }
    
    validateCode(code){
        console.log(code);
        axios.post(`api/user/codeValidation`, { code })
        .then(res => {
            console.log(res.data);
            this.setState({validation: res.data.result});
      })

      console.log(this.state.validation);
      //go to next page with code that stored in this.state.validation
    }

    /*
    .then((res) => {
          console.log(res)
          this.setState({ dataFetched: true, farmerData: res.data.results !== undefined ? res.data.results : [] })
        })
        .catch((err) => {
          console.log(err)
          this.setState({ dataFetched: true })
        })
    */
    render(){
        return(
            <div>
                <div>
                    {/**Logo goes here */}
                    <Languages languageChange={this.onLanguageChange.bind(this)} />
                </div>
                <div className="jumbotron jumbotron-fluid is-fullheight">
                    <div className="container absolutelyOneThird">
                        <h1 className="display-4">Please enter the code provided by your flight attendants.</h1>
                        <input type="text" className="form-control mr-50" placeholder="Example: A8B6F6" id="flightCode" />
                        <br /> <br />
                        <button type="button" className="btn btn-dark" onClick={() => this.validateCode(document.getElementById("flightCode").value)}>Submit</button>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default FlightCode;