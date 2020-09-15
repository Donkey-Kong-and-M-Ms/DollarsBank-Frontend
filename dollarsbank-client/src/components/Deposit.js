import React from 'react';

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
        return <div style={{ backgroundColor:"",marginLeft:"auto", marginRight:"auto",  }}>
            <div style={{padding:"20px", margin:"auto", textAlign:"center"}} >
                <h1>How much would you like to deposit?</h1>
            </div>
            <form onSubmit = {this.onSubmit} style={{marginLeft:"25%"}}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.depo} required></input>
               <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked/>
               <input type="radio" id="checking" name="accountType" value="Checking"/>
               <button type = 'submit'>submit</button>
            </form>
        </div>
    }
}

export default Deposit;