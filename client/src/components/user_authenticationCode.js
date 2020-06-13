import React, { Component } from 'react';

class AuthenticationCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            airline: "Air Canada",
            origin: "Toronto",
            destination: "New York"
        }
    }


    authenticateCode(code){
        //validated from the value
    }

    render(){
        return(
            <div>
                {/**HAVE Language Component up here */}
                <div className="jumbotron jumbotron-fluid is-fullheight">
                    <div className="container absolutelyOneThird">
                        <h2>Thank you for flying with us, {this.state.airline}, from {this.state.origin} to {this.state.destination}.</h2> <br/>
                        <h4>For verification that you are a passenger, please enter your passport #.</h4> <br />
                        <input type="text" className="form-control mr-50" id="passportNumber" />
                        <br /> <br />
                        <button type="button" className="btn btn-dark" onClick={() => this.authenticateCode(document.getElementById("passportNumber").value)}>Submit</button>
                    </div>
                </div>
                
            </div>
        );
    }

}

export default AuthenticationCode;