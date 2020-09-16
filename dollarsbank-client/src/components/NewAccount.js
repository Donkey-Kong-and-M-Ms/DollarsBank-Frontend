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
            <div style={{ margin:"auto", textAlign:"center"}} >
                <h1>Please enter new account information:</h1>
            </div>
            <form onSubmit={this.onSubmit} style={{ marginLeft: "25%", width: "50%",  }}>
                <label >Initial Deposit: </label>
                <input type='text' onChange={this.onChange} value={this.state.depo} name="depo" required />

                <input type="radio" id="savings" name="accountType" value="Savings" style={{marginLeft:"10%"}}defaultChecked />
                <label for="savings">Savings Account</label>&nbsp;
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <label for="checking">Checking Account</label>

                <button type='submit' style={{ width: "100%" }}>Create Account</button>
            </form>
            <Link to="/home"><button className="homeButton">Back</button></Link>

        </div>
    }
}


export default NewAccount;