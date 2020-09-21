import React from 'react';
import APIService from '../services/APISercive';
import {Link} from 'react-router-dom'


class Withdraw extends React.Component {
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
            <div style={{  margin: "auto", textAlign: "center" }} >
                <h1>Please enter withdrawal information:</h1>
            </div>
            <form onSubmit={this.onSubmit} style={{ marginLeft: "25%",width:"50%" }}>
                <input type='number' onChange={this.onChange} value={this.state.with}></input>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <label for="savings">Savings Accounts</label>&nbsp;
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <label for="checking">Checking Account</label>
                <button type='submit' style={{ width: "100%", }}>Withdraw</button>
            </form>
            <Link to ={'/home'}><button className="homeButton">Home</button></Link>

        </div>
    }
}

export default Withdraw;