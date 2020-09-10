import React from 'react';

class Withdraw extends React.Component{
    constructor(props) {
        super(props);
        this.state =({with: 0})
    }

    onChange = (e) => {
        this.setState({with: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        //post data through API Service

        this.props.history.push('/home');
    }

    render() {
        return <div>
            <div style={{padding:"20px", margin:"auto", textAlign:"center"}} >
                <h1>How much would you like to withdraw?</h1>
            </div>
            <form onSubmit = {this.onSubmit} style={{marginLeft:"25%"}}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.with}></input>
               <button type = 'submit'>submit</button>
            </form>
        </div>
    }
}

export default Withdraw;