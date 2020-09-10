import React from 'react';
import APIService from '../services/APISercive';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            error: "",
            user: "",
            pass: ""
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        APIService.postLogin(this.state.user, this.state.pass)
        .then (res => {
            if (res){
                this.state.history.push('');
            } else {
                this.setState({error: "Incorrect Username or Password"});
            }
        });
    }

    render() {
        return <div>
            <h3 className="error">{this.state.error}</h3>
            <form onSubmit = {this.onSubmit}>
                <label >User ID</label>
                <input type='number' onChange = {this.onChange} value = {this.state.user} name = "user"></input>
                <label >Password</label>
                <input type='password' onChange = {this.onChange} value = {this.state.pass} name = "pass"></input>
                <input type = 'submit'></input>
            </form>
        </div>
    }
}

export default Login;