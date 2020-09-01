import React from 'react';

class Withdraw extends React.Component{
    constructor(props) {
        super(props);
        this.stete =({with: 0})
    }

    onChange = (e) => {
        this.setState({with: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return <div>
            <form onSubmit = {this.onSubmit}>
               <input type = 'number' onChange = {this.onChange} value = {this.state.with}>Withdraw amaount</input>
               <submit>Submit</submit>
            </form>
        </div>
    }
}

export default Withdraw;