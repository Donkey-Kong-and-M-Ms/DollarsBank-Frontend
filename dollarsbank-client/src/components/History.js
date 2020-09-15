import React from 'react';
import APIService from '../services/APISercive';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ with: 0 })
    }

    onChange = (e) => {
        this.setState({ with: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let accountType = "";
        if (document.getElementById("savings").checked)
            accountType = "Savings";
        else
            accountType = "Checkings"
        APIService.postWithdraw(this.state.with, accountType);

        this.props.history.push('/home');
    }

    render() {
        return <div>
            <div style={{ padding: "20px", margin: "auto", textAlign: "center" }} >
                <h1>How much would you like to withdraw?</h1>
            </div>
            <form onSubmit={this.onSubmit} style={{ marginLeft: "25%" }}>
                <input type='number' onChange={this.onChange} value={this.state.with}></input>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <button type='submit'>submit</button>
            </form>
        </div>
    }
}

export default History;