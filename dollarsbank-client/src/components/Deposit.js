import React from 'react';

class Deposit extends React.Component{
    constructor(props) {
        super(props);
        this.state =({depo: 0})
    }

    onChange = (e) => {
        this.setState({depo: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        //post data through API Service

        this.props.history.push('/home');
    }

    render() {
        return <div>
            <form onSubmit = {this.onSubmit}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.depo}></input>
               <button type = 'submit'>submit</button>
            </form>
        </div>
    }
}

export default Deposit;