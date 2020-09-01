import React from 'react';

class Deposit extends React.Component{
    constructor(props) {
        super(props);
        this.stete =({depo: 0})
    }

    onChange = (e) => {
        this.setState({depo: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return <div>
            <form onSubmit = {this.onSubmit}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.dep}>deposit amaount</input>
               <submit>Submit</submit>
            </form>
        </div>
    }
}

export default Deposit;