import React from 'react';
import APIService from '../services/APISercive';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            error: "",
            first: "",
            last: "",
            contact: "",
            add: "",
            pass: "",
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

        APIService.postNewUser(
            this.state.first,
            this.state.last,
            this.state.contact,
            this.state.add,
            this.state.pass,
            this.state.depo,
            accountType
        )
            .then(res => {
                this.props.history.push("/login");
            });
    }

    render() {
        return <div>
            <h3 className="error">{this.state.error}</h3>
            <form onSubmit={this.onSubmit}>
                <label >First Name</label>
                <input type='text' onChange={this.onChange} value={this.state.first} name="first" required />
                <label >Last Name</label>
                <input type='text' onChange={this.onChange} value={this.state.last} name="last" required />
                <label >Contact Number</label>
                <input type='text' onChange={this.onChange} value={this.state.contact} name="contact" required />
                <label >Password</label>
                <input type='password' onChange={this.onChange} value={this.state.pass} name="pass" required />
                <label >Address</label>
                <input type='text' onChange={this.onChange} value={this.state.add} name="add" required />
                <label >Account Type</label>
                <p><input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />Savings</p>

                <p><input type="radio" id="checking" name="accountType" value="Checking" />Checking</p>

                <label >Initial Deposit</label>
                <input type='text' onChange={this.onChange} value={this.state.depo} name="depo" required />
                <input type='submit'></input>
            </form>
        </div>
    }
}

export default NewUser;