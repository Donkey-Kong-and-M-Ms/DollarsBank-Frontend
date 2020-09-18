import React from 'react';
import {Link} from 'react-router-dom'

class Welcome extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div style={{padding:"20px", margin:"auto", textAlign:"center"}} >
                <h1>Welcome to DK Bank!</h1>
                <h3>If you would like to skip the account creation process you may log in with User Id: 5 and Password: Password*13</h3>
            </div>
            <form style={{margin:"auto"}}>
                <Link to = '/login'><button style={{marginLeft:"25%"}}>Login</button></Link>
                <Link to = '/new'><button>New User</button></Link>
            </form>
        </div>
    }
}

export default Welcome;