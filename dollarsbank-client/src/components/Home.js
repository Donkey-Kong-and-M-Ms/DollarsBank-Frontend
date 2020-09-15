import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faClipboardList} from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import TokenService from '../services/TokenService';



class Home extends React.Component{
    constructor(props) {
        super(props);
    }


    logout = () => {
        TokenService.clearUserId();
    }

    render() {
        return <div>
            <div style={{ margin:"auto", textAlign:"center"}} >
                <h1>What would you like to do?</h1>
            </div>
            <form >

                <Link to = '/deposit'><button style={{marginLeft:"12%",height:"90px" }}>Deposit&nbsp; <FontAwesomeIcon icon={faDollarSign}/> <FontAwesomeIcon icon={faArrowRight}/> <FontAwesomeIcon icon={faLandmark}/> </button></Link>
                <Link to = '/withdraw'><button style={{height:"90px"}}>Withdraw&nbsp; <FontAwesomeIcon icon={faDollarSign}/> <FontAwesomeIcon icon={faArrowLeft}/> <FontAwesomeIcon icon={faLandmark}/></button></Link>
                <Link to = '/transfer'><button style={{height:"90px"}}>Transfer&nbsp;<FontAwesomeIcon icon={faArchive}/> <FontAwesomeIcon icon={faExchangeAlt}/> <FontAwesomeIcon icon={faArchive}/></button></Link>
                <Link to = '/activity'><button style={{marginLeft:"25%", height:"90px" }}>Activity&nbsp;<FontAwesomeIcon icon={faClipboardList}/></button></Link>
                <Link to = '/newaccount'><button >New Account&nbsp;<FontAwesomeIcon icon={faUndo}/></button></Link>
                <Link to = '/'><button style={{height:"90px"}} onClick={this.logout}>Logout&nbsp;<FontAwesomeIcon icon={faUndo}/></button></Link>

            </form>
        </div>
    }
}

export default Home;