import React from 'react';
import APIService from '../services/APISercive';
import {Link} from 'react-router-dom'

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
            <div style={{ margin: "auto", textAlign: "center" }} >
                <h1>Please enter transfer information:</h1>
            </div>
            <form onSubmit={this.onSubmit} style={{ marginLeft: "25%",width:"50%" }}>
                <label for="amount">Transfer amount:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='number' onChange={this.onChange} value={this.state.amount} name="amount"></input><br/>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <label for="savings">Savings Accounts</label>&nbsp;
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <label for="checking">Checking Account</label><br/>
                <label for="target">User Id to transfer to:</label>
                <input type='number' onChange={this.onChange} value={this.state.target} name="target"></input><br/>
                <input type="radio" id="recsavings" name="recaccountType" value="Savings" defaultChecked />
                <label for="recsavings">Savings Accounts</label>&nbsp;
                <input type="radio" id="recchecking" name="recaccountType" value="Checking" />
                <label for="recchecking">Checking Account</label>
                <button type='submit' style={{ width: "100%", marginTop:"10px" }}>Transfer</button>
            </form>
            <Link to ={'/home'}><button className="homeButton">Home</button></Link>
        </div>
    }
}

export default Transfer;