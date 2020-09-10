import React from 'react';
import APIService from '../services/APISercive';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            error: "",
            first: "",
            last:"",
            contact: "",
            add: "",
            pass: ""
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        APIService.postNewUser(
            this.state.first,
            this.state.last,
            this.state.contact,
            this.state.add,
            this.state.pass
        )
        .then(res => {
            if (res === ("User already exists")){
                this.setState({error: "User already exists or phone number is invalid"});
            } else if (res === ("User added")){
                this.props.history.push('/')
            } else {
                this.setState({error: "Some unknown error occured"})
            }
        });
        //post data through API Service
    }

    render() {
        return <div>
            <h3 className="error">{this.state.error}</h3>
            <form onSubmit = {this.onSubmit}>
                <label >First Name</label>
                <input type='text' onChange = {this.onChange} value = {this.state.first} name = "first" required />
                <label >Last Name</label>
                <input type='text' onChange = {this.onChange} value = {this.state.last} name = "last" required />
                <label >Contact Number</label>
                <input type='text' onChange = {this.onChange} value = {this.state.contact} name = "contact" required />
                <label >Password</label>
                <input type='password' onChange = {this.onChange} value = {this.state.pass} name = "pass" required />
                <label >Address</label>
                <input type='text' onChange = {this.onChange} value = {this.state.add} name = "add" required />                
                <input type = 'submit'></input>
            </form>
        </div>
    }
}

export default NewUser;