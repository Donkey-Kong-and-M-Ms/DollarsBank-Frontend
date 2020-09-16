import React from 'react';
import APIService from '../services/APISercive';
import {Link} from 'react-router-dom';

class NewAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            depo: ""
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let accountType = "";
        if (document.getElementById("savings").checked)
            accountType = "Savings";
        else
            accountType = "Checkings"

        APIService.postNewAccount(accountType, this.state.depo)
            .then(res => {
                this.props.history.push("/home");
            });
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <label >Account Type</label>
                <p><input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />Savings</p>

                <p><input type="radio" id="checking" name="accountType" value="Checking" />Checking</p>

                <label >Initial Deposit</label>
                <input type='text' onChange={this.onChange} value={this.state.depo} name="depo" required />
                <input type='submit'></input>
            </form>
            <Link to ={'/home'}><button className="homeButton">Home</button></Link>
        </div>
    }
}

export default NewAccount;