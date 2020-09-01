import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <form>
                <Link to = '/deposit'><button>Deposit</button></Link>
                <Link to = '/withdraw'><button>Withdraw</button></Link>
                <Link to = '/transfer'><button>Transfer</button></Link>
                <Link to = '/activity'><button>Activity</button></Link>
                <Link to = '/'><button>Logout</button></Link>
            </form>
        </div>
    }
}

export default Home;