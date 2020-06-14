import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';
import React, { Component } from 'react';

class Medical extends Component {

    render() {
        return (
            <div class="medicalRecords">
                <label id="dropdown-label" for="dropdown">Blood type:</label>
                <select type="" id="dropdown" placeholder="Choose an option">
                    <option value="0">---</option>
                    <option value="1">O</option>
                    <option value="2">A</option>
                    <option value="3">B</option>
                    <option value="4">AB</option>
                </select>
                <input type="radio" name="radio-res" id="negative" value="-" ></input>
                <label id="radio-label" for="negative">- Negative</label>
                <input type="radio" name="radio-res" id="positive" value="+"></input>
                <label id="radio-label" for="positive">+ Positive</label>
                <label id="cur_state-label"  >Your medicines allergens:</label>
                <input type="checkbox" name="check" id="penicillin" value="penicillin" ></input>
                <label id="check" for="penicillin">Penicillin</label>
                <input type="checkbox" name="check" id="novocaine" value="novocaine" ></input>
                <label id="check" for="novocaine">Novocaine</label>
                <input type="checkbox" name="check" id="aspirin" value="aspirin" ></input>
                <label id="check" for="aspirin">Aspirin</label>
                <input type="checkbox" name="check" id="analgin" value="analgin" ></input>
                <label id="check" for="analgin">Analgin</label>
                <input type="checkbox" name="check" id="other" value="other" ></input>
                <label id="textarea-label" for="other">Other one</label>
                <textarea name="textarea" cols="35"
                    placeholder="Indicate which..." disabled></textarea>
            </div>

        );
    }
}

export default Medical;