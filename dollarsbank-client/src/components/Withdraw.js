import React from 'react';

class Withdraw extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form>
               <input type = 'number'>Withdraw amaount</input>
               <submit>Submit</submit>
            </form>
        </div>
    }
}

export default Withdraw;