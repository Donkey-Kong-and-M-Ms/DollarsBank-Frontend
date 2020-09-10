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
            <div style={{padding:"20px", margin:"auto", textAlign:"center"}} >
                <h1>How much would you like to transfer?</h1>
            </div>
            <form onSubmit = {this.onSubmit} style={{marginLeft:"12.5%"}}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.amount} name = "amount"></input>
               <input type = 'number' onChange = {this.onChange} value = {this.state.target} name = "target"></input>
               <button type = 'submit'>submit</button>
            </form>
        </div>
    }
}

export default Transfer;