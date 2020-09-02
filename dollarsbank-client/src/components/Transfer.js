import React from 'react';

class Transfer extends React.Component{
    constructor(props) {
        super(props);
        this.state =({amount: 0, target: 0})
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        //post data through API Service
        this.props.history.push('/home');
    }

    render() {
        return <div>
            <form onSubmit = {this.onSubmit}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.amount} name = "amount"></input>
               <input type = 'number' onChange = {this.onChange} value = {this.state.target} name = "target"></input>
               <button type = 'submit'>submit</button>
            </form>
        </div>
    }
}

export default Transfer;