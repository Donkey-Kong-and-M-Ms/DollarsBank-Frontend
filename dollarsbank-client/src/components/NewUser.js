import React from 'react';
import APIService from '../services/APISercive';
import {Link} from 'react-router-dom';
import axios from 'axios'

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
            depo: "",
            userId:0
        })
    }

    componentDidMount(){
        this.findUserId()
    }

    findUserId(){
        axios.get("http://localhost:8080/bank/newUserId")
            .then(response => response.data)
            .then((data) => {
                this.setState({userId:data})
                console.log(this.state.userId)
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
            <h1 style={{display:"inline"}}>Please enter your information:</h1>
            <h3 style={{display:"inline", marginLeft:"10%", color:"#003E7E"}}>Upon account creation, your User Id will be {this.state.userId}</h3>

            <form onSubmit={this.onSubmit} >
                
                <label >First Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' onChange={this.onChange} value={this.state.first} name="first" required />

                <label >Last Name: </label>
                <input type='text' onChange={this.onChange} value={this.state.last} name="last" required />

                <label >Contact Number: </label>
                <input type='text' onChange={this.onChange} value={this.state.contact} name="contact" placeholder="(xxx)xxx-xxx" required /><br/>

                <label >Password: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='password' onChange={this.onChange} value={this.state.pass} name="pass" required />

                <label >Address: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' onChange={this.onChange} value={this.state.add} name="add" required />

                <label >Account Type:</label>
                <input type="radio" id="savings" name="accountType" value="Savings" defaultChecked />
                <label for="savings">Savings Account</label>
                <input type="radio" id="checking" name="accountType" value="Checking"/>
                <label for="checking">Checking Account</label><br/>

                <label >Initial Deposit: </label>
                <input type='text' onChange={this.onChange} value={this.state.depo} name="depo" required />

                <button type='submit' className="createButton" >Create Account</button>
            </form>
            <Link to="/"><button className="homeButton">Back</button></Link>

        </div>
    }
}

export default NewUser;