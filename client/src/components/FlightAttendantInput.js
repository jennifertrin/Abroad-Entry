import React, { Component } from "react";

export default class FlightAttendantInput extends Component {
  render() {
    return (
      <div className="justify-content-center">
        <h1>Welcome, UA357</h1>
        <form>
          <p>Enter your arrival city:</p>
          <input type="text" />
          <p>Enter your destination city:</p>
          <input type="text" />
          <p>Enter your arrival date:</p>
          <input type="date" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}