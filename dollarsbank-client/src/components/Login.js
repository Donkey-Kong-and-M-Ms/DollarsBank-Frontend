import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form>
                <input type='text'>username</input>
                <input type='password'>password</input>
                <submit>Submit</submit>
            </form>
        </div>
    }
}

export default Login;