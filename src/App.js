import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Transfer from './components/Transfer';
import NewUser from './components/NewUser';
import History from './components/History';
import NewAccount from './components/NewAccount';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Logo2 from './components/Logo2.png'
import FullBuilding from './components/fullbuilding.jpg'
import UserInfo from './components/UserInfo'

function App() {
  return (
    <div style={{ backgroundColor: "#F8FBFC" }}>
      {/* Header  */}
      <div style={{ position: "relative", display: "flex", margin: 0, padding: 0, width: "80%", height: "100%", marginLeft: "auto", marginRight: "auto", boxShadow: "0px 0px 20px #aaaaaa" }}>
        <img src={FullBuilding} style={{ width: "100%" }} />
          <img src={Logo2} style={{ position: "absolute", left: "0", top: "20%", width: "25%" }} />

      {/*content */}
      <div className = "homeDiv" >
        
        
        <div style={{ padding: "10px", height:"100%" }}>
          <BrowserRouter style={{justifyContent: "center",alignItems: "center"}}>
            <Switch>
              <Route path='/transfer' component={Transfer} />
              <Route path='/deposit' component={Deposit} />
              <Route path='/withdraw' component={Withdraw} />
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/new' component={NewUser} />
              <Route path='/activity' component={History} />
              <Route path='/newaccount' component={NewAccount} />
              <Route path='/userInfo' component={UserInfo} />
              <Route path='/' component={Welcome} />
            </Switch>
          </BrowserRouter>
        </div>

        </div>
        {/*Footer*/}
        <div style={{ position: "absolute", left: "0", bottom: "4%", marginLeft: "4%", padding: "0", width: "25%" }}>

          <table style={{ color: "white", fontSize: "0.7em" }}>
            <tr><td><a href="https://github.com/Donkey-Kong-and-M-Ms" target="_blank">Project GitHub Page</a></td> </tr>
            <tr><td>Front-End</td><td>Keith Prince</td><td><a href="https://github.com/SwordSageKeith" target="_blank">GitHub</a></td><td><a href="https://www.linkedin.com/in/keith-prince-429697a8/" target="_blank">LinkedIn</a></td></tr>
            <tr><td></td><td>Makar T</td><td><a href="https://github.com/MakarTch" target="_blank">GitHub</a></td><td><a href="https://www.linkedin.com/in/makar-tchekalenkov/" target="_blank">LinkedIn</a></td></tr>
            <tr><td>Back-End</td><td>Mark Rubio</td><td><a href="https://github.com/markrubio632" target="_blank">GitHub</a></td><td><a href="https://www.linkedin.com/in/markrubio632/" target="_blank">LinkedIn</a></td></tr>
            <tr><td></td><td>Daniel Larrea</td><td><a href="https://github.com/DanielALarrea" target="_blank">GitHub</a></td><td><a href="https://www.linkedin.com/in/daniel-larrea/" target="_blank">LinkedIn</a></td></tr>

          </table>
        </div>

      </div>

    </div>






  );
}

export default App;