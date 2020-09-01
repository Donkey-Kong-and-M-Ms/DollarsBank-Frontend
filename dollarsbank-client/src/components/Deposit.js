import React from 'react';

class Deposit extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form>
               <input type = 'number'>deposit amaount</input>
               <submit>Submit</submit>
            </form>
        </div>
    }
}

export default Deposit;