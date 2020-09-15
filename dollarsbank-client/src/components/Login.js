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
                this.props.history.push('/home');
            } else {
                //this.setState({error: "Incorrect Username or Password"});
            }
        });
    }

    render() {
        return <div >
          <h3 className="error">{this.state.error}</h3>
            <div style={{padding:"20px", margin:"auto", textAlign:"center"}} >
                <h1>Please enter your username and password</h1>
            </div>
            <form style={{marginLeft:"25%"}} onSubmit = {this.onSubmit}>
                <label>Username</label>
                <input type='text' onChange = {this.onChange} value = {this.state.user} name = "user"></input>
                <label>Password</label>
                <input type='password' onChange = {this.onChange} value = {this.state.pass} name = "pass"></input>
                <button type='submit' style={{width:"150px",height:"50px",padding:"10px",fontSize:"15px", margin:"15px"}} >Log in</button>
            </form>
        </div>
    }
}

export default Login;