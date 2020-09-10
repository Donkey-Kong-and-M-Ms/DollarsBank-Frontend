import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Home from './components/Home';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Transfer from './components/Transfer';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header.jpg'
import Header2 from './components/Header2.jpg'
import Logo from './components/Logo.png'
import Logo2 from './components/Logo2.png'
import Top from './components/top.jpg'
import Middle from './components/mid.jpg'
import Bottom from './components/bottom.jpg'
import Footer from './components/Footer.jpg'



//add a header and an image?
function App() {
  return (
    <div>
      {/* Header  */}
      <div style={{ position: "relative", display: "flex", margin: 0, padding: 0, width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <img src={Header2} style={{ position: "relative", top: "0", left: "0", width: "100%", margin: 0, padding: 0 }} />
        <img src={Logo2} style={{ position: "absolute", left: "0", bottom: "0", marginLeft: "2%", marginBottom: "1%", padding: "0", width: "25%" }} />

      </div>
      {/*
        <div>
          <img src={Top} className="headerpic" style={{margin:"0", padding:"0", display:"block", position:"relative", top:"0", left:"0" }}/>
          <img src={Logo2} style={{position:"absolute",left:"0",bottom:"0", marginLeft:"10%",marginBottom:"10px", borderRadius:"5px"}}/>
        </div>
        <img src={Middle} style={{margin:"0", padding:"0", display:"block", opacity:"0.4"}}/>
        <img src={Bottom} style={{margin:"0", padding:"0", display:"block", opacity:"0.4"}}/>

        This works
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" style="width:80%;  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0.4)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));">
      
*/}

      {/*content */}
      <div style={{ width: "80%",  backgroundImage: "linear-gradient(#8AA7CC, #b8c9e0)", marginLeft: "auto", marginRight: "auto",  }}>
        <div style={{padding:"20px", margin:"auto", textAlign:"center"}} >
          <h1>What would you like to do?</h1>
        </div>
        
        <div style={{ padding: "10px" }}>
          <BrowserRouter style={{justifyContent: "center",alignItems: "center"}}>
            <Switch>
              <Route path='/transfer' component={Transfer} />
              <Route path='/deposit' component={Deposit} />
              <Route path='/withdraw' component={Withdraw} />
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Welcome} />
            </Switch>
          </BrowserRouter>
        </div>
     

      {/*)
      <div>
lksjdlkdfj<br/>
        text<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        ext<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
        lksjdlkdfj<br/>
      </div>
      */}
     </div>
      {/*Footer*/}
      <div style={{ bottom: 0, position: "fixed", width: "80%", marginLeft: "10%", marginBottom: 0, padding: 0, display: "flex" }}>
        <img src={Footer} style={{ width: "100%", margin: 0, padding: 0, borderTopLeftRadius:"5px",borderTopRightRadius:"5px",  }} />
        <div style={{ position: "absolute", left: "0", top: "0", marginLeft: "5%", marginTop: "1%", borderRadius: "5px", padding: "0", width: "25%" }}>

          <table style={{ color: "white", fontSize: "0.7em" }}>
            <tr><td><a href="https://github.com/Donkey-Kong-and-M-Ms" target="_blank">Team GitHub</a></td> </tr>
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