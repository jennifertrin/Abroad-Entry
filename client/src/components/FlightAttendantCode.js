import React, { Component } from "react";

export default class FlightAttendantCode extends Component {
  render() {
    return (
      <div className="justify-content-center">
        <h1>Welcome, UA357</h1>
        <h2>Your code is:</h2>
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
        <input
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
      </div>
    );
  }
}