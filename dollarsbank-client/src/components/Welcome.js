import React from 'react';
import {Link} from 'react-router-dom'

class Welcome extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form>
                <Link to = '/login'><button>Login</button></Link>
                <Link to = '/new'><button>New User</button></Link>
            </form>
        </div>
    }
}

export default Welcome;