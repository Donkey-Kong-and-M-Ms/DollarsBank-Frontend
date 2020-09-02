import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            user: "",
            pass: ""
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        //post data through API Service
    }

    render() {
        return <div>
            <form>
                <input type='text' onChange = {this.onChange} value = {this.state.user} name = "user"></input>
                <input type='password' onChange = {this.onChange} value = {this.state.pass} name = "pass"></input>
                <input type = 'submit'></input>
            </form>
        </div>
    }
}

export default Login;