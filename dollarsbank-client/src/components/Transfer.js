import React from 'react';
import APIService from '../services/APISercive';

class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ amount: 0, target: 0 })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let accountType = "";
        let recAccountType = "";
        if (document.getElementById("savings").checked)
            accountType = "Savings";
        else
            accountType = "Checkings"
        if (document.getElementById("recsavings").checked)
            recAccountType = "Savings";
        else
            recAccountType = "Checkings"

        APIService.postTransfer(this.state.amount, this.state.target, accountType, recAccountType);
        this.props.history.push('/home');
    }

    render() {
        return <div>
            <div style={{ padding: "20px", margin: "auto", textAlign: "center" }} >
                <h1>How much would you like to transfer?</h1>
            </div>
            <form onSubmit={this.onSubmit} style={{ marginLeft: "12.5%" }}>
                <input type='number' onChange={this.onChange} value={this.state.amount} name="amount"></input>
                <input type='number' onChange={this.onChange} value={this.state.target} name="target"></input>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <p>Recipient account type</p>
                <input type="radio" id="recsavings" name="recaccountType" value="Savings" defaultChecked />
                <input type="radio" id="recchecking" name="recaccountType" value="Checking" />
                <button type='submit'>submit</button>
            </form>
        </div>
    }
}

export default Transfer;