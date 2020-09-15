import React from 'react';
import APIService from '../services/APISercive';
import {Link} from 'react-router-dom';

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
        return <div style={{marginLeft:"30px"}}>
            <h3 className="error">{this.state.error}</h3>
            <h1>Please enter your information:</h1>
            <form onSubmit={this.onSubmit} >
                
                <label >First Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' onChange={this.onChange} value={this.state.first} name="first" required />

                <label >Last Name: </label>
                <input type='text' onChange={this.onChange} value={this.state.last} name="last" required />

                <label >Contact Number: </label>
                <input type='text' onChange={this.onChange} value={this.state.contact} name="contact" required /><br/>

                <label >Password: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='password' onChange={this.onChange} value={this.state.pass} name="pass" required />

                <label >Address: </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' onChange={this.onChange} value={this.state.add} name="add" required />&nbsp;&nbsp;

                <label >Account Type: </label>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <label for="savings">Savings Accounts</label>&nbsp;
                <input type="radio" id="checking" name="accountType" value="Checking" />
                <label for="checking">Checking Account</label><br/>


                
                <label >Initial Deposit: </label>
                <input type='text' onChange={this.onChange} value={this.state.depo} name="depo" required />

                <button type='submit' style={{width:"150px",height:"50px",padding:"10px",fontSize:"15px", float:"right", marginRight:"15%"}} >Create Account</button>
            </form>
            <Link to="/"><button>Back</button></Link>
        </div>
    }
}

export default NewUser;