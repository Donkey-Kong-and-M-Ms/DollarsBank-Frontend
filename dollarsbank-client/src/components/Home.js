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
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
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

                <Link to = '/deposit'><button className="menuButton" style={{marginLeft:"12%"}}>Deposit&nbsp; <FontAwesomeIcon icon={faDollarSign}/> <FontAwesomeIcon icon={faArrowRight}/> <FontAwesomeIcon icon={faLandmark}/> </button></Link>
                <Link to = '/withdraw'><button className="menuButton" >Withdraw&nbsp; <FontAwesomeIcon icon={faDollarSign}/> <FontAwesomeIcon icon={faArrowLeft}/> <FontAwesomeIcon icon={faLandmark}/></button></Link>
                <Link to = '/transfer'><button className="menuButton">Transfer&nbsp;<FontAwesomeIcon icon={faArchive}/> <FontAwesomeIcon icon={faExchangeAlt}/> <FontAwesomeIcon icon={faArchive}/></button></Link>
                <Link to = '/userInfo'><button className="menuButton" style={{marginLeft:"12%"}}>User Info&nbsp;<FontAwesomeIcon icon={faUsers}/></button></Link>
                <Link to = '/activity'><button className="menuButton">Activity&nbsp;<FontAwesomeIcon icon={faClipboardList}/></button></Link>
                <Link to = '/newaccount'><button className="menuButton">New Account&nbsp;<FontAwesomeIcon icon={faPlus}/></button></Link>
                <Link to = '/'><button className="homeButton" onClick={this.logout}>Logout&nbsp;<FontAwesomeIcon icon={faUndo}/></button></Link><Link to = '/'><button className="homeButton" onClick={this.logout}>Logout&nbsp;<FontAwesomeIcon icon={faUndo}/></button></Link>


            </form>
        </div>
    }
}

export default Home;