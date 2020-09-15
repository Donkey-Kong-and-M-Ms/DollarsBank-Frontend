import React from 'react';
import {Link} from 'react-router-dom'
import APIService from '../services/APISercive';

import { noAuto } from '@fortawesome/fontawesome-svg-core';


class Deposit extends React.Component{
    constructor(props) {
        super(props);
        this.state =({depo: 0})
    }

    onChange = (e) => {
        this.setState({depo: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        let accountType = "";
        if (document.getElementById("savings").checked)
            accountType= "Savings";
        else
            accountType= "Checkings";
        console.log(accountType);
        APIService.postDeposit(this.state.depo, accountType);
        this.props.history.push('/home');
    }

    render() {
        return <div style={{ marginLeft:"auto", marginRight:"auto",  }}>
            <div style={{ margin:"auto", textAlign:"center"}} >
                <h1>Please enter deposit information:</h1>
            </div>
            <form onSubmit={this.onSubmit} style={{ marginLeft: "25%", width: "50%",  }}>
                <input type='number' onChange={this.onChange} value={this.state.depo} required></input>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <label for="savings">Savings Accounts</label>&nbsp;
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <label for="checking">Checking Account</label>
                <button type='submit' style={{ width: "100%" }}>Deposit</button>
            </form>
            <Link to ={'/home'}><button className="homeButton">Home</button></Link>
        </div>
    }
}

export default Deposit;